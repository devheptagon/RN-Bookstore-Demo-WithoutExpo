import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { StyleSheet, TouchableHighlight } from "react-native";
import { Badge } from "react-native-elements";
import FlexView from "../../components/RegularView";
import Theme from "../../../constants/Theme";
import { FlexDirections, IconNames } from "../../../constants/Enums";

const BasketStatusIcon = props => (
  <TouchableHighlight onPress={props.onPress}>
    <FlexView flexDirection={FlexDirections.Row}>
      {props.itemCount ? (
        <Badge
          value={props.itemCount}
          status="error"
          badgeStyle={styles.Badge}
        />
      ) : null}
      <Icon name={IconNames.BasketStatus} size={25} style={styles.BasketIcon} />
    </FlexView>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  BasketIcon: {
    color: Theme.HeaderBar.IconColor,
    marginLeft: 5,
    zIndex: 1
  },
  Badge: {
    marginRight: -40,
    marginTop: 3,
    zIndex: 2
  }
});

BasketStatusIcon.propTypes = {
  itemCount: PropTypes.number
};

export default BasketStatusIcon;
