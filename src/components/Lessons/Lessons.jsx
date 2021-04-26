import React, { useEffect } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, FlatList, Image, ImageBackground } from 'react-native'
import { Circle } from '../Common/Circle'
import { useSelector } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Back } from '../Common/Back'

export const Lessons = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const levels = useSelector(state => state.levelsList.levels[route.params.num])
  const progress = useSelector(state => state.progress[route.params.num])
  const num=route.params.num
  return (
    <ImageBackground source={require('../../img/londonBlur.jpg')} style={{
      flex: 1, resizeMode: "center", justifyContent: "center"
    }}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', bottom: 10 }}>
        <View style={{ position: 'absolute', left: 20 }}>
          <Back />
        </View>
        <Text style={{ color: '#fff', fontSize: 25, fontFamily: 'SFUIDisplay-Bold' }} >Dərslər</Text>
      </View>
      <View style={{ flex: 8 }}>
        <FlatList data={levels} keyExtractor={item => item[0].toString()} renderItem={({ item, index }) => (
          <View style={[s.wrapper, index==38&&num==0||index==49&&(num==1||num==2||num==3||num==4)?{marginBottom:55}:null]}>
            <Circle class={s.circle} num={item[0]} percent={progress > (index + 1) * 7 ? 100 : ((progress - 1) % 7) / 0.07} radius={28} progress={!index == 0 && index >= progress / 7} />
            <TouchableOpacity disabled={!index == 0 && index >= progress / 7} style={s.touchble} onPress={() => navigation.navigate('Tasks', { num: num, index: index })}>
              <Text style={s.descr}>{item[0]}. {item[1]}</Text>
              <Image style={s.img} source={require('../../img/next1.png')} />
            </TouchableOpacity>
          </View>
        )} />
      </View>
    </ImageBackground>
  )
}

const s = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10, alignItems: 'center', justifyContent: 'flex-start', marginTop: 1,
    backgroundColor: 'rgba(255, 255, 255, 1.95)', height: 90, borderRadius: 15, flexDirection: 'row', paddingLeft: 10,
    elevation: 5,
  },
  touchble: {
    flex: 1, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'
  },
  descr: {
    fontSize: 16, color: '#636363', flex: 0.9, fontFamily: 'SFUIDisplay-Regular'
  },
  img: {
    height: 40, width: 40
  }
})