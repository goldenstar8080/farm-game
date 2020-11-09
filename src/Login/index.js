import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,

} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Dash from 'react-native-dash';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import { Actions } from 'react-native-router-flux';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e);
  }

  const handlePassword = (e) => {
    setPassword(e);
  }

  const doLogin = () => {
    Actions.home()
  }
  return (
    <View>
      <ImageBackground
        style={LoginStyle.bgImg}
        resizeMode="repeat"
        // imageStyle={{ flex: 1 }}
        source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/bg_pattern01.png'}}>
          <ScrollView style={{flexDirection: 'column'}}>
            <View style={LoginStyle.header}>
              <Text style={LoginStyle.headerText}>ログイン</Text>
            </View>
            
            <View style={{width: '100%'}}>
              <View
                style={LoginStyle.formPart}
              >
                <View style={[LoginStyle.prizeText, LoginStyle.topCorner]}>
                  <Text style={[LoginStyle.headerText, LoginStyle.formTitle]}>
                    ◆入力事項
                  </Text>
                </View>
                <View style={LoginStyle.inputPart}>
                  <Text>メールアドレス:</Text>
                  <TextInput style = {LoginStyle.input}
                    underlineColorAndroid = 'transparent'
                    autoCapitalize = 'none'
                    onChangeText = {handleEmail} />
                  <Text>{'\n'}パスワード:</Text>
                  <TextInput style = {LoginStyle.input}
                    underlineColorAndroid = 'transparent'
                    autoCapitalize = 'none'
                    onChangeText = {handlePassword} />
                  <Text>※半角英数字4文字以上8文字以内{'\n\n'}</Text>
                  <TouchableOpacity                  
                    onPress = {() => doLogin()}>
                    <LinearGradient 
                      colors={['#eeeeee', '#cccccc']}
                      style = {LoginStyle.submitButton}>
                      <Text style={{color: '#333'}}>ログインする</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
                <View style={LoginStyle.prizeText}>
                  <Text style={[LoginStyle.headerText, LoginStyle.formTitle]}>
                    ◆パスワードを忘れた方
                  </Text>
                </View>
                <View style={LoginStyle.forgotPasswordPart}>
                  <TouchableOpacity style={LoginStyle.forgotPasswordBtn}>
                    <Text style={LoginStyle.forgotPasswordText}>
                      パスワードを忘れた方はコチラ ▶
                    </Text>
                  </TouchableOpacity>
                  <Dash 
                  style={{height: 0.3}}
                  dashColor='rgb(142, 142, 142)'
                  dashThickness={1} />
                  <Text style={{height: 8}}>{'\n'}</Text>
                </View>              
              </View>
            </View>
          </ScrollView>
      </ImageBackground>
    </View>
  )
}

export default Login;

const LoginStyle = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    height: 40,
    backgroundColor: '#67b500',
    borderTopWidth: 2,
    borderTopColor: '#8bc34a',
    position: 'relative',
    zIndex: 49,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  formPart: {
    backgroundColor: '#fff',
    position: 'relative',
    zIndex: 0,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 16,
    borderRadius: 8,
  },
  formTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  prizeText: {
    backgroundColor: '#67b500',    
    borderLeftColor: 'rgba(0, 0, 0, 0.3)',
    borderLeftWidth: 16,
    borderStyle: 'solid',    
  },
  topCorner: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  inputPart: {
    padding: 8,
    marginVertical: 16,
  },
  container: {
    paddingTop: 23
  },
  input: {
    paddingHorizontal: 1,
    paddingVertical: 2,
    height: 30,
    width: 192,
    borderRadius: 8,
    borderBottomColor: 'rgb(118, 118, 118)',
    borderRightColor: 'rgb(118, 118, 118)',
    borderWidth: 2
  },
  submitButton: {
    paddingVertical: 16,
    height: 62,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 8,
  },
  forgotPasswordPart: {
    padding: 8,
  },
  forgotPasswordBtn: {
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
    backgroundColor: 'rgba(29, 187, 47, 1.00)',
    lineHeight: 16,
    // marginBottom: 8,
    borderRadius: 8,
  },
  forgotPasswordText: {
    color: '#fff',
    fontSize: 14,
    marginVertical: 4,
  }
})
