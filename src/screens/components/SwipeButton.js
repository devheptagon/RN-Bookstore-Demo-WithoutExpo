import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import RegularView from "../components/RegularView";

const SwipeButton = props => {
  const { isVisible, onPress, text, icon, iconColor, backgroundColor } = props;
  return isVisible ? (
    <TouchableOpacity onPress={onPress}>
      <RegularView centerAll style={[styles.Container, { backgroundColor }]}>
        <Text style={styles.Text}>{text}</Text>
        <Icon name={icon} size={25} style={{ color: iconColor }} />
      </RegularView>
    </TouchableOpacity>
  ) : null;
};

const styles = StyleSheet.create({
  Container: {
    height: "100%",
    padding: 25
  },
  Text: {
    marginBottom: 5
  }
});

SwipeButton.propTypes = {
  isVisible: PropTypes.bool,
  onPress: PropTypes.func,
  text: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default SwipeButton;
