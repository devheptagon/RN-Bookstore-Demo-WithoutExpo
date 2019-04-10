import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, StyleSheet, TouchableHighlight } from "react-native";
import FlexView from "./FlexView";
import Theme from "../../constants/Theme";
import { FlexDirections, IconNames } from "../../constants/Enums";
import Texts from "../../constants/Texts";

const NextButton = props => {
  const { navigator, pageName } = props;
  return (
    <TouchableHighlight onPress={() => navigator.navigate(pageName)}>
      <FlexView
        style={styles.Wrapper}
        flex={0}
        flexDirection={FlexDirections.Row}
        centerAll
      >
        <Text style={styles.TitleText}> {Texts.ProceedToAddress} </Text>
        <Icon name={IconNames.ChevronRight} size={15} style={styles.Arrow} />
      </FlexView>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    margin: 10,
    marginBottom: 20
  },
  TitleText: {
    color: Theme.General.Link.Color,
    fontSize: Theme.General.Text.FontBig,
    fontWeight: Theme.General.Text.FontBold
  },
  Arrow: {
    marginRight: 5,
    marginTop: 5,
    color: Theme.General.Link.Color
  }
});

NextButton.propTypes = {
  navigator: PropTypes.object,
  pageName: PropTypes.string
};

export default NextButton;
