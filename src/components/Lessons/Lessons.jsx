import React, { useCallback, useRef, useState } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Dimensions, ImageBackground, Animated } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { CircleItem } from './CircleItem'

const { width } = Dimensions.get('window');
let interval = width * 0.7

export const Lessons = () => {
  const navigation = useNavigation()
  const [num, setNum] = useState(0)
  const levels = useSelector(state => state.levelsList.levels[0])
  const progress = useSelector(state => state.progress[0] - 1)
  const scrollPos = useRef(new Animated.Value(0)).current
  let learnedWords = 0
  let theory = 0
  let passedSentences = 0

  if (progress < 280) { learnedWords += (Math.floor(progress / 7) * 17) }
  if (progress <= 280 && progress % 7 >= 2) { learnedWords += 10 }
  if (progress > 280) { learnedWords += (Math.floor((progress - 280) / 7) * 7) + 560 }
  if (progress < 280 && progress % 7 >= 1) { learnedWords += 7 }
  if (progress < 280) { theory += (Math.floor(progress / 7)) * 10 }
  else { theory = 400 }
  if (progress < 280 && progress % 7 >= 3) { theory += 10 }
  if (progress < 280) { passedSentences += (Math.floor(progress / 7) * 20) }
  if (progress <= 280 && progress % 7 >= 4) { passedSentences += 10 }
  if (progress <= 280 && progress % 7 >= 5) { passedSentences += 10 }
  if (progress > 280) { passedSentences += (Math.floor((progress - 280) / 7) * 30) + 800 }
  if (progress > 280 && progress % 7 >= 2) { passedSentences += 10 }
  if (progress > 280 && progress % 7 >= 3) { passedSentences += 10 }
  if (progress > 280 && progress % 7 >= 5) { passedSentences += 10 }

  return (
    <ImageBackground source={{uri:'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fbackground%2FlessonBg.png?alt=media&token=fbfeb502-2d44-4af2-8f57-a2ecfb4d256a'}} style={s.background}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
          <View style={[s.progressContainer,]}>
            {/* <View style={s.progress} >
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Circle percent={(progress) / 3.5} progress={false} />
              </View>
              <View style={{ flex: 4, justifyContent: 'space-around', paddingLeft: 10 }}>
                {(!learnedWords) ? <Text style={{ fontSize: 18, fontFamily: 'SFUIDisplay-Regular' }}>Progress mövcud deyil</Text> :
                  <View>
                    <Text style={{ fontSize: 17, fontFamily: 'SFUIDisplay-Regular', color: '#5e6c80' }}>{learnedWords} unikal söz</Text>
                    <Text style={{ fontSize: 17, fontFamily: 'SFUIDisplay-Regular', color: '#5e6c80' }}>{theory} qrammatik tapşırıq</Text>
                    <Text style={{ fontSize: 17, fontFamily: 'SFUIDisplay-Regular', color: '#5e6c80' }}>{passedSentences} unikal cümlə</Text>
                  </View>}
              </View> */}
            {/* </View> */}
          </View>
          <View style={{ flex: 1.2 }}>
            {useCallback(<Animated.FlatList style={{ height: interval, paddingLeft: width * .15 }} initialNumToRender={5} onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollPos } } }], { useNativeDriver: true })} horizontal data={levels} keyExtractor={item => item[0]} getItemLayout={(data, index) => ({ length: interval, offset: interval * index, index })} initialScrollIndex={Math.floor(progress / 7)} snapToInterval={interval}  decelerationRate={.8} renderItem={({ item, index }) => {
              const scale = scrollPos.interpolate({
                inputRange: [interval * (index - 1), interval * index, interval * (index + 1)],
                outputRange: [0.8, 1, 0.8],
                extrapolate: 'clamp'
              })
              
              return (
                <Animated.View style={[{ justifyContent: 'flex-start', width: interval }, { transform: [{ scale }] }
                ]}>
                  <TouchableOpacity activeOpacity={0.9} disabled={!index == 0 && index > progress / 7} style={s.touchble} onPress={() => navigation.navigate('Tasks', { num: num, index: index })}>
                    <CircleItem radius={interval / 2} type='lessons' percent={progress > (index + 1) * 7 ? 100 : ((progress - 1) % 7) / 0.07} progress={!(!index == 0 && index > progress / 7)} subject={item[1]} index={item[0]} />
                  </TouchableOpacity>
                </Animated.View>)
            }} />, [])}
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