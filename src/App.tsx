import React from 'react';
import { StatusBar } from 'react-native';

import Home from './pages/Home';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" translucent />
    <Home />
  </>
);

export default App;
