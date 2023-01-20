import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {colors, spacings, textStyles} from '../constants/theme';

type Props = {
  name: string;
  image: string;
};

export default function ArtistCard({name, image}: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.desc}>Artist</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: spacings.xl,
  },
  image: {
    height: 170,
    width: 170,
    borderRadius: 80,
  },
  title: {
    ...textStyles.small,
    color: colors.white,
    fontWeight: 'bold',
    paddingTop: spacings.l,
  },
  desc: {
    ...textStyles.small,
    color: colors.white + 'bf',
    fontWeight: '400',
    paddingTop: spacings.m,
  },
});
