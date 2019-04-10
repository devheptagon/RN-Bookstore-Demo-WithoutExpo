import React from 'react';
import SettingsScreen from '../SettingsScreen';
import renderer from 'react-test-renderer';
import { wrapWithMockReduxAndNavigator } from '../../utils/testHelper'

test('SettingsScreen renders correctly', () => {
  const component = wrapWithMockReduxAndNavigator(SettingsScreen)
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});