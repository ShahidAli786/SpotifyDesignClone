import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/home/Home';
import YourLibrary from '../screens/yourlibrary/YourLibrary';
import Premium from '../screens/premium/Premium';
import {colors} from '../constants/theme';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Search from '../screens/search/Search';

const Tab = createBottomTabNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: colors.white,
    background: 'rgb(242, 242, 242)',
    card: colors.darkBlack,
    text: colors.white,
    border: colors.darkBlack,
    notification: 'rgb(255, 69, 58)',
  },
};

export default function AppNavigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {position: 'absolute'},
          tabBarBackground: () => (
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 0, y: 1}}
              colors={[colors.black + 'bf', colors.darkBlack]}
              style={StyleSheet.absoluteFill}
            />
          ),
        }}>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused, size}) => (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                color={color}
                size={size}
              />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused, size}) => (
              <Ionicons
                name={focused ? 'search' : 'search-outline'}
                color={color}
                size={size}
              />
            ),
          }}
          name="Search"
          component={Search}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused, size}) => (
              <Ionicons
                name={focused ? 'library' : 'library-outline'}
                color={color}
                size={size}
              />
            ),
          }}
          name="Your Library"
          component={YourLibrary}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused, size}) => (
              <Ionicons
                name={focused ? 'speedometer' : 'speedometer-outline'}
                color={color}
                size={size}
              />
            ),
          }}
          name="Premium"
          component={Premium}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
