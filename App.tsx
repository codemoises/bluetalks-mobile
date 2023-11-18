import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import { GlobalStyles } from '../my-app/src/styles/global-styles'
import { theme } from './src/styles/theme';

export default function App() {
  return (
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar backgroundColor="#0671E0" barStyle={'light-content'} />
          <Routes />
          <GlobalStyles />
        </NavigationContainer>
      </ThemeProvider>
  );
}
