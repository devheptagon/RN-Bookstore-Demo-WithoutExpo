import React from 'react';
import TabBarIcon from '../TabBarIcon';
import renderer from 'react-test-renderer';

test('FlexView renders correctly', () => {
  const tree = renderer.create(<TabBarIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});