/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './src/Main/Main/MainPage';
import BlindsView from './src/Blinds/View/BlindsView';

const Stack = createStackNavigator();

const ParentComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={MainPage} options={{title: "Main Page", headerShown: false}} /> 
        <Stack.Screen name='View' component={BlindsView} options={{title:"Blinds", headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ParentComponent;
