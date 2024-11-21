import 'react-native-gesture-handler';
// import './gesture-handler';
// Only import react-native-gesture-handler on native platforms

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { Navigation } from './presentation/navigation/Navigation';
import { HomeScreen } from './presentation/screens/home/HomeScreen';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <Text>HomeScreen</Text> */}
      <Navigation />
    </NavigationContainer>
  )
}


