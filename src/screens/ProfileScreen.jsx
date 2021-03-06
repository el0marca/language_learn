import React, { useEffect, useState } from 'react'
import { ActivityIndicator, TouchableOpacity } from 'react-native'
import { Text, View, StyleSheet, TextInput, ImageBackground, Dimensions, Image, Button } from 'react-native'
import auth, { firebase } from '@react-native-firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import database from '@react-native-firebase/database'
import { setUserInfo } from '../redux/auth'
import { updateProgress } from '../redux/progress'
import { Back } from '../components/Common/Back'
import ProgressCircle from 'react-native-progress-circle'

const { width } = Dimensions.get('window');

export const ProfileScreen = () => {
  const [loginMode, setLoginMode] = useState(false)
  const dispatch = useDispatch()
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const progress = useSelector(state => state.progress[0])
  const user = useSelector(state => state.auth.user)
  const [errorInfo, setErrorInfo] = useState('')
  const [forgotPassword, setForgotPassword] = useState(false)
  const [initializing, setInitializing] = useState(false)
  const [alert, setAlert] = useState('')
  const learnWords = Math.floor((progress-1)*2.2)
  // progress < 8 * 60 + 1 ? Math.floor((progress - 1) / 8 * 15) : Math.floor((60 * 15) + (progress - 481) / 8 * 10)
  const passedSentences = Math.floor(progress / 8) * 30

  function signUpWithEmail() {
    setErrorInfo('')
    setAlert('')
    if (!email || !password || !email.includes('@')) return setErrorInfo('Lütfən email və ya şifrəni düzgün daxil edin!')
    else if (password.length <= 5) return setErrorInfo('Şifrə 5 simvoldan artıq olmalıdır')
    setInitializing(true)
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((e) => {
        setData(e.user.uid)
        setInitializing(false)
      })
      .catch(error => {
        setInitializing(false)
        if (error.code === 'auth/email-already-in-use') {
          setErrorInfo('Hesab artıq mövcuddur')
        }
        else if (error.code === 'auth/invalid-email') {
          setErrorInfo('Lütfən e-mailı düzgün daxil edin')
        }
      })
  }
  function signInWithEmail() {
    setErrorInfo('')
    setAlert('')
    if (!email || !password || !email.includes('@')) return setErrorInfo('Lütfən e-mail və ya şifrəni düzgün daxil edin!')
    setInitializing(true)
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((e) => {
        dispatch(setUserInfo(e.user))
        getData(e.user.uid)
        console.log('user have authorized')
        setLoginMode(false)
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
      .finally(e => setInitializing(false))
  }
  function signOut() {
    setInitializing(true)
    auth()
      .signOut()
      // .then(() => dispatch(setUserInfo(null)))
      .finally(e => { dispatch(setUserInfo(null)), setInitializing(false) })
  }
  const passwordReset = () => {
    setErrorInfo('')
    setAlert('')
    if (!email || !email.includes('@')) return setErrorInfo('Lütfən e-mailı düzgün daxil edin')
    setInitializing(true)
    auth()
      .sendPasswordResetEmail(email)
      .then(e => setAlert('Lütfən e-mail qutunuzu yoxlayın'))
      .catch(e => {
        if (e === 'auth/invalid-email') { setErrorInfo('hesab mövcud deyil') }
        if (e == 'auth/too-many-requests') { setErrorInfo('bir müddetdən sonra yenidən cəhd edin') }
        else setErrorInfo('Əməliyyat baş tutmadı')
      })
      .finally(e => {
        setInitializing(false), setTimeout(() => {
          setLoginMode(true)
          setForgotPassword(false)
        }, 2000)
      })
  }
  useEffect(() => { setErrorInfo(''), setAlert('') }, [email, password, loginMode, forgotPassword])

  const setData = (uid) => {
    database()
      .ref(`/users/${uid}`)
      .set({ progress: progress })
      .then(() => console.log('Data set.'))
  }
  const getData = (uid) => {
    database()
      .ref(`/users/${uid}`)
      .once('value')
      .then(snapshot => {
        const value = snapshot.val().progress
        if (value > progress) { dispatch(updateProgress(value)) }
      })
      .catch(e => console.log(e))
  }
  return (
    <ImageBackground source={require('../img/bg/tasksBg.jpg')} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'flex-end' }}>
        <View style={{ position: 'absolute', left: 20, bottom: 15, zIndex: 1 }}>
          {loginMode && <TouchableOpacity activeOpacity={0.5} onPress={() => { forgotPassword && setForgotPassword(false), loginMode && !forgotPassword && setLoginMode(false), setAlert(''), setErrorInfo(''), onChangePassword('') }}>
            <Image source={require('../img/back-arrow.png')} style={{ width: 35, height: 35 }} />
          </TouchableOpacity> || <Back />}
        </View>
        <Text style={{ color: '#fff', fontSize: 25, textAlign: 'center', fontFamily: 'SFUIDisplay-Bold', paddingBottom: 15 }}>Həsab</Text>
      </View>
      <View style={{ flex: 7, backgroundColor: '#fff', borderRadius: 40, alignItems: 'center' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 20 }}>
          <Image source={require('../img/rising.png')} style={{ width: 80, height: 80 }} />
        </View>
        {!user ? (
          <>
            <Text style={{ textAlign: 'center', marginBottom: 10, fontSize: 22, fontFamily: 'SFUIDisplay-Bold', color: '#828282' }}>
              {!loginMode ? 'Qeydiyyatdan keçin' : 'Daxil olun'}</Text>
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
              visible-password={false}
            />}
            <View style={{ height: 35 }}>
              {initializing && <ActivityIndicator size={25} color="#00ff00" /> || <Text style={{ fontFamily: 'SFUIDisplay-Regular', textAlign: 'center', fontSize: 16, marginBottom: 10 }}>{alert || errorInfo}</Text>}
            </View>
            {!loginMode ?
              <View style={{ alignItems: 'center' }}>
                <ButtonItem fnc={signUpWithEmail} color='#0881FF' descr='Qeydiyyatdan keçmək' />
                <ButtonItem fnc={() => { setLoginMode(true), setErrorInfo(''), onChangePassword('') }} color='#1AB248' descr='Həsabınız var?' />
              </View>
              : null}
            {loginMode ?
              <View style={{ width: '80%' }}>
                {!forgotPassword && <ButtonItem fnc={signInWithEmail} color='#1AB248' descr='Daxil olmaq' />}
                {forgotPassword && <ButtonItem color='#7B97BC' fnc={() => passwordReset()} descr={'Şifrəni sıfırla'} />}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  {!forgotPassword && <TouchableOpacity activeOpacity={0.9} onPress={() => { !forgotPassword && (setForgotPassword(true), setErrorInfo('')), forgotPassword && passwordReset() }}>
                    <Text style={{ fontFamily: 'SFUIDisplay-Bold', paddingTop: 10, textAlign: 'center', fontSize: 19, color: '#777', }}>Şifrəni unutmusan?</Text>
                  </TouchableOpacity>}
                </View>
              </View> : null}
          </>
        ) :
          <View style={{ width: '90%', alignItems: 'center', flex: 1 }}>
            <View style={{ flex: 4 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ paddingRight: 10 }}>{user.email}</Text>
                <TouchableOpacity activeOpacity={0.9} onPress={signOut}>
                  <Text style={s.exit}>çıxmaq</Text>
                </TouchableOpacity>
              </View>
              <View style={{ paddingTop: 20 }}>
                <Text style={{ fontSize: 25, textAlign: 'center' }}>Ümumi progress</Text>
                <View style={s.wrapper}>
                  <ProgresItem progress={progress} />
                  <View style={s.descr}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontSize: 17, color: '#444', fontFamily: 'SFUIDisplay-Regular' }}>
                        Hazırki seviyyə:</Text>
                      <Text style={{ fontSize: 17, fontFamily: 'SFUIDisplay-Bold', paddingLeft: 5 }}>{progress < 30 * 8 && 'Beginner' || progress < 70 * 8 && 'Elementary' || 'Pre-Intermediate'}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <View>
                        <Text style={{ fontSize: 17, color: '#444', fontFamily: 'SFUIDisplay-Regular' }}>Siz keçmisiz:</Text>
                      </View>
                      <View style={{ paddingLeft: 10 }}>
                        <Text style={{ color: '#737479', fontFamily: 'SFUIDisplay-Bold', fontSize: 16 }}>{learnWords} söz</Text>
                        <Text style={{ color: '#737479', fontFamily: 'SFUIDisplay-Bold', fontSize: 16 }}>{passedSentences} cümlə</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        }
      </View>
    </ImageBackground>
  )
}

