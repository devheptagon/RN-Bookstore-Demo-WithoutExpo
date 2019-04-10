import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import Focusable from '../hoc/Focusable'

export class RecentsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Focusable>
        <Text>Recents page not implemented yet!</Text>
      </Focusable>
    );
  }
}

export default RecentsScreen