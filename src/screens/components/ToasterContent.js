import React from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import RegularView from "./RegularView";
import Theme from "../../constants/Theme";
import { FlexAlign } from "../../constants/Enums";

const ToasterContent = props => {
  const { icon, text, iconColor } = props;
  return (
    <RegularView alignItems={FlexAlign.Center}>
      <Text style={styles.text}>{text}</Text>
      <Icon name={icon} size={50} style={{ color: iconColor }} />
    </RegularView>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: Theme.General.Text.FontBig,
    backgroundColor: Theme.Toaster.BackgroundColor,
    color: Theme.Toaster.color,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  }
});

ToasterContent.propTypes = {
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  text: PropTypes.string
};

export default ToasterContent;
