import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {colors, spacings, textStyles} from '../../constants/theme';

export default function LibraryHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.userView}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/88.jpg'}}
          style={styles.avatar}
        />
        <Text style={styles.headerTitle}>Your Library</Text>
      </View>
      <View style={styles.userView}>
        <Icon name="search" color={colors.white} size={30} />
        <Icon
          style={styles.plusIcon}
          name="plus"
          color={colors.white}
          size={35}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacings.l,
    paddingVertical: spacings.xl,
    flexDirection: 'row',
    backgroundColor: colors.darkBlack,
    justifyContent: 'space-between',
  },
  userView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  headerTitle: {
    ...textStyles.title,
    color: colors.white,
    fontWeight: 'bold',
    paddingHorizontal: spacings.l,
  },
  plusIcon: {marginLeft: 20},
});
