import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {colors, spacings} from '../constants/theme';

type HorizonalCardProps = {
  imageUri?: string;
  singers?: string;
};
const {width} = Dimensions.get('window');
export default function HorizonalCard({imageUri, singers}: HorizonalCardProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: imageUri,
        }}
        style={styles.image}
      />
      <Text style={styles.text} numberOfLines={2}>
        {singers}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width / 2.5,

    marginRight: spacings.l,
  },
  image: {
    width: width / 2.5,
    height: width / 2.5,
    marginBottom: spacings.l,
  },
  text: {
    flex: 1,
    flexWrap: 'wrap',
    color: colors.white + 'bf',
    lineHeight: 22,
  },
});
