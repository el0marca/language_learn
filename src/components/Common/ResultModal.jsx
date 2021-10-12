import React, { useState } from 'react'
import { Image, Text, View, TextInput, TouchableOpacity } from 'react-native'
import database from '@react-native-firebase/database';

export function ResultModal({ result, transSentence, sentence, openReportWindow }) {
    return (
        <View style={[{ paddingBottom: 15, paddingLeft: 15, borderRadius: 20, width: '90%', zIndex: 5, position: 'absolute', top: 0 }, result ? { backgroundColor: '#4ba83e' } : { backgroundColor: '#DB504B' }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'SFUIDisplay-Regular', marginTop: 10 }}>{result ? 'Düzdür:' : 'Düzgün cavab:'}</Text>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 5, marginRight: 7 }} onPress={openReportWindow}>
                    {<Image style={{ width: 30, height: 30, marginLeft: 1, marginTop: 1 }} source={require('../../img/qproblem.png')} />}
                </TouchableOpacity>
            </View>
            <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'SFUIDisplay-Regular', marginTop: 5, marginRight: 15 }}>{transSentence} — {sentence}</Text>
        </View>
    )
}

export const ReportModal = ({ closeWindow, lesson }) => {
    const [isSent, setIsSent] = useState(false)
    const [reportMessage, setReportMessage] = useState('')
    function report() {
        if (reportMessage.length > 4) {
            database()
            .ref(`/errors/${lesson}`)
            .update({
                mistake: reportMessage
            })
            .then(() => console.log('success'))
            setIsSent(true)
            setTimeout(() => {
                closeWindow()
            }, 4000)
        }
    }
    return (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', zIndex: 100, backgroundColor: 'rgba(0,0,0,0.3)' }}>
            {!isSent && <View style={{ backgroundColor: '#fff', width: '90%', borderRadius: 15, padding: 10 }}>
                <Text style={{ fontSize: 17, color: '#000', fontFamily: 'SFUIDisplay-Regular' }}>Səhv haqqında məlumatı daxil edin</Text>
                <TextInput style={{
                    margin: 12,
                    borderWidth: 2,
                    borderRadius: 15,
                    paddingHorizontal: 15,
                    fontSize: 16,
                    borderColor: '#999',
                    width: '90%',
                    fontFamily: 'SFUIDisplay-Regular'
                }}
                    maxLength={300}
                    onChangeText={setReportMessage}
                    multiline={true}
                    value={reportMessage}
                    numberOfLines={5}
                    placeholder='Məsələn, bu cümlə Azərbaycan dilində səhv tərtib olunub, ona görə ki ...' />
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={{ padding: 10, backgroundColor: '#c44d4d', borderRadius: 145 }} onPress={closeWindow}>
                        <Text style={{ color: '#fff' }}>geriyə</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={report} style={{ padding: 10, backgroundColor: reportMessage.length < 5 && '#7B97BC' || '#3fb06e', borderRadius: 145, marginLeft: 10 }}>
                        <Text style={{ color: '#fff' }}>göndərmək</Text>
                    </TouchableOpacity>
                </View>
            </View> || <Text style={{ backgroundColor: '#fff', padding: 15, fontSize: 18, fontFamily: 'SFUIDisplay-Regular', width: '80%', borderRadius: 10 }}>Teşəkkür edirik, sizin rəyniz tezliklə baxılacaq</Text>}
        </View>
    )
}