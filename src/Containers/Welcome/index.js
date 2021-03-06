import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {
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
import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';
import DeviceInfo from 'react-native-device-info';

import AccordionItem from './AccordionItem';
import {loginWithAPI} from '../../services/apis/auth';
import {signupWithAPI} from '../../services/apis/auth';
import {apiMemberById} from '../../services/apis/users';
import {setUser} from '../../redux/reducers/userSlice';

import Spinner from 'react-native-loading-spinner-overlay';

const tab1ImgList = [
  'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/ftop/img_ftop2.png',
  'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/ftop/img_ftop3.png',
  'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/ftop/img_ftop4.png',
  'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/ftop/img_ftop5.png',
];
const tab2ImgList = [
  'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/ftop/img_ftop6.png',
];

const accordionList = [
  {
    title: 'お問い合わせ',
    link: 'contact',
  },
  {
    title: 'ご利用規約',
    link: 'kiyaku',
  },
  {
    title: '対応機種',
    link: 'kisyu',
  },
  {
    title: '個人情報保護方針',
    link: 'privacy',
  },
  {
    title: '特定商取引法表示',
    link: 'tokutei',
  },
  {
    title: '運営会社',
    link: 'company',
  },
];

const Welcome = () => {
  const [activeTab, setActiveTab] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  const dispatch = useDispatch();
  const goHome = async () => {
    let uniqueId = DeviceInfo.getUniqueId();
    setLoadingStatus(true);

    const signUp = await signupWithAPI({
      udid: uniqueId,
      password: '',
    });
    const response = await loginWithAPI({
      udid: uniqueId,
      password: '',
    });
    if (response && response.member) {
      const userInfo = await apiMemberById(response.member.id);
      if (userInfo) {
        dispatch(setUser(userInfo));
        Actions.home();
        setLoadingStatus(false);
      }
    }
    // Actions.home();
  };

  return (
    <View style={{flex: 1, backgroundColor: '#f0ffe0'}}>
      <Spinner visible={loadingStatus} />
      <ScrollView>
        <TouchableOpacity onPress={goHome}>
          <View>
            <AutoHeightImage
              width={responsiveWidth(100)}
              source={require('../../assets/images/main_upside.png')}
            />
          </View>
          <View style={{alignItems: 'center', marginVertical: 20}}>
            <AutoHeightImage
              width={304}
              source={require('../../assets/images/start_button.png')}
            />
          </View>
          <View style={{alignItems: 'flex-end', marginBottom: 20}}>
            <AutoHeightImage
              width={172}
              source={require('../../assets/images/phone_change.png')}
            />
          </View>
          <View>
            <AutoHeightImage
              width={responsiveWidth(100)}
              source={require('../../assets/images/main_downside.png')}
            />
          </View>

          {/* <View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.tabItem}
                onPress={() => setActiveTab(true)}>
                {activeTab ? (
                  <LinearGradient
                    colors={['#cfc', '#9c0']}
                    style={[styles.tabImgGradient, styles.tabImgBg]}>
                    <Text style={styles.tabTitle}>どんなゲームなの？</Text>
                  </LinearGradient>
                ) : (
                  <ImageBackground
                    style={styles.tabBg}
                    imageStyle={styles.tabImgBg}
                    source={{
                      uri:
                        'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/bg/category_bg2.gif',
                    }}>
                    <Text style={styles.tabTitle}>どんなゲームなの？</Text>
                  </ImageBackground>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.tabItem}
                onPress={() => setActiveTab(false)}>
                {activeTab ? (
                  <ImageBackground
                    style={styles.tabBg}
                    imageStyle={styles.tabImgBg}
                    source={{
                      uri:
                        'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/bg/category_bg2.gif',
                    }}>
                    <Text style={styles.tabTitle}>ユーザーレビュー</Text>
                  </ImageBackground>
                ) : (
                  <LinearGradient
                    colors={['#cfc', '#9c0']}
                    style={[styles.tabImgGradient, styles.tabImgBg]}>
                    <Text style={styles.tabTitle}>ユーザーレビュー</Text>
                  </LinearGradient>
                )}
              </TouchableOpacity>
            </View>

            {activeTab
              ? tab1ImgList.map((item, i) => (
                  <View key={i}>
                    <AutoHeightImage
                      width={responsiveWidth(100)}
                      source={{uri: item}}
                    />
                  </View>
                ))
              : tab2ImgList.map((item, i) => (
                  <View key={i}>
                    <AutoHeightImage
                      width={responsiveWidth(100)}
                      source={{uri: item}}
                    />
                  </View>
                ))}

            <Image
              style={{height: 2, width: '100%'}}
              source={{
                uri:
                  'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/deco/category_innerlinebg.png',
              }}
            />

            <Text>{'\n\n'}</Text>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity onPress={() => toggleExpand()}>
                <ImageBackground
                  style={[styles.accordionBg, styles.accordion]}
                  imageStyle={styles.accordionImgBg}
                  source={{
                    uri:
                      'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/bg/paper1.png',
                  }}>
                <Text>サポートメニュー</Text>
                  {expanded ? (
                    <Image
                      style={styles.openClose}
                      source={{
                        uri:
                          'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/acordion/point_none.png',
                      }}
                    />
                  ) : (
                    <Image
                      style={styles.openClose}
                      source={{
                        uri:
                          'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/acordion/point_plus.png',
                      }}
                    />
                  )}
                </ImageBackground>
              </TouchableOpacity>

              {expanded && (
                <View style={[styles.accordionBody, {width: 320}]}>
                  <ImageBackground
                    style={{borderRadius: 10, padding: 10}}
                    imageStyle={styles.accordionImgBg}
                    source={{
                      uri:
                        'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/bg/paper1.png',
                    }}>
                    {accordionList.map((item, i) => (
                      <AccordionItem
                        key={i}
                        item={item}
                        top={i === 0}
                        bottom={i + 1 === accordionList.length}
                      />
                    ))}
                  </ImageBackground>
                </View>
              )}
            </View>

            <AutoHeightImage
              width={responsiveWidth(100)}
              source={{
                uri:
                  'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/ground/ground_bg5.png',
              }}
            />
          </View> */}
          <View style={{width: '100%', height: 10}} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  headerLogin: {
    height: 47,
    margin: 0,
    flexDirection: 'row',
  },
  logo: {
    width: 95,
    height: 40,
    marginTop: 2,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
  },
  logoText: {
    color: '#ccff33',
    fontSize: 10,
    display: 'flex',
    marginTop: 30,
    marginLeft: -10,
  },
  logoTouch: {
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  loginBtn: {
    width: 109,
    height: 38,
    marginTop: 2,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
  },
  imgEvent: {
    width: '98%',
    height: 67,
    borderRadius: 2,
    padding: 4,
    flex: 1,
  },
  tabItem: {
    fontWeight: 'bold',
    textShadowColor: '#fff',
    marginTop: 20,
  },
  tabBg: {
    width: 142,
    height: 37,
    borderTopRightRadius: 10,
  },
  tabImgBg: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tabImgGradient: {
    flex: 1,
  },
  tabTitle: {
    color: '#663300',
    marginTop: 10,
    textAlign: 'center',
  },
  accordion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#630',
    fontWeight: 'bold',
    padding: 12,
    borderColor: '#663300',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  openClose: {
    width: 20,
    height: 20,
  },
  accordionBg: {
    width: 320,
    height: 44,
    borderRadius: 10,
  },
  accordionImgBg: {
    borderRadius: 10,
  },
  accordionBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#630',
    fontWeight: 'bold',
    borderColor: '#663300',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
  },
});
