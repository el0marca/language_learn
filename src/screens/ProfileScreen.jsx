import React, { useState } from 'react'
import { Button } from 'react-native';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import database from '@react-native-firebase/database';
import { setUserInfo } from '../redux/auth';
import { updateBeginnerProgress, updateElementaryProgress, updateIntermediateProgress, updatePreIntermediateProgress, updateUpperIntermediateProgress } from '../redux/progress';

export const ProfileScreen = () => {
  const dispatch=useDispatch()
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const progress = useSelector(state => state.progress)
  const user = useSelector(state=>state.auth.user)
  const[errorInfo,setErrorInfo]=useState('')

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
        const elementary = JSON.parse(snapshot.val()[[1]]);
        const preIntermediate = JSON.parse(snapshot.val()[[2]]);
        const intermediate = JSON.parse(snapshot.val()[[3]]);
        const upperIntermediate = JSON.parse(snapshot.val()[[4]]);
        if (beginner > progress[0]) { dispatch(updateBeginnerProgress(beginner)) }
        if (elementary > progress[1]) { dispatch(updateElementaryProgress(elementary)) }
        if (preIntermediate > progress[2]) { dispatch(updatePreIntermediateProgress(preIntermediate)) }
        if (intermediate > progress[3]) { dispatch(updateIntermediateProgress(intermediate)) }
        if (upperIntermediate > progress[4]) { dispatch(updateUpperIntermediateProgress(upperIntermediate)) }
      });
  }
  function signUpWithEmail() {
    if(!email||!password){ return setErrorInfo('Lütfən email və şifreni daxil edin!')} 
    if(password.length<7){return setErrorInfo('Şifrə 6 simvoldan çox olmalıdır') }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((e) => {
        setData(e.user.uid)
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setErrorInfo('Email mövcuddır')
        }
        if (error.code === 'auth/invalid-email') {
          setErrorInfo('Lütfen emailı düzgün daxil edin')
        }
          setErrorInfo('Some err')
        })
  }
  function signInWithEmail() {
    if(!email||!password){ return setErrorInfo('Lütfən email və ya şifrəni daxil edin!')} 
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((e) => {
        dispatch(setUserInfo(e.user))
        getData(e.user.uid)
        console.log('user have authorized')
      })
      .catch(error => {
        if(error.code==='auth/network-request-failed'){
        setErrorInfo('Əməliyat baş tutmadı. Lütfen internet bağlantını yoxlayın!')}
      })
  }
  function signOut() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }
      const passwordReset = () => {
      return firebase.auth().sendPasswordResetEmail('el0mehdie@gmail.com')
    }

  return (
    <View>
      {!user?(
      <>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="email"
        type='email'
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="şifrə"
        type='password'
        secureTextEntry={true}
      />
      <Button title='Qeydiyatdan keçmək' onPress={signUpWithEmail}/>
      <Button title='Daxil olmaq' onPress={signInWithEmail}/>
      <Button title='Şifrəni unutmusan?' onPress={passwordReset} />
      <Text>{errorInfo}</Text>
      </>):
      <>
      <Button title='Cıxmaq' onPress={signOut}/>
      <Text>Welcome {user.email}</Text>
      </>
}
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
