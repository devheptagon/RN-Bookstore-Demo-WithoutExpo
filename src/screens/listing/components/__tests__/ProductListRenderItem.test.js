import React from 'react';
import {ProductListRenderItem} from '../ProductListRenderItem';
import renderer from 'react-test-renderer';

test('ProductListRenderItem renders correctly', () => {
  const tree = renderer.create(<ProductListRenderItem />).toJSON();
  expect(tree).toMatchSnapshot();
});