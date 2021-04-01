// import { ReactNativeFirebase } from '@react-native-firebase/app';
// import { firebase } from '@react-native-firebase/storage';
// import React from 'react'
// import { Button, FlatList, ScrollView, View, StyleSheet, Text } from 'react-native';
// import SoundPlayer from 'react-native-sound-player';
// import { Words } from '../store/state';
// import storage from '@react-native-firebase/storage';

// export const SoundScreen = ({ navigation }) => {
//   // async function loadAudio(){
//   //   let url = await storage()
//   //   .ref('sounds/able.mp3')
//   //   .getDownloadURL()
//   //   SoundPlayer.loadUrl(url)
//   // }
//   // loadAudio()

//   async function play(word) {
//     let url = await storage()
//       .ref('sounds/abandon.mp3')
//       .getDownloadURL()
//     SoundPlayer.playUrl(url)
//     // SoundPlayer.stop()
//   }
//   // async function play(word) {
//   //   SoundPlayer.playSoundFile(word, 'mp3')
//   //   // SoundPlayer.stop()
//   // }
//   return (
//     <ScrollView>
//       {Words.map((i, index) => <View key={index} style={s.wrapper}>
//         <Button style={s.button} key={i.n} title={i.n} onPress={() => play(i.u)} />
//         <Text>{i.t}</Text>
//       </View>)}
//     </ScrollView>
//   );
// };

// const s = StyleSheet.create({
//   wrapper: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     paddingBottom: 10
//   },
//   button: {

//   }
// })