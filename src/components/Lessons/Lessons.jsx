import React, { useRef, } from 'react'
import { TouchableOpacity, View, StyleSheet, Dimensions, ImageBackground, Animated } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { CircleItem } from './CircleItem'

const { width } = Dimensions.get('window');
let interval = width * 0.7

export default function Lessons() {
  const navigation = useNavigation()
  const levels = useSelector(state => state.levelsList.levels[0])
  const progress = useSelector(state => state.progress[0] - 1)
  const scrollPos = useRef(new Animated.Value(0)).current

  return (
    <ImageBackground source={require('../../img/bg/lessonBg.png')} style={s.background}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
          <View style={[s.progressContainer]}>
          </View>
          <View style={{ flex: 1.2 }}>
            <Animated.FlatList showsHorizontalScrollIndicator={false} style={{ height: interval, paddingLeft: width * .15 }} onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollPos } } }], { useNativeDriver: true })} horizontal data={levels} keyExtractor={item => item[0]} getItemLayout={(data, index) => ({ length: interval, offset: interval * index, index })} initialScrollIndex={Math.floor(progress / 7) > 149 ? 149 : Math.floor(progress / 7)} snapToInterval={interval} decelerationRate={.8} renderItem={({ item, index }) => {
              const scale = scrollPos.interpolate({
                inputRange: [interval * (index - 1), interval * index, interval * (index + 1)],
                outputRange: [0.75, 1, 0.75],
                extrapolate: 'clamp'
              })
              return (
                <Animated.View style={[{ justifyContent: 'flex-start', width: interval }, index == 149 && { marginRight: width * .35 }, { transform: [{ scale }] }
                ]}>
                  <TouchableOpacity activeOpacity={0.9} disabled={!index == 0 && index > progress / 7} style={s.touchble} onPress={() => navigation.navigate('Tasks', { index: index, practice: item[2] })}>
                    <CircleItem progress={!(!index == 0 && index > progress / 7)} subject={item[1]} index={item[0]} />
                  </TouchableOpacity>
                </Animated.View>
              )
            }} />
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

const s = StyleSheet.create({
  img: {
    width: 60,
    height: 60,
    flex: 1
  },
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
    paddingLeft: 15,
    paddingRight: 10,
    borderRadius: 30,
    marginHorizontal: 15,
    marginTop: 2
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
  },
  progressContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  progress: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 10,
    paddingVertical: 13,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
})