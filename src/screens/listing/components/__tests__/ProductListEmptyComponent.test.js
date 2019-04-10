import React from 'react';
import {ProductListEmptyComponent} from '../ProductListEmptyComponent';
import renderer from 'react-test-renderer';

test('ProductListEmptyComponent renders correctly', () => {
  const tree = renderer.create(<ProductListEmptyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});