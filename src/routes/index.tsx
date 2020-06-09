import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Detail from '../pages/Detail';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#FFFFFF',
      },
    }}
  >
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen name="detail" component={Detail} />
  </Stack.Navigator>
);

export default Routes;
