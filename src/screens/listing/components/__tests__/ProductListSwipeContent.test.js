import React from 'react';
import {ProductListSwipeContent} from '../ProductListSwipeContent';
import renderer from 'react-test-renderer';

test('ProductListSwipeContent renders correctly', () => {
  const tree = renderer.create(<ProductListSwipeContent />).toJSON();
  expect(tree).toMatchSnapshot();
});