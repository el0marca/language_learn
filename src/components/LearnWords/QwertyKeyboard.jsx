import React, { useEffect, useRef } from 'react'
import { Animated, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const QwertyKeyboard = React.memo(({ line, res, choice, })=> {
    // const fadeAnim = useRef(new Animated.Value(0)).current;
    // const fadeIn = () => {
    //     Animated.timing(fadeAnim, {
    //         toValue: 1,
    //         duration: 500,
    //         useNativeDriver: true
    //     }).start();
    // };
    // useEffect(() => fadeIn(), [])

    return (
        <View style={{flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 10 }}>
            {line.map((w, i) => <TouchableOpacity activeOpacity={0.8} key={i} onPress={() => { choice(w) }}>
                <Animated.Text style={{borderRadius: 3, fontSize: 25, paddingHorizontal: 10, paddingVertical: 5, marginHorizontal: 2, marginVertical: 1, backgroundColor: res(w) == w ? '#4ABC96' : 'white',         
                elevation: 5, color:res(w) == w ? 'white' : '#1a1c1b' }}>{w}
                </Animated.Text>
                </TouchableOpacity>)}
        </View>
    )
})