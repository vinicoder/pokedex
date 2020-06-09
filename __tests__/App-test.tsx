import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

jest.mock('react-native-gesture-handler', () => null);
jest.mock('@react-native-community/async-storage', () => null);
jest.mock('@react-navigation/stack', () => null);

it('renders correctly', () => {
  renderer.create(<App />);
});
