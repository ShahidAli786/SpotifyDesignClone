import {
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  View,
  Text,
} from 'react-native';
import React from 'react';
import {colors, spacings, textStyles} from '../../constants/theme';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import ListHeader from './ListHeader';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');
export default function Premium() {
  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translateY.value = event.contentOffset.y;
    translateX.value = event.contentOffset.x;
  });
  const rImageStyle = useAnimatedStyle(() => {
    return {
      height:
        translateY.value > 0
          ? withTiming(width - translateY.value)
          : withTiming(width),
      width:
        translateY.value > 0
          ? withTiming(width - translateY.value)
          : withTiming(width),
      opacity: withTiming(1 - translateY.value * (1 / 200)),
      transform: [
        {
          scale: 1.5,
        },
        {
          translateY: withTiming(-translateY.value / 2),
        },
      ],
    };
  });
  const renderItem = () => <View style={{height: 400}} />;
  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        resizeMode="stretch"
        source={{
          uri: 'https://i.scdn.co/image/ab678e040000ed3ab085c77e61614adcc4f1095b',
        }}
        style={[styles.image, rImageStyle]}
      />
      <LinearGradient
        colors={[
          colors.lightGray,
          colors.darkBlack,
          colors.darkBlack,
          colors.darkBlack,
          colors.darkBlack,
          colors.darkBlack,
        ]}
        style={styles.overlay}
      />

      <View style={styles.headerLogo}>
        <Image
          source={require('../../assets/logo/spotify-white.png')}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>Premium</Text>
      </View>
      <Animated.FlatList
        ListHeaderComponent={() => <ListHeader />}
        data={[1]}
        onScroll={scrollHandler}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlack,
  },
  headerLogo: {
    flexDirection: 'row',
    paddingHorizontal: spacings.l,
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: width,
    height: width,
    alignSelf: 'center',
    zIndex: 0,
  },
  logo: {
    height: 20,
    width: 20,
  },
  headerTitle: {
    ...textStyles.body,
    fontWeight: 'bold',
    color: colors.white,
    paddingHorizontal: spacings.m,
  },
  overlay: {
    width: width,
    height: width,
    position: 'absolute',
    left: 0,
    top: 20,
    opacity: 0.5,
    backgroundColor: colors.darkBlack,
    transform: [
      {
        scale: 1.5,
      },
    ],
  },
});
