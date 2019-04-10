import React from 'react';
import { Text } from 'react-native';
import ModalView from '../ModalView';
import renderer from 'react-test-renderer';

test('ModalView renders correctly', () => {
  const tree = renderer.create(<ModalView><Text>modal content</Text></ModalView>).toJSON();
  expect(tree).toMatchSnapshot();
});