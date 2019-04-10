import React from 'react';
import BasketStatusIcon from '../BasketStatusIcon';
import renderer from 'react-test-renderer';

test('BasketStatusIcon renders correctly', () => {
  const tree = renderer.create(<BasketStatusIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});