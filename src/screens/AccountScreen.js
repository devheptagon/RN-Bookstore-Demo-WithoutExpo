import React from "react";
import { StyleSheet, Text } from "react-native";
import Focusable from "./hoc/Focusable";

export class AccountScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Focusable>
        <Text>Accounts page not implemented yet!</Text>
      </Focusable>
    );
  }
}

export default AccountScreen;
