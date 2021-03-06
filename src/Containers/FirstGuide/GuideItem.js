import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

const GuideItem = ({item, top, bottom}) => {
  const goNext = () => {
    Actions[item.link]();
  };
  return (
    <TouchableOpacity onPress={goNext}>
      <View
        style={[
          GuideItemStyles.bg,
          top ? GuideItemStyles.topItem : null,
          bottom ? GuideItemStyles.bottomItem : null,
        ]}>
        <LinearGradient
          colors={['#ffffff', '#f1f1f1']}
          style={[
            GuideItemStyles.nextBg,
            top ? GuideItemStyles.topItem : GuideItemStyles.bottomItem,
          ]}>
          <AutoHeightImage width={84} source={item.img} />
          <View style={GuideItemStyles.textArea}>
            <Text style={GuideItemStyles.nextText}>{item.content}</Text>
          </View>
          <View style={GuideItemStyles.iconBg}>
            <Image
              style={GuideItemStyles.iconNextImg}
              source={require('../../assets/images/icons-36-white.png')}
            />
          </View>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default GuideItem;

const GuideItemStyles = StyleSheet.create({
  bg: {
    borderColor: '#aaa',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  topItem: {
    borderTopWidth: 1,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  bottomItem: {
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  nextBg: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textArea: {
    width: responsiveWidth(100) - 130,
  },
  nextText: {
    color: '#2f3e46',
    fontWeight: 'bold',
    marginTop: 70,
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
  subTitle: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderColor: '#456f9a',
    borderWidth: 1,
  },
  subTitleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  contentText: {
    fontSize: 12,
    marginBottom: 8,
    color: '#333333',
  },
  content: {
    borderColor: '#aaa',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  bottomContent: {
    borderColor: '#aaa',
    borderWidth: 1,
    padding: 15,
  },
});
