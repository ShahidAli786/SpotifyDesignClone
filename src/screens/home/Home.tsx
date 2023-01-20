import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import React from 'react';
import {colors, spacings} from '../../constants/theme';
import Header from './Header';

import SmallCard from '../../components/SmallCard';
import TitleText from '../../components/TitleText';
import HorizonalCard from '../../components/HorizonalCard';
import SingleSingerCard from '../../components/SingleSingerCard';
import HeaderFilter from '../../components/HeaderFilter';

const YOULIKE = [
  {
    imageUri:
      'https://i.scdn.co/image/ab67706f00000003fbeeccdab429f7c9632d7bcf',
    singers: 'Vishal-Shekhar, Arijit Singh, Javed Ali, A.R.Rehman, Tulsi Kumar',
  },

  {
    imageUri:
      'https://i.scdn.co/image/ab67706f00000003374702be458b4953cc1f20c7',
    singers: 'Pritam, Armaan Malik,  A.R. Rahman,  Atif Aslam',
  },

  {
    imageUri:
      'https://i.scdn.co/image/ab67706f00000003f5ce80783ec570bb0c165def',
    singers: 'Vishal-Shekhar, Arijit Singh, Javed Ali, A.R.Rehman, Tulsi Kumar',
  },

  {
    imageUri:
      'https://i.scdn.co/image/ab67706f000000038fc264b127557bdea3ea1961',
    singers: 'Pritam, Armaan Malik,  A.R. Rahman,  Atif Aslam',
  },

  {
    imageUri:
      'https://i.scdn.co/image/ab67706f000000033b3f430e21811842f91128da',
    singers: 'Pritam, Armaan Malik,  A.R. Rahman,  Atif Aslam',
  },

  {
    imageUri:
      'https://i.scdn.co/image/ab67706f00000003e7b93f41230fd6c6a1280e72',
    singers: 'Rahat Fateh Ali Khan, Neha Kakkar, A.R. Rahman,  Atif Aslam',
  },

  {
    imageUri:
      'https://i.scdn.co/image/ab67706f00000003c91b7660ec4de1acd8b0229c',
    singers: 'Pritam, Armaan Malik,  A.R. Rahman,  Atif Aslam',
  },

  {
    imageUri:
      'https://i.scdn.co/image/ab67706f0000000343bdb41aaf6ff3e85f6a2132',
    singers: 'Shubh, Sidhu Moose Wala, Karan Aujla,  AP Nauar',
  },

  {
    imageUri:
      'https://i.scdn.co/image/ab67706f000000032347c0ff3b60d1eb50c72410',
    singers: 'Juice WRLD, A.R. Rahman, BTS, Javed Ali',
  },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[1]}>
        <Header />
        <HeaderFilter badges={['Music', 'Podcast & Shows']} />
        <View style={styles.cardGrid}>
          <SmallCard
            title="Hot Hits Hindi"
            image="https://i.scdn.co/image/ab67706f000000033676fcd91c7f3e300ccd6deb"
          />
          <SmallCard
            title="Darshan  Raval"
            image="https://cdn.celpox.com/bby_uploads/celeb/1f49215042abe27cf2c1d7c5fabbff18.jpg"
          />
        </View>
        <View style={{...styles.cardGrid, paddingTop: 0}}>
          <SmallCard
            title="Hindi Workout"
            image="https://i.scdn.co/image/ab67706c0000bebb752d669f259afceba7acbf03"
          />
          <SmallCard
            title="New In Dance"
            image="https://i.scdn.co/image/ab67706f00000003d8e81bd00dcab0cd070aad89"
          />
        </View>
        <TitleText title="More of what you like" />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{paddingHorizontal: spacings.l}}>
          {YOULIKE.map(value => (
            <HorizonalCard key={value.imageUri} {...value} />
          ))}
        </ScrollView>
        <SingleSingerCard
          singer="Darshan Raval"
          singerImage="https://cdn.celpox.com/bby_uploads/celeb/1f49215042abe27cf2c1d7c5fabbff18.jpg"
        />

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{padding: spacings.l}}>
          {YOULIKE.reverse().map(value => (
            <HorizonalCard key={value.imageUri} {...value} />
          ))}
        </ScrollView>
        <SingleSingerCard
          singer="Pritam"
          singerImage="https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca"
        />
        <TitleText title="Recently Played" />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{paddingHorizontal: spacings.l}}>
          {YOULIKE.reverse().map(value => (
            <HorizonalCard key={value.imageUri} {...value} />
          ))}
        </ScrollView>
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
  cardGrid: {
    padding: spacings.l,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spacer: {
    height: 100,
  },
});
