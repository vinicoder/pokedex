import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

jest.mock('react-native-gesture-handler', () => {});
jest.mock('@react-native-community/async-storage', () => {});
jest.mock('@react-navigation/stack', () => {});

it('renders correctly', () => {
  renderer.create(<App />);
});
