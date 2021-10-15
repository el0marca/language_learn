import React, { useState } from 'react'
import { Button, Image, ImageBackground, TextInput, TouchableOpacity, Share, Text, View, StyleSheet } from 'react-native'
import { updateProgress } from '../redux/progress'
import { useDispatch, useSelector } from 'react-redux'
import { changeVoice } from '../redux/voice'
import { Back } from '../components/Common/Back'
import database from '@react-native-firebase/database';
const radioTrue = require('../img/radioTrue.png')
const radioFalse = require('../img/radioFalse.png')

export const SettingScreen = () => {
  const dispatch = useDispatch()
  const [resetProgressMode, setResetProgressMode] = useState(false)
  const [suggestMode, setSuggestMode] = useState(false)
  const [text, onChangeText] = useState('8')
  const [isSent, setIsSent] = useState(false)
  const onShare = async () => {
    Share.share({
      message:
        'Asan English | İngilis dilini asanlıqla öyrən',
    })
  }
  return (
    <ImageBackground source={require('../img/bg/tasksBg.jpg')} style={{ flex: 1 }}>
      <SuggestModalWindow suggestMode={suggestMode} isSent={isSent} setSuggestMode={setSuggestMode} setIsSent={setIsSent}/>
      <ResetProgressModalWindow resetProgressMode={resetProgressMode} setResetProgressMode={setResetProgressMode} />
      <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'flex-end' }}>
        <View style={{ position: 'absolute', left: 20, bottom: 15, zIndex: 1 }}>
          <Back />
        </View>
        <Text style={{ color: '#fff', fontSize: 25, textAlign: 'center', fontFamily: 'SFUIDisplay-Bold', paddingBottom: 15 }}>Ayarlar</Text>
      </View>
      <View style={{ flex: 7, justifyContent: 'flex-start', backgroundColor: '#fff', borderRadius: 40, paddingLeft: 20, paddingTop: 30 }}>
        <View style={{ justifyContent: 'space-between', alignItems: 'flex-start', width: '85%', flexDirection: 'row' }}>
          <View style={{justifyContent:'center', alignItems:'center'}}>
              <Image style={{width:32,height:34}} source={require('../img/microphoneEdit.png')}/>
            <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 18, fontFamily: 'SFUIDisplay-Regular', color: '#444' }}>Tələffüz:</Text></View>
          <View>
            <LanguageItem txt={'Amerikan İngiliscəsi'} voiceType={'us/male'} />
            <LanguageItem txt={'Britaniya İngiliscəsi'} voiceType={'uk/male'} />
          </View>
        </View>
        <Line />
        <MenuItem fnc={setResetProgressMode} img={require('../img/reset.png')} txt={'Tərəqqini sıfırlamaq'} />
        <Line />
        <MenuItem fnc={onShare} img={require('../img/share.png')} txt={'Tətbiqi bölüşmək'} />
        <Line />
        <MenuItem fnc={() => { setSuggestMode(true), setIsSent(false) }} img={require('../img/question.png')} txt={'Məndə problem var'} />
        {/* <TextInput style={{ marginTop: 150 }}
          onChangeText={onChangeText}
          value={text} />
        <Button title='setmyprogress' onPress={() => dispatch(updateProgress(Number(text)))} /> */}
      </View>
    </ImageBackground>
  )
}

const MenuItem = ({ fnc, img, txt }) => {
  return (
    <TouchableOpacity activeOpacity={.5} onPress={fnc} style={{ flexDirection: 'row' }}>
      <View style={{ flex: 1 }}>
        <Image style={{ width: 30, height: 30 }} source={img} />
      </View>
      <View style={{ flex: 5, justifyContent: 'center' }}>
        <Text style={{ fontSize: 19, fontFamily: 'SFUIDisplay-Regular', color: '#444', textAlignVertical: 'center' }}>{txt}</Text>
      </View>
    </TouchableOpacity>
  )
}

const Line = () => {
  return (
    <View style={{ width: '100%', alignItems: 'center', height: 40, justifyContent: 'center' }}>
      <View style={{ width: '80%', height: 0.5, backgroundColor: '#bababa', }}></View>
    </View>
  )
}

