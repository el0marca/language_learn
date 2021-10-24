import React, { useRef, } from 'react'
import { TouchableOpacity, View, StyleSheet, Dimensions, ImageBackground, Animated } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { CircleItem } from './CircleItem'

const { width } = Dimensions.get('window')
const circleSize = width * .7

export default function Lessons() {
  const progress = useSelector(state => state.progress[0] - 1)
  const isProgressChanged = useSelector(state => state.progress[1])
  const initialIndex = Math.floor(progress / 8) > 114 ? 114 : Math.floor(progress / 8)
  const scrollRef = React.useRef()
  const navigation = useNavigation()
  const levels = useSelector(state => state.levelsList.levels)
  const scrollPos = useRef(new Animated.Value(0)).current
  const getItemLayout = (data, index) => ({
    length: circleSize,
    offset: circleSize * index,
    index,
  })
  React.useEffect(
    () => { if (isProgressChanged) { scrollRef.current.scrollToIndex({ animated: true, index: initialIndex }) } },
    [isProgressChanged])

  return (
    <ImageBackground source={require('../../img/bg/lessonBg.png')} style={s.background}>
      <View style={{ height: '55%' }}>
        <Animated.FlatList
          ref={scrollRef}
          showsHorizontalScrollIndicator={false}
          style={{ height: circleSize, paddingLeft: width * .15 }}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollPos } } }], { useNativeDriver: true })}
          horizontal
          data={levels}
          keyExtractor={item => item[0]}
          getItemLayout={getItemLayout}
          initialScrollIndex={initialIndex}
          snapToInterval={circleSize}
          decelerationRate={.95}
          windowSize={10}
          maxToRenderPerBatch={5}
          initialNumToRender={10}
          renderItem={({ item, index }) => {
            const scale = scrollPos.interpolate({
              inputRange: [circleSize * (index - 1), circleSize * index, circleSize * (index + 1)],
              outputRange: [0.75, 1, 0.75],
              extrapolate: 'clamp'
            })
            const translate = scrollPos.interpolate({
              inputRange: [circleSize * (index - 1), circleSize * index, circleSize * (index + 1)],
              outputRange: [-70, 0, -70],
              extrapolate: 'clamp'
            })
            return (
              <Animated.View style={[{ justifyContent: 'flex-start', width: circleSize }, index == 114 && { marginRight: width * 0.35 }, { transform: [{ scale }, { translateY: translate }] }
              ]}>
                <TouchableOpacity activeOpacity={0.9} disabled={!index == 0 && index > progress / 8} style={s.touchble} onPress={() => navigation.navigate('Tasks', { index: index, practice: item[2] })}>
                  <CircleItem circleSize={circleSize} progress={!(!index == 0 && index > progress / 8)} subject={item[1]} index={item[0]} />
                </TouchableOpacity>
              </Animated.View>
            )
          }} />
      </View>
    </ImageBackground>
  )
}

const s = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "center",
    justifyContent: 'flex-end',
  },
  touchble: {
    flex: 1,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
})