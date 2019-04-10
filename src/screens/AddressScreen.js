import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Focusable from "./hoc/Focusable";

export class AddressScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Focusable>
        <Text>Address page not implemented yet!</Text>
      </Focusable>
    );
  }
}

export default AddressScreen;
