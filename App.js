import { Provider, useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SettingScreen } from './src/screens/SettingScreen'
import { ProfileScreen } from './src/screens/ProfileScreen'
import { MainStackscreen } from './src/screens/Mainscreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StatusBar } from 'expo-status-bar'
import { Image, ActivityIndicator, View, StyleSheet } from 'react-native'
import {store, persistor} from './src/redux/store'
import auth from '@react-native-firebase/auth'
import { setUserInfo } from './src/redux/auth'
import { PersistGate } from 'redux-persist/integration/react'
import { updateLessons } from './src/redux/version'
import { setBottomTabVisible } from './src/redux/bottomTab'

const ProfileStack = createStackNavigator();

function ProfileStackScreen(){
  return (
     <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{headerShown:false}}
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
      options={{headerShown:false}}
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
  const bottomTransparent=useSelector(state=>state.bottomTab.transparent)
  return (
    <NavigationContainer>
    <Tab.Navigator options={{tabBarVisible:false}} initialRouteName="Main"
      tabBarOptions={{showLabel:false, style:{position: 'absolute', backgroundColor:bottomTransparent&&'transparent'||'#fff', elevation: 0}}}
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
export default AppContainer = () => {
  return (
     <Provider store={store}>
      <PersistGate persistor={persistor}>
     <App/>
      </PersistGate>
     </Provider>
  )
}

function App() {
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