import React from 'react';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { MyTheme } from './src/theme/theme';


const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
