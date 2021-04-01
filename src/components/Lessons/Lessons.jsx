import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, FlatList, Image } from 'react-native'
import { Circle } from '../../components/CircleProgress/Circle'
import { useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

export const Lessons = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const levels = useSelector(state => state.levelsList.levels[route.params.num])
    const progress = useSelector(state => state.progress[route.params.num])
    return (
      <FlatList data={levels} keyExtractor={item => item[0].toString()} renderItem={({ item, index }) => (
        <View style={s.wrapper}>
          <Circle class={s.circle} num={item[0]} percent={progress > (index + 1) * 6 ? 100 : (progress - 1) % 6 * (1 / .06)} radius={28} progress={!index == 0 && index >= progress / 6} />
          <TouchableOpacity disabled={!index == 0 && index >= progress / 6} style={s.touchble} onPress={() => navigation.navigate('Tasks', { num: route.params.num, index: index })}>
            <Text style={s.descr}>{item[0]}. {item[1]}</Text>
            <Image style={s.img} source={require('../../img/next1.png')} />
          </TouchableOpacity>
        </View>
      )} />
    )
  }
  
  const s = StyleSheet.create({
    wrapper: {
      marginHorizontal: 10, alignItems: 'center', justifyContent: 'flex-start', marginTop: 1, 
      backgroundColor: 'rgb(255, 255, 255)', height: 90, borderRadius: 15, flexDirection: 'row', paddingLeft: 10,
      elevation: 5,
    },
    touchble: {
      flex: 1, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'
    },
    descr: {
      fontSize: 15, color: '#555', flex: 0.9, fontFamily: 'SFUIDisplay-Regular',
    },
    img: {
      height: 40, width: 40
    }
  })