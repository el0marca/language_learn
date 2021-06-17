import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import { Text, View, StyleSheet, TextInput, ImageBackground } from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import database from '@react-native-firebase/database';
import { setUserInfo } from '../redux/auth';
import * as Progress from 'react-native-progress';
import { updateBeginnerProgress } from '../redux/progress';

export const ProfileScreen = () => {
  const [loginMode, setLoginMode] = useState(false)
  const dispatch = useDispatch()
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const progress = useSelector(state => state.progress)
  const user = useSelector(state => state.auth.user)
  const [errorInfo, setErrorInfo] = useState('')
  const [forgotPassword, setForgotPassword] = useState(false)
  const [initializing, setInitializing] = useState(false)
  const [alert, setAlert] = useState('')

  function signUpWithEmail() {
    setErrorInfo('')
    setAlert('')
    if (!email || !password || email.indexOf('@') === -1) return setErrorInfo('Lütfən email və ya şifrəni düzgün daxil edin!')
    else if (password.length < 7) return setErrorInfo('Şifrə 6 simvoldan artıq olmalıdır')
    setInitializing(true)
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((e) => {
        setData(e.user.uid)
        console.log('User account created & signed in!');
        setInitializing(false)
      })
      .catch(error => {
        setInitializing(false)
        if (error.code === 'auth/email-already-in-use') {
          setErrorInfo('e-mail mövcuddır')
        }
        else if (error.code === 'auth/invalid-email') {
          setErrorInfo('Lütfən e-mailı düzgün daxil edin')
        }
      })
  }
  function signInWithEmail() {
    setErrorInfo('')
    setAlert('')
    if (!email || !password || email.indexOf('@') === -1) return setErrorInfo('Lütfən e-mail və ya şifrəni düzgün daxil edin!')
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((e) => {
        dispatch(setUserInfo(e.user))
        getData(e.user.uid)
        console.log('user have authorized')
      })
      .catch(error => {
        if (error.code === 'auth/network-request-failed') {
          setErrorInfo('Lütfən internet bağlantını yoxlayın!')
        }
        else if (error.code === 'auth/too-many-requests') {
          setErrorInfo('bir müddətdən sonra yenidən cəhd edin')
        }
        else if (error.code === 'auth/user-not-found') {
          setErrorInfo('həsab mövcud deyil')
        }
        else { setErrorInfo('Email və yaxud şifrə yalnışdır') }
      })
  }
  function signOut() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }
  const passwordReset = () => {
    setErrorInfo('')
    setAlert('')
    if (!email || email.indexOf('@') === -1) return setErrorInfo('Lütfən e-mailı düzgün daxil edin')
    auth()
      .sendPasswordResetEmail(email)
      .then(e => setAlert('Lütfən e-mail qutunu yoxlayın'))
      .catch(e => {
        if (e === 'auth/invalid-email') { setErrorInfo('hesab mövcud deyil') }
        if (e == 'auth/too-many-requests') { setErrorInfo('bir müddetdən sonra yenidən cəhd edin') }
        else setErrorInfo('Əməliyyat baş tutmadı')
        console.log(e)
      })
  }
  useEffect(() => setErrorInfo(''), [email, password])

  const setData = (uid) => {
    database()
      .ref(`/users/${uid}`)
      .set(progress)
      .then(() => console.log('Data set.'))
  }
  const getData = (uid) => {
    database()
      .ref(`/users/${uid}`)
      .once('value')
      .then(snapshot => {
        const beginner = JSON.parse(snapshot.val()[[0]]);
        if (beginner > progress[0]) { dispatch(updateBeginnerProgress(beginner)) }
      });
  }
  let learnedWords = 0
  let theory = 0
  let passedSentences = 0
  

  if (initializing) return (
    <View style={{ flex: 1, justifyContent: "center", flexDirection: "row", justifyContent: "space-around", padding: 10 }}>
      <ActivityIndicator size={50} color="#00ff00" />
    </View>)

  return (
    <ImageBackground source={require('../img/bg/profileBg.png')} style={{ flex: 1 }}>
      <View style={{ paddingTop: 50, flex: 1 }}>
        {!user ? (
          <>
            <Text style={{ textAlign: 'center', paddingTop: 10, fontSize: 18, fontFamily: 'SFUIDisplay-Regular', marginBottom: 10 }}>
              {!loginMode ? 'Progresi saxlamaq üçün qeydiyyatdan keçin' : 'Daxil olun'}</Text>
            <TextInput
              style={[s.input, errorInfo && { borderColor: '#DB504B' }]}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="e-mail"
              type='email'
            />
            {!forgotPassword && <TextInput
              style={[s.input, errorInfo && { borderColor: '#DB504B' }]}
              onChangeText={onChangePassword}
              value={password}
              placeholder="şifrə"
              type='password'
              secureTextEntry={true}
            />}
            <Text style={{ fontFamily: 'SFUIDisplay-Regular', textAlign: 'center', fontSize: 16, marginBottom: 10 }}>{alert || errorInfo}</Text>
            {!loginMode ? <View>
              <TouchableOpacity onPress={signUpWithEmail}>
                <Text style={{ backgroundColor: '#0881FF', fontFamily: 'SFUIDisplay-Regular', marginHorizontal: 50, padding: 10, textAlign: 'center', borderRadius: 15, fontSize: 20, color: '#fff', marginBottom: 5 }}>Qeydiyyatdan keçmək</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setLoginMode(true), setErrorInfo(''), onChangePassword('') }}>
                <Text style={{ backgroundColor: '#0881FF', fontFamily: 'SFUIDisplay-Regular', marginHorizontal: 50, padding: 10, textAlign: 'center', borderRadius: 15, fontSize: 20, color: '#fff', marginBottom: 5 }}>Həsabınız var?</Text>
              </TouchableOpacity>
            </View>
              : null}
            {loginMode ? <View>
              {!forgotPassword && <TouchableOpacity onPress={signInWithEmail}>
                <Text style={{ backgroundColor: '#0881FF', fontFamily: 'SFUIDisplay-Regular', marginHorizontal: 50, padding: 10, textAlign: 'center', borderRadius: 15, fontSize: 20, color: '#fff', marginBottom: 5 }}>Daxil olmaq</Text>
              </TouchableOpacity>}
              <TouchableOpacity onPress={() => { !forgotPassword && (setForgotPassword(true), setErrorInfo('')), forgotPassword && passwordReset() }}>
                <Text style={{ backgroundColor: '#0881FF', fontFamily: 'SFUIDisplay-Regular', marginHorizontal: 50, padding: 10, textAlign: 'center', borderRadius: 15, fontSize: 20, color: '#fff', marginBottom: 5 }}>{!forgotPassword ? 'Şifrəni unutmusan?' : 'Şifrəni sıfırla'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { forgotPassword && setForgotPassword(false), loginMode && !forgotPassword && setLoginMode(false), setAlert(''), setErrorInfo(''), onChangePassword('') }}>
                <Text style={{ backgroundColor: '#0881FF', fontFamily: 'SFUIDisplay-Regular', marginHorizontal: 50, padding: 10, textAlign: 'center', borderRadius: 15, fontSize: 20, color: '#fff', marginBottom: 5 }}>Geriyə</Text>
              </TouchableOpacity>
            </View> : null}
          </>
        ) :
          <View style={{ paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Text style={{ marginRight: 10 }}>{user.email}</Text>
              <TouchableOpacity onPress={signOut}>
                <Text style={{ backgroundColor: '#7B97BC', fontFamily: 'SFUIDisplay-Regular', paddingVertical: 5, textAlign: 'center', borderRadius: 5, fontSize: 17, color: '#fff', paddingHorizontal: 10 }}>çıxmaq</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10 }}>
              <ProgresItem style={{}} progress={learnedWords} item='söz tərcümə olunub' />
              <ProgresItem progress={theory} item='qrammatik tapşırıq həll edilib' />
              <ProgresItem progress={passedSentences} item='dinləmə tapşırıqları həll olunub' />
              <ProgresItem progress={passedSentences} item='cümlə azərbaycan dilinə tərcümə olunub' />
              <ProgresItem progress={passedSentences} item='cümlə ingilis dilinə tərcümə olunub' />
            </View>
          </View>
        }
      </View>
    </ImageBackground>
  )
}

const ProgresItem = ({ item, progress }) => {
  return (
    <Progress.Bar style={{ justifyContent: 'center', marginTop: 10, }} progress={0.4} width={null} height={40} color='#d1ffef' unfilledColor='#F7F9FA' borderRadius={10} animationType='timing' useNativeDriver={true} borderWidth={0}>
      <Text style={{ position: 'absolute', left: 10, fontSize: 18, fontFamily: 'SFUIDisplay-Regular' }}>
        {progress} {item}
      </Text>
    </Progress.Bar>
  )
}

const s = StyleSheet.create({
  input:
  {
    height: 50,
    margin: 12,
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 15,
    fontSize: 17,
    borderColor: '#999'
  }

});
