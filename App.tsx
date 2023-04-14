import React from 'react';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';

const MyTheme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#f29d64',
    background: '#344050',
    // text: 'white',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
