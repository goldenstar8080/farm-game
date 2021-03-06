import React, {useState} from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';
import RadioButtonRN from 'radio-buttons-react-native';
import RNPickerSelect from 'react-native-picker-select';

import Header from '../../Components/Header.js';
import HeaderBrownBar from '../../Components/HeaderBrownBar.js';

const prefectures = [
  {label: '北海道', value: '北海道'},
  {label: '青森県', value: '青森県'},
  {label: '東京都', value: '東京都'},
];

const myself = [
  {
    label: '本人',
  },
  {
    label: '本人以外',
  },
];

const AddressInput = ({addressInfo}) => {
  const [slt, setSlt] = useState(-1);
  const [inputData, setInputData] = useState({
    name_kanji_sei: '',
    name_kanji_mei: '',
    name_kana_sei: '',
    name_kana_mei: '',
    zip: '',
    area: 0,
    str_area: '東京都',
    addr1: '',
    addr2: '',
    tel: '',
    tel_mobile: '',
    memo: '',
    reserved1: 0,
    str_reserved1: '本人',
  });
  const [area, setArea] = useState('東京都');

  if (addressInfo && slt === -1) {
    if (addressInfo.str_reserved1 === '本人以外') {
      setSlt(2);
    } else {
      setSlt(1);
    }
    setInputData(addressInfo);
    setArea(addressInfo.str_area);
  }

  const handleChangeValue = (e, key) => {
    let tempData = {};
    tempData = inputData;
    tempData[key] = e.nativeEvent.text;
    setInputData(tempData);
  };

  const handleSelectValue = (e) => {
    let tempData = {};
    tempData = inputData;
    tempData.str_reserved1 = e.label;
    setInputData(tempData);
  };

  const goAddressCheck = () => {
    let tempData = {};
    tempData = inputData;
    tempData.str_area = area;
    setInputData(tempData);
    Actions.addressCheck({addressInfo: inputData});
  };

  const goYamato = () => {
    Actions.yamato();
  };

  return (
    <ImageBackground
      style={AddressInputStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/backimg-bg.png')}>
      <ScrollView>
        <HeaderBrownBar />
        <Header title="お届け先住所入力" />

        <AutoHeightImage
          width={responsiveWidth(100)}
          source={require('../../assets/images/listtop.png')}
        />

        <View style={[AddressInputStyles.content, AddressInputStyles.shadow]}>
          <LinearGradient
            colors={['#6facd5', '#497bae']}
            style={AddressInputStyles.subTitle}>
            <Text style={AddressInputStyles.subTitleText}>種別</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#f9f9f9', '#eeeeee']}
            style={AddressInputStyles.subTitle}>
            <RadioButtonRN
              data={myself}
              selectedBtn={(e) => handleSelectValue(e)}
              style={AddressInputStyles.radioArea}
              boxStyle={{backgroundColor: 'transparent'}}
              textStyle={AddressInputStyles.contentText}
              initial={slt}
            />
            <Text style={[AddressInputStyles.contentText, {marginVertical: 8}]}>
              ※本人…畑っぴをご利用されているご自身{'\n'}
              ※本人以外…プレゼント、ご家族ご友人宛てなど
            </Text>
          </LinearGradient>
          <LinearGradient
            colors={['#6facd5', '#497bae']}
            style={AddressInputStyles.subTitle}>
            <Text style={AddressInputStyles.subTitleText}>お名前(漢字)</Text>
          </LinearGradient>

          <LinearGradient
            colors={['#f9f9f9', '#eeeeee']}
            style={AddressInputStyles.subTitle}>
            <Text style={[AddressInputStyles.contentText, {marginTop: 8}]}>
              姓:
            </Text>
            <View style={AddressInputStyles.inputArea}>
              <TextInput
                style={AddressInputStyles.contentText}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                defaultValue={inputData.name_kana_sei}
                onChange={(e) => handleChangeValue(e, 'name_kana_sei')}
              />
            </View>
            <Text style={[AddressInputStyles.contentText, {marginTop: 8}]}>
              名:
            </Text>
            <View style={AddressInputStyles.inputArea}>
              <TextInput
                style={AddressInputStyles.contentText}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                defaultValue={inputData.name_kana_mei}
                onChange={(e) => handleChangeValue(e, 'name_kana_mei')}
              />
            </View>
          </LinearGradient>

          <LinearGradient
            colors={['#6facd5', '#497bae']}
            style={AddressInputStyles.subTitle}>
            <Text style={AddressInputStyles.subTitleText}>
              お名前(カタカナ)
            </Text>
          </LinearGradient>
          <LinearGradient
            colors={['#f9f9f9', '#eeeeee']}
            style={AddressInputStyles.subTitle}>
            <Text style={[AddressInputStyles.contentText, {marginTop: 8}]}>
              セイ:
            </Text>
            <View style={AddressInputStyles.inputArea}>
              <TextInput
                style={AddressInputStyles.contentText}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                defaultValue={inputData.name_kanji_sei}
                onChange={(e) => handleChangeValue(e, 'name_kanji_sei')}
              />
            </View>
            <Text style={[AddressInputStyles.contentText, {marginTop: 8}]}>
              メイ:
            </Text>

            <View style={AddressInputStyles.inputArea}>
              <TextInput
                style={AddressInputStyles.contentText}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                defaultValue={inputData.name_kanji_mei}
                onChange={(e) => handleChangeValue(e, 'name_kanji_mei')}
              />
            </View>
          </LinearGradient>

          <LinearGradient
            colors={['#6facd5', '#497bae']}
            style={AddressInputStyles.subTitle}>
            <Text style={AddressInputStyles.subTitleText}>メールアドレス</Text>
          </LinearGradient>
          <LinearGradient 
            colors={['#f9f9f9', '#eeeeee']}
            style={AddressInputStyles.subTitle}>
            <View style={AddressInputStyles.inputArea}>
              <TextInput
                style={AddressInputStyles.contentText}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                defaultValue={inputData.memo}
                onChange={(e) => handleChangeValue(e, 'memo')}
              />
            </View>
            <Text style={[AddressInputStyles.contentText, {marginVertical: 8}]}>
              ※作物の配送に関するご連絡をする場合があります。
              収穫者ご本人のメールアドレスを必ずご入力ください。また、ld-inc.jpからのメールを受信できるよう設定を変更してください。
            </Text>
          </LinearGradient>

          <LinearGradient
            colors={['#6facd5', '#497bae']}
            style={AddressInputStyles.subTitle}>
            <Text style={AddressInputStyles.subTitleText}>住所</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#f9f9f9', '#eeeeee']}
            style={AddressInputStyles.subTitle}>
            <Text style={[AddressInputStyles.contentText, {marginTop: 8}]}>
              郵便番号:
            </Text>
            <View style={AddressInputStyles.inputArea}>
              <TextInput
                style={AddressInputStyles.contentText}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                defaultValue={inputData.zip}
                onChange={(e) => handleChangeValue(e, 'zip')}
              />
            </View>
            <Text style={[AddressInputStyles.contentText, {marginTop: 8}]}>
              都道府県:
            </Text>
            <View style={AddressInputStyles.inputArea}>
              <RNPickerSelect
                onValueChange={(value) => setArea(value)}
                items={prefectures}
                value={area}
                style={{
                  inputAndroid: {
                    backgroundColor: 'transparent',
                  },
                  iconContainer: {
                    top: 5,
                    right: 15,
                  },
                }}
                userNativeAndroidPickerStyle={false}
              />
            </View>
            <Text style={[AddressInputStyles.contentText, {marginTop: 8}]}>
              市町村、番地:
            </Text>
            <View style={AddressInputStyles.inputArea}>
              <TextInput
                style={AddressInputStyles.contentText}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                defaultValue={inputData.addr1}
                onChange={(e) => handleChangeValue(e, 'addr1')}
              />
            </View>
            <Text style={[AddressInputStyles.contentText, {marginTop: 8}]}>
              マンション、アパート名:
            </Text>
            <View style={AddressInputStyles.inputArea}>
              <TextInput
                style={AddressInputStyles.contentText}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                defaultValue={inputData.addr2}
                onChange={(e) => handleChangeValue(e, 'addr2')}
              />
            </View>
          </LinearGradient>

          <LinearGradient
            colors={['#6facd5', '#497bae']}
            style={AddressInputStyles.subTitle}>
            <Text style={AddressInputStyles.subTitleText}>
              連絡先(両方とも入力必須/携帯はハイフン不要)
            </Text>
          </LinearGradient>
          <LinearGradient
            colors={['#f9f9f9', '#eeeeee']}
            style={AddressInputStyles.subTitle}>
            <Text style={[AddressInputStyles.contentText, {marginTop: 8}]}>
              電話番号:
            </Text>
            <View style={AddressInputStyles.inputArea}>
              <TextInput
                style={AddressInputStyles.contentText}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                defaultValue={inputData.tel}
                onChange={(e) => handleChangeValue(e, 'tel')}
              />
            </View>
            <Text style={[AddressInputStyles.contentText, {marginTop: 8}]}>
              携帯番号:
            </Text>
            <View style={AddressInputStyles.inputArea}>
              <TextInput
                style={AddressInputStyles.contentText}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                defaultValue={inputData.tel_mobile}
                onChange={(e) => handleChangeValue(e, 'tel_mobile')}
              />
            </View>
            <Text style={[AddressInputStyles.contentText, {marginVertical: 8}]}>
              ※連絡可能な電話番号が1つの場合は同じ番号を両方に入力して下さい。
              {'\n'}
              ※商品お届け時に不在の場合はヤマト運輸がご連絡するため、着信がリアルタイムでわかる電話番号でお願いします
            </Text>
          </LinearGradient>

          <LinearGradient
            colors={['#6facd5', '#497bae']}
            style={AddressInputStyles.subTitle}>
            <Text style={AddressInputStyles.subTitleText}>
              ヤマトの便利なメールサービス
            </Text>
          </LinearGradient>
          <LinearGradient
            colors={['#f9f9f9', '#eeeeee']}
            style={AddressInputStyles.subTitle}>
            <Text style={[AddressInputStyles.contentText, {marginVertical: 8}]}>
              ☆登録するとスムーズに受け取りができます！！
            </Text>
          </LinearGradient>
          <TouchableOpacity onPress={goYamato}>
            <LinearGradient
              colors={['#ffefaa', '#ffe155']}
              style={AddressInputStyles.yamatoBg}>
              <Text
                style={[
                  AddressInputStyles.contentText,
                  {marginVertical: 8, width: '95%'},
                ]}>
                利用する方はコチラから
              </Text>
              <View style={AddressInputStyles.iconBg}>
                <Image
                  style={AddressInputStyles.iconNextImg}
                  source={require('../../assets/images/icons-36-white.png')}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <View style={AddressInputStyles.regist}>
            <ImageBackground
              style={AddressInputStyles.registBg}
              resizeMode="repeat"
              source={require('../../assets/images/submenubg.png')}>
              <Text style={{color: '#630'}}>※最大5件まで登録できます。</Text>
            </ImageBackground>
          </View>

          <TouchableOpacity
            style={AddressInputStyles.addressCheckBg}
            onPress={goAddressCheck}>
            <LinearGradient
              colors={['#f9f9f9', '#eeeeee']}
              style={AddressInputStyles.addressCheckText}>
              <Text>確認する</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AddressInput;

const AddressInputStyles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    borderRadius: 8,
    marginTop: 1,
  },
  shadow: {
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 1,
      width: 4,
    },
  },
  subTitle: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  subTitleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  contentText: {
    color: '#222',
    fontWeight: 'bold',
    lineHeight: 18,
    width: '100%',
  },
  radioArea: {
    marginHorizontal: 4,
  },
  inputArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    borderRadius: 16,
    padding: 12,
    marginVertical: 4,
  },
  yamatoBg: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBg: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: 18,
    height: 18,
    borderRadius: 9,
    overflow: 'hidden',
  },
  iconNextImg: {
    width: 776,
    height: 18,
    marginLeft: -108,
  },
  regist: {
    marginHorizontal: '5%',
    width: '90%',
    borderRadius: 8,
    borderColor: '#600',
    borderWidth: 3,
    marginVertical: 8,
  },
  registBg: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  addressCheckBg: {
    width: '90%',
    marginHorizontal: '5%',
    marginBottom: 8,
    borderRadius: 12,
  },
  addressCheckText: {
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 12,
  },
});
