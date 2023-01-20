import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors, spacings, textStyles} from '../constants/theme';

type TitleTextProps = {
  title?: string;
};

export default function TitleText({title}: TitleTextProps) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    ...textStyles.title,
    color: colors.white,
    fontWeight: 'bold',
  },
  textContainer: {
    padding: spacings.l,
  },
});
