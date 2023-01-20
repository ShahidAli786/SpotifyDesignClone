import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {colors, spacings, textStyles} from '../../constants/theme';

export default function SearchBox() {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.searchBox}>
      <Icon name="search" size={26} color={colors.gray} />
      <Text style={styles.searchText}>What do you want to listen to?</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    margin: spacings.l,
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingHorizontal: spacings.l,
    paddingVertical: spacings.l,
    borderRadius: 5,
    alignItems: 'center',
  },
  searchText: {
    ...textStyles.body,
    fontWeight: 'bold',
    color: colors.gray,
    paddingHorizontal: spacings.m,
  },
});
