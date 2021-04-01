import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
// import { SoundScreen } from '../SoundScreen';
import database from '@react-native-firebase/database';
import setInfoDB, { downProgress } from '../../redux/levelsList'
import { useDispatch, useSelector } from 'react-redux';

// database().goOffline();

let i = 0;

function signAnonymus() {
    auth()
        .signInAnonymously()
        .then(() => {
            console.log('User signed in anonymously');
        })
        .catch(error => {
            if (error.code === 'auth/operation-not-allowed') {
                console.log('Enable anonymous in your firebase console.');
            }
            console.error(error);
        });
}
const SignOut = () => {
    auth()
        .signOut()
        .then(() => console.log('User signed out!'));
}

export const AuthScreen = () => {
    const [user, setUser] = useState()
    const [data, setData] = useState()
    const [initializing, setInitializing] = useState(true)
    const [uid, setUid] = useState()
    const dispatch = useDispatch()
    const progress = useSelector(state => state.levelsList.progress)

    const signUpWithEmail = () => {
        auth()
            .createUserWithEmailAndPassword('el0mehdie@gmail.com', '123456!')
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
                console.error(error);
            });
    }
    const signInWithEmail = () => {
        auth()
            .signInWithEmailAndPassword('el0mehdie@gmail.com', '123456')
            .then(() => {
                console.log('User signed in!');
            })
        //   firebase.auth()
    }

    // const passwordReset = () => {
    //   return firebase.auth().sendPasswordResetEmail('el0mehdie@gmail.com')
    // }
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber
    }, [])

    function getInfoFromDB() {
        console.log('dataBase')
        database()
            .ref(uid)
            .once('value', snapshot => {
                setData(snapshot.val())
                console.log(snapshot.val())
            })
        console.log('ready')
    }
    
    useEffect(() => { user ? setUid('user/' + `${user.uid}`) : null }, [user])
    useEffect(() => { uid ? getInfoFromDB() : null }, [uid])

    function count() {
        i++;
        database()
            .ref(uid)
            .set({
                0: i,
                1: 1,
                2: 1,
                3: 1,
                4: 1
            })
            .then(() => console.log('Data set.'));
        getInfoFromDB()
    }
    console.log(uid)
    if (initializing) return null;

    if (!user) {
        return (
            <View>
                <Button title='Qeydiyyatdan keçmək' onPress={signUpWithEmail} />
                <Button title='Daxil olmaq' onPress={signInWithEmail} />
                <Button title='Sign anonym' onPress={signAnonymus} />
            </View>
        )
    }
    return (
        <View>
            <Button title='count +' onPress={count} />
            <Text>{data}</Text>
            <Text>Welcome {user.email ? user.email : 'Anonym'}</Text>
            <Button title='Sign out' onPress={SignOut} />
            <Button title='send data' onPress={() => setInfoDB(uid, [1, 11])} />
            <Button title='down data' onPress={getInfoFromDB} />
        </View>
    )
}
