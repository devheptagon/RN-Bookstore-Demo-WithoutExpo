import React from 'react';
import {ProductListFooterComponent} from '../ProductListFooterComponent';
import renderer from 'react-test-renderer';

test('ProductListFooterComponent renders correctly', () => {
  const tree = renderer.create(<ProductListFooterComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});