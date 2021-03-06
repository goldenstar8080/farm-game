import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

const AddressCheck = ({addressInfo}) => {
  const [slt, setSlt] = useState(false);

  const goAddressInput = () => {
    Actions.addressInput({addressInfo: addressInfo});
  };

  const goRegist = () => {
    console.log('Regist');
  };

  return (
    <ImageBackground
      style={AddressCheckStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/backimg-bg.png')}>
      <ScrollView>
        <LinearGradient 
          colors={['#6c0', '#390']}
          style={AddressCheckStyles.header}>
          <TouchableOpacity
            style={[AddressCheckStyles.contact, AddressCheckStyles.shadow]}>
            <Text style={AddressCheckStyles.contactText}>お問い合わせ</Text>
          </TouchableOpacity>
          <View style={AddressCheckStyles.title}>
            <Text style={[AddressCheckStyles.contactText, {fontSize: 14}]}>
              お届け先
            </Text>
          </View>
          <View style={AddressCheckStyles.logo}>
            <TouchableOpacity>
              <Image
                style={{width: 30, height: 30}}
                source={require('../../assets/images/flogo.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{width: 30, height: 30}}
                source={require('../../assets/images/tlogo.png')}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <LinearGradient 
          colors={['#f9f9f9', '#eeeeee']}
          style={AddressCheckStyles.subTitle}>
          <Text style={[AddressCheckStyles.contentText, {marginTop: 8}]}>
            名前：{addressInfo.name_kana_sei + '  ' + addressInfo.name_kana_mei}
          </Text>
        </LinearGradient>

        <LinearGradient
          colors={['#f9f9f9', '#eeeeee']}
          style={AddressCheckStyles.subTitle}>
          <Text style={[AddressCheckStyles.contentText, {marginTop: 8}]}>
            カナ：
            {addressInfo.name_kanji_sei + '  ' + addressInfo.name_kanji_mei}
          </Text>
        </LinearGradient>

        <LinearGradient
          colors={['#f9f9f9', '#eeeeee']}
          style={AddressCheckStyles.subTitle}>
          <Text style={[AddressCheckStyles.contentText, {marginTop: 8}]}>
            種別：{addressInfo.str_reserved1}
          </Text>
        </LinearGradient>

        <LinearGradient
          colors={['#f9f9f9', '#eeeeee']}
          style={AddressCheckStyles.subTitle}>
          <Text style={[AddressCheckStyles.contentText, {marginTop: 8}]}>
            mail：{addressInfo.memo}
          </Text>
        </LinearGradient>

        <LinearGradient
          colors={['#f9f9f9', '#eeeeee']}
          style={AddressCheckStyles.subTitle}>
          <Text style={[AddressCheckStyles.contentText, {marginTop: 8}]}>
            住所：〒{addressInfo.zip}
            {'\n'}
            {addressInfo.str_area +
              '  ' +
              addressInfo.addr1 +
              '  ' +
              addressInfo.addr2}
          </Text>
        </LinearGradient>

        <LinearGradient
          colors={['#f9f9f9', '#eeeeee']}
          style={AddressCheckStyles.subTitle}>
          <Text style={[AddressCheckStyles.contentText, {marginTop: 8}]}>
            連絡先(どちらか必須)
            {'\n'}
            電話：{addressInfo.tel}
            {'\n'}
            携帯：{addressInfo.tel_mobile}
          </Text>
        </LinearGradient>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <TouchableOpacity
            style={AddressCheckStyles.submit}
            onPress={goRegist}>
            <LinearGradient
              colors={['#5f9cc5', '#396b9e']}
              style={[AddressCheckStyles.submitBtn, AddressCheckStyles.shadow]}>
              <Text
                style={[
                  AddressCheckStyles.contentText,
                  {marginVertical: 8, color: '#fff'},
                ]}>
                確定する
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={AddressCheckStyles.submit} onPress={goAddressInput}>
            <LinearGradient
              colors={['#ffefaa', '#ffe155']}
              style={[
                AddressCheckStyles.submitBtn,
                AddressCheckStyles.shadow,
                {borderColor: '#f4c63f'},
              ]}>
              <Text
                style={[AddressCheckStyles.contentText, {marginVertical: 8}]}>
                修正する
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AddressCheck;

const AddressCheckStyles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  contact: {
    borderRadius: 16,
    marginBottom: 8,
    marginLeft: 4,
    marginTop: 2,
    borderWidth: 1,
    borderColor: '#333',
  },
  contactText: {
    color: '#fff',
    margin: 8,
    fontSize: 12,
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: '#fff',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 1,
      width: 2,
    },
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 4
  },
  subTitle: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#aaa'
  },
  subTitleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff'
  },
  contentText: {
    color: '#222',
    fontWeight: 'bold',
    lineHeight: 18,
  },
  submit: {
    width: '50%',
    padding: 5,    
  },
  submitBtn: {
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#044062',
  }
})
