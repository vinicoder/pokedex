import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="rgba(255, 255, 255, 0)"
      translucent
    />
    <Routes />
  </NavigationContainer>
);

export default App;
