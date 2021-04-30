import React from 'react'
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
  const num = route.params.num
  return (
    <ImageBackground source={require('../../img/londonBlur.jpg')} style={s.background}>
      <View style={s.header}>
        <View style={{ position: 'absolute', left: 20 }}>
          <Back />
        </View>
        <Text style={s.headerText} >Dərslər</Text>
      </View>
      <View style={{ flex: 8 }}>
        <FlatList data={levels} keyExtractor={item => item[0].toString()} renderItem={({ item, index }) => (
          <View style={[s.wrapper, index == 49 && num == 0 || index == 49 && (num == 1 || num == 2 || num == 3 || num == 4) ? { marginBottom: 55 } : null]}>
            <Circle class={s.circle} percent={progress > (index + 1) * 7 ? 100 : ((progress - 1) % 7) / 0.07} progress={!index == 0 && index >= progress / 7} />
            <TouchableOpacity activeOpacity={0.5} disabled={!index == 0 && index >= progress / 7} style={s.touchble} onPress={() => navigation.navigate('Tasks', { num: num, index: index })}>
              <View style={s.descr}>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'rgba(0,0,0,0.6)' }} >{item[0]} </Text>
                <Text>{item[1]}</Text>
              </View>

              <Image style={s.img} source={require('../../img/next1.png')} />
            </TouchableOpacity>
          </View>
        )} />
      </View>
    </ImageBackground>
  )
}

const s = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "center",
    justifyContent: "center"
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    bottom: 10
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'SFUIDisplay-Bold'
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    height: 90,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: 20,
    marginHorizontal: 15,
    marginTop: 2,
  },
  touchble: {
    flex: 1,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  descr: {
    flex: 0.9,
  },
  img: {
    height: 35,
    width: 35
  }
})