const LanguageItem = ({ txt, voiceType }) => {
  const dispatch = useDispatch()
  const voice = useSelector(state => state.voice.value)
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => dispatch(changeVoice(voiceType))} style={{ flexDirection: 'row', marginBottom: 20 }}>
      <Image style={{ width: 20, height: 20, marginRight: 10 }} source={voice == voiceType && radioTrue || radioFalse} />
      <Text style={{ fontSize: 18, fontFamily: 'SFUIDisplay-Regular', color: '#555' }}>{txt}</Text>
    </TouchableOpacity>
  )
}

const SuggestModalWindow = ({ suggestMode, setSuggestMode, isSent, setIsSent }) => {
  const [email, setEmail] = useState('')
  const [suggest, setSuggest] = useState('')
  function report() {
    if (suggest.length > 9 && email.includes('@') && email.includes('.')) {
      database()
        .ref(`/suggests/${email.replace('.',',')}`)
        .update({
          suggest
        })
        .then(() => console.log('success'))
      setIsSent(true)
      setEmail('')
      setSuggest('')
      setTimeout(() => {
        setSuggestMode(false)
      }, 2500)
    }
  }

  return (
    <>{suggestMode == true && <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', zIndex: 100, backgroundColor: 'rgba(0,0,0,0.3)' }}>
      {!isSent && <View style={{ backgroundColor: '#fff', width: '90%', borderRadius: 15, padding: 10 }}>
        <Text style={{ fontFamily: 'SFUIDisplay-Regular', fontSize: 17, color: '#000' }}>Emailnızı daxil edin</Text>
        <TextInput style={[s.input, {
          borderColor: '#999',
        }]}
          keyboardType='email-address'
          onChangeText={setEmail}
          value={email}
          maxLength={300}
        />
        <Text style={{ fontFamily: 'SFUIDisplay-Regular', fontSize: 17, color: '#000' }}>Problem və ya təklifinizi təsvir edin</Text>
        <TextInput style={[s.input, {textAlignVertical:'top'}]}
          maxLength={300}
          onChangeText={setSuggest}
          multiline={true}
          value={suggest}
          numberOfLines={5}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity style={{ padding: 10, backgroundColor: '#c44d4d', borderRadius: 145 }} onPress={() => setSuggestMode(false)}>
            <Text style={{ color: '#fff' }}>geriyə</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled={!(email.includes('@') && suggest.length > 9 && email.includes('.'))} style={{ padding: 10, backgroundColor: email.includes('@') && suggest.length > 9 && email.includes('.') && '#3fb06e' || '#7B97BC', borderRadius: 145, marginLeft: 10 }} onPress={report}>
            <Text style={{ color: '#fff' }}>göndərmək</Text>
          </TouchableOpacity>
        </View>
      </View> || <Text style={{ backgroundColor: '#fff', padding: 15, fontSize: 18, fontFamily: 'SFUIDisplay-Regular', width: '80%', borderRadius: 10 }}>Teşəkkür edirik, sorğunuz tezliklə cavablanacaq</Text>}
    </View>}
    </>
  )
}
const s = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 15,
    fontSize: 17,
    borderColor: '#999',
    width: '90%',
    fontFamily: 'SFUIDisplay-Regular',
  }
})
const ResetProgressModalWindow = ({ resetProgressMode, setResetProgressMode }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)
  async function resetProgress() {
    dispatch(updateProgress(1))
    setResetProgressMode(false)
  }
  return (
    <>
      {resetProgressMode && <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', zIndex: 100, backgroundColor: 'rgba(0,0,0,0.3)' }}>
        <View style={{ backgroundColor: '#fff', width: '80%', borderRadius: 15, padding: 10, justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, fontFamily: 'SFUIDisplay-Regular', color: '#444', textAlign: 'center', paddingVertical: 10 }}>Tərəqqini sıfırlamaq</Text>
          <Text style={{ fontFamily: 'SFUIDisplay-Regular', fontSize: 16, paddingBottom: 20 }}>Siz əminsiz ki tətbiqdə olan tərəqqini sıfırlamaq istəyirsiz? {user && 'Hesabınızındaki məlumat toxunulmayacaq'}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity style={{ padding: 10, backgroundColor: '#c44d4d', borderRadius: 145 }} onPress={() => setResetProgressMode(false)}>
              <Text style={{ color: '#fff' }}>xeyir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10, backgroundColor: '#3fb06e', borderRadius: 145, marginLeft: 10 }} onPress={resetProgress}>
              <Text style={{ color: '#fff' }}>sıfırlamaq</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>}
    </>
  )
}