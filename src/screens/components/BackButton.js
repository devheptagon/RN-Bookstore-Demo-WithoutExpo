import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, StyleSheet, TouchableHighlight } from "react-native";
import FlexView from "./FlexView";
import Theme from "../../constants/Theme";
import { FlexDirections, IconNames } from "../../constants/Enums";
import Texts from "../../constants/Texts";

const BackButton = props => (
  <TouchableHighlight onPress={() => props.navigator.goBack(null)}>
    <FlexView flex={0} flexDirection={FlexDirections.Row} centerAll>
      <Icon name={IconNames.ChevronLeft} size={20} style={styles.Arrow} />
      <Text style={styles.TitleText}> {Texts.Back} </Text>
    </FlexView>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  TitleText: {
    color: Theme.HeaderBar.TextColor,
    fontSize: Theme.General.Text.FontXBig,
    fontWeight: Theme.General.Text.FontBold
  },
  Arrow: {
    marginRight: 5,
    marginTop: 5,
    color: Theme.HeaderBar.TextColor
  }
});

BackButton.propTypes = {
  navigator: PropTypes.object
};

export default BackButton;
