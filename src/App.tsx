/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigation from './navigations/AppNavigation';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <AppNavigation />
    </>
  );
}
