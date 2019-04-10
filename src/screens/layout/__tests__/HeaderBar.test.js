import React from 'react';
import { HeaderBar } from '../HeaderBar';
import renderer from 'react-test-renderer';
import { wrapWithMockReduxAndNavigator } from '../../../utils/testHelper'

test('HeaderBar renders correctly', () => {
  const component = wrapWithMockReduxAndNavigator(HeaderBar)
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});