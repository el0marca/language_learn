import { Provider, useDispatch } from 'react-redux';
import React, { Component, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { SettingScreen } from './src/screens/SettingScreen';
import { MainStackscreen } from './src/screens/Mainscreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { AuthScreen } from './src/components/Auth/AuthScreen';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Text } from 'react-native';
import store from './src/redux/store';

const ProfileStack = createStackNavigator();

function ProfileStackScreen(){
  return (
     <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ title: 'Profile' }}
    />
  </ProfileStack.Navigator>)
}

const SettingStack = createStackNavigator();

function SettingStackScreen (){
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
    <Tab.Navigator initialRouteName="Main"
     tabBarOptions={{showLabel:false, activeBackgroundColor: '#edfffa', inactiveBackgroundColor: '#fff'}}>
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

export default App = () => {

  return (
     <Provider store={store}>
     <MyTabs/>
     <StatusBar/>
     </Provider>
  // <AuthScreen/>
  )
}
