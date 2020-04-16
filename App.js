import React from 'react';
import { StyleSheet } from 'react-native';
import {StatusBar} from 'react-native'

import Main from './src/pages/Main'

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
      <Main />
    </>
  );
}
