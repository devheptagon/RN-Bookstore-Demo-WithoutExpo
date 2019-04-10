import React from 'react';
import RegularView from '../RegularView';
import renderer from 'react-test-renderer';

test('FlexView renders correctly', () => {
  const tree = renderer.create(<RegularView />).toJSON();
  expect(tree).toMatchSnapshot();
});