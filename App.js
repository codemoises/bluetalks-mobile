import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import { GlobalStyles } from './src/styles/global-styles';
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar backgroundColor="#0671E0" barStyle={"light-content"} />
          <Routes />
          <GlobalStyles />
        </NavigationContainer>
      </ThemeProvider>
    </React.StrictMode>
  );
};