const ButtonItem = ({ fnc, color, descr }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={fnc}>
      <Text style={[s.button, color && { backgroundColor: color }]}>{descr}</Text>
    </TouchableOpacity>
  )
}

const ProgresItem = ({ progress }) => {
  return (
    <ProgressCircle
      percent={(progress < 115 * 8 + 1) ? progress / 9.21 : 100}
      radius={30}
      borderWidth={5}
      color='#4ABC96'
      shadowColor="rgb(240, 240, 240)"
      bgColor='rgb(247, 249, 250)'
    >
      {<Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>{(progress < 115 * 8 + 1) ? Math.floor(progress / 9.21) : 100}
        <Text style={{ fontSize: 12 }}>%</Text></Text>}
    </ProgressCircle>
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
    borderColor: '#999',
    width: '80%',
    fontFamily: 'SFUIDisplay-Regular',
  },
  button: {
    backgroundColor: '#7B97BC',
    fontFamily: 'SFUIDisplay-Bold',
    padding: 13,
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 19,
    color: '#fff',
    marginBottom: 5,
    paddingHorizontal: 30,
    minWidth: '80%'
  },
  exit: {
    backgroundColor: '#7B97BC',
    fontFamily: 'SFUIDisplay-Regular',
    paddingVertical: 5,
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 17,
    color: '#fff',
    paddingHorizontal: 10
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,255,0.03)',
    height: 130,
    flexDirection: 'row',
    paddingLeft: 10,
    borderRadius: 20,
    width: width * 0.9,
    marginTop: 20
  },
  descr: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 10
  }
})
