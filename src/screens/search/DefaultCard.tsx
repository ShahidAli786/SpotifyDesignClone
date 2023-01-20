import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, spacings, textStyles} from '../../constants/theme';

const {width} = Dimensions.get('window');
type DefaultCardProps = {
  title?: string;
  color?: string;
  image?: string;
};

export default function DefaultCard({title, color, image}: DefaultCardProps) {
  return (
    // @ts-ignore
    <View style={{...styles.card, backgroundColor: colors[color]}}>
      <Text style={styles.cardText}>{title}</Text>
      <Image
        resizeMode="contain"
        source={{
          uri: image,
        }}
        style={styles.cardImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 100,
    backgroundColor: colors.customRed,
    width: width / 2 - 26,
    borderRadius: 5,
    paddingHorizontal: spacings.l,
    paddingVertical: spacings.l,
    marginBottom: spacings.xl,
    overflow: 'hidden',
  },
  cardText: {
    color: colors.white,
    ...textStyles.body,
    fontWeight: 'bold',
    width: width / 4,
  },
  cardImage: {
    position: 'absolute',
    height: 80,
    width: 80,
    transform: [{rotate: '25deg'}],
    top: 30,
    right: -30,
    borderRadius: 5,
  },
});
