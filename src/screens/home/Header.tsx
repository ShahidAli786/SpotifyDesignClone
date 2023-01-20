import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors, spacings, textStyles} from '../../constants/theme';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Good evening</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons
          name="md-notifications-outline"
          color={colors.white}
          size={30}
        />
        <Ionicons name="md-time-outline" color={colors.white} size={30} />
        <Ionicons name="md-settings-outline" color={colors.white} size={30} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacings.l,
  },
  textContainer: {
    flex: 6.2,
  },
  iconContainer: {
    flex: 3.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    ...textStyles.title,
    color: colors.white,
    fontWeight: 'bold',
  },
});
