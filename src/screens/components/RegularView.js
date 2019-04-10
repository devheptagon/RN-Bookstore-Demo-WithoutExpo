import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { flattenArray } from "../../utils/helper";
import { FlexAlign } from "../../constants/Enums";

const RegularView = ({
  children,
  style,
  justifyContent,
  alignItems,
  centerAll,
  ...rest
}) => {
  let styleValue = Array.isArray(style) ? flattenArray(style) : { ...style };
  if (justifyContent) {
    styleValue.justifyContent = justifyContent;
  }
  if (alignItems) {
    styleValue.alignItems = alignItems;
  }
  if (centerAll) {
    styleValue = {
      ...styleValue,
      justifyContent: FlexAlign.Center,
      alignItems: FlexAlign.Center
    };
  }

  return (
    <View style={styleValue} {...rest}>
      {children}
    </View>
  );
};

RegularView.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  centerAll: PropTypes.bool
};

export default RegularView;
