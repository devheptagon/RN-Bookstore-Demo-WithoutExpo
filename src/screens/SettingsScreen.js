import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Focusable from './hoc/Focusable'

export class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Focusable>
        <Text>Settings page not implemented yet!</Text>
      </Focusable>
    );
  }
}

export default SettingsScreen