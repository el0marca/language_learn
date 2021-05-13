import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import FastImage from 'react-native-fast-image'

const images = [
    'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F1.png?alt=media&token=93260f97-4bcf-4871-bf84-0cd5d1c2e751', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F2.png?alt=media&token=5aeaaf62-3290-43b8-890f-c6da8bb08561', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F3.png?alt=media&token=02260529-93ed-4f21-9ed6-a2453a730ac8', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F4.png?alt=media&token=c740f288-cc1e-4835-ae90-395fb7e78368', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F5.png?alt=media&token=29ea3d50-9b5f-4c7e-b94c-d776c9b37af2', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F6.png?alt=media&token=ffadf21e-b01f-4368-979c-0a4010885eb7', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F7.png?alt=media&token=3e0bf69b-84d0-4798-9950-f238c793578b', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F8.png?alt=media&token=740d58aa-0405-400b-9da9-bcd4e17b224a', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F10.png?alt=media&token=e35eac98-e7f3-4f59-98c5-dfc24e81a340', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F9.png?alt=media&token=bebf5716-42e2-4cb7-bad3-1d87d627b95d', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F11.png?alt=media&token=81b7f60a-13bd-4e8c-8619-2b5ddc29774f', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F12.png?alt=media&token=f181379b-0fdb-46ac-997e-07ee5c446bb0', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F13.png?alt=media&token=bd0c7dd6-0873-4c73-9deb-c6292ecc1545', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F14.png?alt=media&token=afd8e1db-d2b5-4054-92ad-69efa8a66557', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F15.png?alt=media&token=0afe25a9-fcc7-4714-a4e2-24275d061a25', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F16.png?alt=media&token=47e5f364-36e1-49e9-bea0-4ebd52627072', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F17.png?alt=media&token=e8c8f9ce-1c06-4dd8-803d-4387943848e6', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F18.png?alt=media&token=356c4ad1-a86c-4a95-9cdf-c301b5c9d52d', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F19.png?alt=media&token=d281f6d7-ea9a-40bd-8c84-f025256e36ad', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F20.png?alt=media&token=20c3643a-ac21-4d45-9ea2-a95f5e552797', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F21.png?alt=media&token=ac7b72dd-f3c2-4837-abfc-b4d6103b9ee9', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F22.png?alt=media&token=8ef61c51-f859-4595-b794-42bf51540955', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F23.png?alt=media&token=25120739-ec84-4c20-8c99-e1d7c6b0c7c7', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F24.png?alt=media&token=95187c06-0257-4275-8400-54d91765fc57', 'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fcircles%2F25.png?alt=media&token=19c8413b-921a-4b9f-a4a6-550ba714cd15'
]
const { width } = Dimensions.get('window')
let interval = width * 0.68

export const CircleItem = ({ progress, index, subject }) => {

    const progressValue = useSelector(state => state.progress[0])
    let value = progressValue - (index - 1) * 7
    const inactive = require('../../img/starDeactiv.png')
    const active = require('../../img/star.png')

    return (
        <View style={s.container}>
            <FastImage source={{ uri: images[index <= 25 ? index - 1 : index <= 50 ? index - 26 : index <= 75 ? index - 51 : index <= 100 ? index - 76 : index <= 125 ? index - 101 : index <= 150 ? index - 126 : null] }} style={{ flex: 1 }} >
                <View style={s.lessonNum}>
                    <Text style={s.lessonNumText}>dərs #{index}</Text>
                </View>
                <View style={s.lessonDescr}>
                    <Text style={[s.text]}>{subject}</Text>
                </View>
                <View style={s.stars}>
                    <View style={{ flexDirection: 'row' }}>
                        <FastImage style={s.img} source={value > 1 ? active : inactive} />
                        <FastImage style={s.img} source={value > 2 ? active : inactive} />
                        <FastImage style={s.img} source={value > 3 ? active : inactive} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <FastImage style={s.img} source={value > 4 ? active : inactive} />
                        <FastImage style={s.img} source={value > 5 ? active : inactive} />
                        <FastImage style={s.img} source={value > 6 ? active : inactive} />
                        <FastImage style={s.img} source={value > 7 ? active : inactive} />
                    </View>
                </View>
                <View style={s.button}>
                    <Text style={[s.buttonText, progress ? { color: '#000' } : null]}>{progress ? 'seçmək' : 'bağlıdır'}</Text>
                </View>
            </FastImage>
        </View>
    )
}
const s = StyleSheet.create({
    container: {
        width: interval,
        height: interval,
        borderRadius: 999
    },
    lessonNum: {
        flex: 0.3,
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
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20
    },
    buttonText: {
        color: '#999',
        fontSize: 19,
        padding: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        borderRadius: 25,
        fontFamily: 'SFUIDisplay-Regular'
    },
    img: {
        height: 20,
        width: 20
    }
})