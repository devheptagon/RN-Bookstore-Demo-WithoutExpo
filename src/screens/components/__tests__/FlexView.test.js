import React from 'react';
import FlexView from '../FlexView';
import renderer from 'react-test-renderer';

test('FlexView renders correctly', () => {
  const tree = renderer.create(<FlexView />).toJSON();
  expect(tree).toMatchSnapshot();
});