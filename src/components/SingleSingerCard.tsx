import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {colors, spacings, textStyles} from '../constants/theme';
type SingleSingerCardProps = {
  singerImage: string;
  singer: string;
};

export default function SingleSingerCard({
  singerImage,
  singer,
}: SingleSingerCardProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: singerImage,
        }}
        style={styles.singerImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>More Like</Text>
        <Text style={styles.title}>{singer}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: spacings.l,
    paddingTop: spacings.xl,
    alignItems: 'center',
  },
  singerImage: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },
  textContainer: {
    paddingLeft: spacings.l,
  },
  text: {
    textTransform: 'uppercase',
    color: colors.white + 'bf',
  },
  title: {
    ...textStyles.title,
    fontWeight: 'bold',
    color: colors.white,
  },
});
