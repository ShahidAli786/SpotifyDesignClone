import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {colors, spacings, textStyles} from '../../constants/theme';
import LibraryHeader from './LibraryHeader';
import HeaderFilter from '../../components/HeaderFilter';
import ArtistCard from '../../components/ArtistCard';
import {artists} from '../../constants/data';
import Animated from 'react-native-reanimated';

function FilterRow() {
  return (
    <View style={styles.filterRow}>
      <View style={styles.filterRowView}>
        <Icon
          style={styles.filterRowIcon}
          name="arrow-switch"
          color={colors.white}
          size={20}
        />
        <Text style={styles.filterRowText}>Most recent</Text>
      </View>
      <FeatherIcon
        style={styles.icon}
        name="list"
        // name="grid"
        color={colors.white}
        size={22}
      />
    </View>
  );
}

export default function YourLibrary() {
  return (
    <SafeAreaView style={styles.container}>
      <LibraryHeader />
      <Animated.ScrollView
        fadingEdgeLength={0}
        scrollEventThrottle={16}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll>
        <HeaderFilter bordered badges={['Playlists', 'Artists', 'Albums']} />
        <FilterRow />
        <View style={styles.gridListView}>
          {artists.map(({artist, addedAt}) => (
            <ArtistCard
              name={artist.data.profile.name}
              image={artist.data.visuals.avatarImage.sources[0].url}
              key={addedAt.isoString}
            />
          ))}
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlack,
  },
  filterRow: {
    flexDirection: 'row',
    padding: spacings.l,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterRowView: {
    flexDirection: 'row',
  },
  filterRowIcon: {
    transform: [{rotate: '90deg'}],
  },
  filterRowText: {
    fontSize: textStyles.body.fontSize - 2,
    color: colors.white,
    fontWeight: '500',
    paddingHorizontal: spacings.l,
  },
  icon: {
    alignSelf: 'flex-end',
  },
  gridListView: {
    padding: spacings.l,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-between',
  },
});
