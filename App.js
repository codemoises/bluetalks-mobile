import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import { GlobalStyles } from './src/styles/global-styles';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Navigation />
        <GlobalStyles />
      </NavigationContainer>
    </ThemeProvider>
  );
};
