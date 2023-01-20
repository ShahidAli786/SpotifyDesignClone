import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {colors, spacings, textStyles} from '../../constants/theme';
import SearchBox from './SearchBox';
import DefaultCard from './DefaultCard';
import {GENRE_DATA} from './data';

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[1]}>
        <Text style={styles.title}>Search</Text>
        <View style={styles.searchBoxContainer}>
          <SearchBox />
        </View>
        {GENRE_DATA.map(value => (
          <View>
            <Text style={styles.subtitle}>{value.title}</Text>
            <View style={styles.gridView}>
              {value.details.map(({subtitle, color, url}) => (
                <DefaultCard title={subtitle} color={color} image={url} />
              ))}
            </View>
          </View>
        ))}
        <View style={styles.spacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlack,
  },
  searchBoxContainer: {
    backgroundColor: colors.darkBlack,
  },
  title: {
    ...textStyles.title,
    color: colors.white,
    fontWeight: 'bold',
    paddingHorizontal: spacings.l,
    paddingVertical: spacings.xl,
  },
  subtitle: {
    ...textStyles.body,
    color: colors.white,
    fontWeight: 'bold',
    paddingHorizontal: spacings.l,
    paddingTop: spacings.l,
  },
  gridView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacings.l,
    flexWrap: 'wrap',
    flex: 1,
  },
  spacer: {
    height: 100,
  },
});
