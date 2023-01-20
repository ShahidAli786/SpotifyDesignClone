import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import React from 'react';
import {colors, spacings} from '../constants/theme';
type BadgeType = {
  title?: string;
  bordered?: boolean;
};

const Badge = ({title, bordered}: BadgeType) => (
  <TouchableHighlight style={[styles.badge, {borderWidth: bordered ? 0.5 : 0}]}>
    <Text style={styles.badgeText}>{title}</Text>
  </TouchableHighlight>
);

type HeaderFilterProps = {
  badges: Array<string>;
  bordered?: boolean;
};

export default function HeaderFilter({badges, bordered}: HeaderFilterProps) {
  return (
    <View style={styles.container}>
      {badges.map((badge, index) => (
        <Badge bordered={bordered} key={index.toString()} title={badge} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: spacings.l,
    paddingVertical: spacings.m,
    backgroundColor: colors.darkBlack,
  },
  badge: {
    paddingHorizontal: spacings.l + 5,
    paddingVertical: spacings.m + 3,
    backgroundColor: colors.lightBlack + 'bf',
    borderRadius: 40,
    marginRight: spacings.m,
    borderColor: colors.white + 'bf',
  },
  badgeText: {
    color: colors.white,
  },
});
