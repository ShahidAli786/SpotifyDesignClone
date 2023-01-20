import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, spacings, textStyles} from '../../constants/theme';

function Row({title}) {
  return (
    <View style={styles.row}>
      <Icon name="checkmark" size={30} color={colors.green} />
      <Text style={styles.rowText}>{title}</Text>
    </View>
  );
}

function PremiumCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Why join Premium?</Text>
      <View style={styles.hr} />
      <Row title="Download to listen offline without wifi" />
      <Row title="Music without ad interruption" />
      <Row title="2x higher sound quality than our free plan" />
      <Row title="Play songs in order, with unlimited skips" />
      <Row title="Cancel monthly plans online anytime" />
    </View>
  );
}

export default function ListHeader() {
  return (
    <View style={styles.listHeader}>
      <View style={styles.listHeaderItem}>
        <View style={styles.badge}>
          <View style={styles.dot} />
          <Text style={styles.badgeText}>Limited Time Offer</Text>
        </View>
        <Text style={styles.title}>
          Get 3 months of Premium Students for ₹0
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Get 3 months Free</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        Offer available only to students at accredited higher education
        institutions who haven't already tried Premium. ₹59/month after. Terms
        and conditions apply. Offer ends 11/09/22.
      </Text>
      <View style={styles.listHeaderItem}>
        <PremiumCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listHeader: {
    paddingTop: spacings.xxl + 140,
  },
  listHeaderItem: {
    paddingHorizontal: spacings.l,
    paddingVertical: spacings.l,
  },
  badge: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: 200,
    alignItems: 'center',
  },
  badgeText: {
    ...textStyles.small,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.white,
  },
  dot: {
    backgroundColor: 'blue',
    height: 15,
    width: 15,
    borderRadius: 15,
    marginRight: spacings.m,
  },
  title: {
    fontSize: textStyles.title.fontSize + 6.5,
    fontWeight: 'bold',
    color: colors.white,
    paddingVertical: spacings.l,
  },
  button: {
    width: '100%',
    backgroundColor: colors.white,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    ...textStyles.body,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.darkBlack,
  },
  text: {
    color: colors.white,
    fontSize: 12,
    lineHeight: 18,
    paddingVertical: spacings.m,
  },
  card: {
    // height: 100,
    backgroundColor: colors.lightBlack,
    borderRadius: 5,
    paddingBottom: 40,
  },
  cardTitle: {
    color: colors.white,
    ...textStyles.title,
    fontWeight: 'bold',
    paddingHorizontal: spacings.l,
    paddingTop: spacings.xxl,
    paddingBottom: spacings.l,
  },
  hr: {
    height: 0.5,
    backgroundColor: colors.gray,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacings.l,
    paddingBottom: 0,
  },
  rowText: {
    color: colors.white,
    paddingHorizontal: spacings.m,
    fontWeight: '500',
  },
});
