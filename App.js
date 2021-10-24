/**
 * @format
 * @flow strict-local
//  */
import React from 'react';
import type {Node} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SettingScreen} from './src/screens/SettingScreen';
import {ProfileScreen} from './src/screens/ProfileScreen';
import {MainStackscreen} from './src/screens/Mainscreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar} from 'expo-status-bar';
import {Image, ActivityIndicator, View, StyleSheet } from 'react-native';
import {store, persistor} from './src/redux/store';
import auth from '@react-native-firebase/auth';
import {setUserInfo} from './src/redux/auth';
import {PersistGate} from 'redux-persist/integration/react';
import {updateLessons} from './src/redux/version';
import {setBottomTabVisible} from './src/redux/bottomTab';

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen({navigation}){
  const tabVisible = useSelector(state => state.bottomTab.show)
  React.useLayoutEffect(() => {
    {
      navigation.setOptions({
        tabBarStyle: !tabVisible && { display: 'none' } || { position: 'absolute' }
      })
    }
  }, [navigation, tabVisible])
  return (
     <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
    <ProfileStack.Screen 
      name="Profile"
      component={ProfileScreen}
    />
  </ProfileStack.Navigator>)
}

const SettingStack = createNativeStackNavigator()

function SettingStackScreen (){
  return (
     <SettingStack.Navigator>
    <SettingStack.Screen
      name="Setting"
      component={SettingScreen}
      options={{headerShown:false}}
    />
    </SettingStack.Navigator>)}

function BottomIcon({src}) {
  return (
    <Image
      style={{ width: 30, height: 30 }}
      source={src}
    />
  );
}

const Tab = createBottomTabNavigator()

function MyTabs() {

  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="Main"
      screenOptions={({route})=>({
        headerShown:false,
        tabBarIcon: props => <BottomIcon src={route.name=='Main'&&require('./src/img/book.png')||route.name=='MProfile'&&require('./src/img/profile.png')||route.name=='Settings'&&require('./src/img/setting.png')} {...props} />,
          tabBarStyle: { position: 'absolute'},
          tabBarShowLabel:false
      })}>
      <Tab.Screen name="Main" component={MainStackscreen} />
      <Tab.Screen name="MProfile" component={ProfileStackScreen} />
      <Tab.Screen name="Settings" component={SettingStackScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default AppContainer = () => {
  return (
     <Provider store={store}>
      <PersistGate persistor={persistor}>
     <App/>
      </PersistGate>
     </Provider>
  )
}

const App: ()=> Node=()=> {
  const dispatch=useDispatch()  
  const [initializing, setInitializing] = useState(true)
  
  function onAuthStateChanged(user) {
    user&&dispatch(setUserInfo(user))
    if (initializing) setInitializing(false)
  }
  const versionValue = useSelector(state => state.version.value)

  useEffect(() => {
    dispatch(updateLessons(versionValue))
    dispatch(setBottomTabVisible(true))
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  if (initializing) return (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size={50} color="#00ff00" />
  </View>)

  return(
    <>
      <StatusBar/>
      <MyTabs/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});