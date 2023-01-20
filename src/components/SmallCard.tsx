import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import {colors, spacings} from '../constants/theme';

type SmallCardProps = {
  title?: string;
  image?: string;
};

const {width} = Dimensions.get('window');
export default function SmallCard({title, image}: SmallCardProps) {
  return (
    <View style={styles.cardContainer}>
      <Image
        resizeMode="cover"
        source={{
          uri: image,
        }}
        style={styles.cardImage}
      />
      <Text style={styles.cardText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: colors.lightBlack + 'bf',
    alignItems: 'center',
    width: width / 2 - 22,
  },
  cardImage: {
    height: 60,
    width: 60,
    overflow: 'hidden',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  cardText: {
    color: colors.white,
    fontWeight: 'bold',
    paddingHorizontal: spacings.m,
    flex: 1,
    flexWrap: 'wrap',
  },
});
