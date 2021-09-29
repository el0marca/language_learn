import React from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import { useSelector } from 'react-redux'
import FastImage from 'react-native-fast-image'

const requires = [
    require('../../img/circles/1.png'),
    require('../../img/circles/2.png'),
    require('../../img/circles/3.png'),
    require('../../img/circles/4.png'),
    require('../../img/circles/5.png'),
    require('../../img/circles/6.png'),
    require('../../img/circles/7.png'),
    require('../../img/circles/8.png'),
    require('../../img/circles/9.png'),
    require('../../img/circles/10.png'),
    require('../../img/circles/11.png'),
    require('../../img/circles/12.png'),
    require('../../img/circles/13.png'),
    require('../../img/circles/14.png'),
    require('../../img/circles/15.png'),
    require('../../img/circles/16.png'),
    require('../../img/circles/17.png'),
    require('../../img/circles/18.png'),
    require('../../img/circles/19.png'),
    require('../../img/circles/20.png'),
    require('../../img/circles/21.png'),
    require('../../img/circles/22.png'),
    require('../../img/circles/23.png'),
    require('../../img/circles/24.png'),
    require('../../img/circles/25.png'),
    require('../../img/circles/26.png'),
    require('../../img/circles/27.png'),
    require('../../img/circles/28.png'),
    require('../../img/circles/29.png'),
    require('../../img/circles/30.png'),
    require('../../img/circles/31.png'),
    require('../../img/circles/32.png'),
    require('../../img/circles/33.png'),
    require('../../img/circles/34.png'),
    require('../../img/circles/35.png'),
    require('../../img/circles/36.png'),
    require('../../img/circles/37.png'),
    require('../../img/circles/38.png'),
    require('../../img/circles/39.png'),
    require('../../img/circles/40.png'),
    require('../../img/circles/41.png'),
    require('../../img/circles/42.png'),
    require('../../img/circles/43.png'),
    require('../../img/circles/44.png'),
    require('../../img/circles/45.png'),
    require('../../img/circles/46.png'),
    require('../../img/circles/47.png'),
    require('../../img/circles/48.png'),
    require('../../img/circles/49.png'),
    require('../../img/circles/50.png'),
    require('../../img/circles/51.png'),
    require('../../img/circles/52.png'),
    require('../../img/circles/53.png'),
    require('../../img/circles/54.png'),
    require('../../img/circles/55.png'),
    require('../../img/circles/56.png'),
    require('../../img/circles/57.png'),
    require('../../img/circles/58.png'),
    require('../../img/circles/59.png'),
    require('../../img/circles/60.png'),
    require('../../img/circles/61.png'),
    require('../../img/circles/62.png'),
    require('../../img/circles/63.png'),
    require('../../img/circles/64.png'),
    require('../../img/circles/65.png'),
    require('../../img/circles/66.png'),
    require('../../img/circles/67.png'),
    require('../../img/circles/68.png'),
    require('../../img/circles/69.png'),
    require('../../img/circles/70.png'),
    require('../../img/circles/71.png'),
    require('../../img/circles/72.png'),
    require('../../img/circles/73.png'),
    require('../../img/circles/74.png'),
    require('../../img/circles/75.png'),
    require('../../img/circles/76.png'),
    require('../../img/circles/77.png'),
    require('../../img/circles/78.png'),
    require('../../img/circles/79.png'),
    require('../../img/circles/80.png'),
    require('../../img/circles/81.png'),
    require('../../img/circles/82.png'),
    require('../../img/circles/83.png'),
    require('../../img/circles/84.png'),
    require('../../img/circles/85.png'),
    require('../../img/circles/86.png'),
    require('../../img/circles/87.png'),
    require('../../img/circles/88.png'),
    require('../../img/circles/89.png'),
    require('../../img/circles/90.png'),
    require('../../img/circles/91.png'),
    require('../../img/circles/92.png'),
    require('../../img/circles/93.png'),
    require('../../img/circles/94.png'),
    require('../../img/circles/95.png'),
    require('../../img/circles/96.png'),
    require('../../img/circles/97.png'),
    require('../../img/circles/98.png'),
    require('../../img/circles/99.png'),
    require('../../img/circles/100.png'),
    require('../../img/circles/101.png'),
    require('../../img/circles/102.png'),
    require('../../img/circles/103.png'),
    require('../../img/circles/104.png'),
    require('../../img/circles/105.png'),
    require('../../img/circles/106.png'),
    require('../../img/circles/107.png'),
    require('../../img/circles/108.png'),
    require('../../img/circles/109.png'),
    require('../../img/circles/110.png'),
    require('../../img/circles/111.png'),
    require('../../img/circles/112.png'),
    require('../../img/circles/113.png'),
    require('../../img/circles/114.png'),
    require('../../img/circles/115.png')
]
export const CircleItem = ({ progress, index, subject, circleSize }) => {
    const circleRadius = circleSize / 2;
    const s = StyleSheet.create({
        container: {
            width: circleSize,
            height: circleSize,
            borderRadius: circleRadius,
            backgroundColor: '#99a4bf',
            elevation: 15
        },
        lessonNum: {
            flex: 0.5,
            justifyContent: 'center',
            alignItems: 'center'
        },
        lessonNumText: {
            fontSize: 15,
            color: '#fff',
            textAlign: 'center',
            fontFamily: 'SFUIDisplay-Regular'
        },
        lessonDescr: {
            flex: 0.5,
            paddingHorizontal: 30,
            alignItems: 'center',
            paddingTop: 15
        },
        text: {
            fontSize: 17,
            textAlign: 'center',
            fontFamily: 'SFUIDisplay-Bold',
            color: '#fff'
        },
        stars: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 0.5
        },
        button: {
            flex: 0.5,
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 20
        },
        buttonText: {
            color: '#999',
            fontSize: 19,
            padding: 12,
            backgroundColor: '#fff',
            paddingHorizontal: 25,
            borderRadius: 25,
            fontFamily: 'SFUIDisplay-Regular'
        },
        img: {
            height: 20,
            width: 20,
            margin: 1
        }
    })
    const progressValue = useSelector(state => state.progress[0])
    let value = progressValue - (index - 1) * 8
    function star(number) {
        return value > number ? require('../../img/star.png') : require('../../img/starDeactive.png')
    }
    
    return (
        <View style={s.container}>
        <ImageBackground source={requires[index - 1]} style={{ flex: 1 }} >
            <View style={s.lessonNum}>
                <Text style={s.lessonNumText}>dərs #{index}</Text>
                <FastImage style={{ width: 25, height: 25 }} source={star(8)} />
            </View>
            <View style={s.lessonDescr}>
                <Text style={[s.text]}>{subject}</Text>
            </View>
            <View style={s.stars}>
                <View style={{ flexDirection: 'row' }}>
                    <FastImage style={s.img} source={star(1)} />
                    <FastImage style={s.img} source={star(2)} />
                    <FastImage style={s.img} source={star(3)} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <FastImage style={s.img} source={star(4)} />
                    <FastImage style={s.img} source={star(5)} />
                    <FastImage style={s.img} source={star(6)} />
                    <FastImage style={s.img} source={star(7)} />
                </View>
            </View>
            <View style={s.button}>
                <Text style={[s.buttonText, progress ? { color: '#000' } : null]}>{progress ? 'seçmək' : 'bağlıdır'}</Text>
            </View>
        </ImageBackground>
    </View>
    )

}