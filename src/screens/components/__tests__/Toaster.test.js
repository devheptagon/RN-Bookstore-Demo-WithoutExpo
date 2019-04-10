import React from 'react';
import Toaster from '../Toaster';
import renderer from 'react-test-renderer';

test('FlexView renders correctly', () => {
  const tree = renderer.create(<Toaster />).toJSON();
  expect(tree).toMatchSnapshot();
});