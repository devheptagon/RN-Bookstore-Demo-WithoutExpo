import React from 'react';
import { FavouritesScreen } from '../FavouritesScreen';
import renderer from 'react-test-renderer';
import { wrapWithMockReduxAndNavigator } from '../../../utils/testHelper'

test('FavouritesScreen renders correctly', () => {
  const component = wrapWithMockReduxAndNavigator(FavouritesScreen)
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});