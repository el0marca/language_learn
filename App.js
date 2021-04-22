import { Provider, useDispatch, useSelector } from 'react-redux';
import React, { Component, useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingScreen } from './src/screens/SettingScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { MainStackscreen } from './src/screens/Mainscreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Image, ActivityIndicator, ImageBackground, Text, View, StyleSheet } from 'react-native';
import store from './src/redux/store';
import auth, { firebase } from '@react-native-firebase/auth';
import { setUserInfo } from './src/redux/auth';
import { downloadProgress } from './src/redux/progress';

const ProfileStack = createStackNavigator();

function ProfileStackScreen(){
  return (
     <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      // options={{ title: 'Profile' }}
      options={navigation => ({
      // tabBarIcon: ,
      tabBarVisible: false
    })}
    />
  </ProfileStack.Navigator>)
}

const SettingStack = createStackNavigator();

function SettingStackScreen ({navigation}){
  return (
     <SettingStack.Navigator>
    <SettingStack.Screen
      name="Setting"
      component={SettingScreen}
      options={{ title: 'Settings' }}
    />
    </SettingStack.Navigator>)}

function LogoTitle({params}) {
  return (
    <Image
      style={{ width: 30, height: 30 }}
      source={params}
    />
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator options={{tabBarVisible:false}} initialRouteName="Main"
      tabBarOptions={{showLabel:false, activeBackgroundColor: '#edfffa', inactiveBackgroundColor: '#fff', style:{position: 'absolute'}}}
      >
      <Tab.Screen name="Main" title={false} component={MainStackscreen} 
      options={{
        tabBarIcon: props => <LogoTitle params={require('./src/img/book.png')} {...props} /> 
      }}/>
      <Tab.Screen name="Profile" component={ProfileStackScreen} 
      options={{
        tabBarIcon: props => <LogoTitle params={require('./src/img/profile.png')} {...props} /> 
      }}/>
      <Tab.Screen name="Settings" component={SettingStackScreen} 
      options={{
        tabBarIcon: props => <LogoTitle params={require('./src/img/setting.png')} {...props} /> 
      }}/>      
    </Tab.Navigator>
    </NavigationContainer>
  );
}

// const SettingStack = createStackNavigator();

// function SettingStackScreen (){
//   return (
//      <SettingStack.Navigator>
//     <SettingStack.Screen
//       name="Setting"
//       component={SettingScreen}
//       options={{ title: 'Settings' }}
//     />
//     </SettingStack.Navigator>)}


export default AppContainer = () => {
  return (
     <Provider store={store}>
     <App/>
     </Provider>
  // <AuthScreen/>
  )
}

function App() {
  const dispatch=useDispatch()  
  const [initializing, setInitializing] = useState(true);
  
  dispatch(downloadProgress());

  function onAuthStateChanged(user) {
    dispatch(setUserInfo(user))
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber
  }, [])

  if (initializing) return (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#00ff00" />
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