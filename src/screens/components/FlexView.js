import React from "react";
import PropTypes from "prop-types";
import RegularView from "./RegularView";
import { flattenArray } from "../../utils/helper";
import { FlexDirections } from "../../constants/Enums";

const FlexView = ({ children, style, flex, flexDirection, ...rest }) => {
  const flexValue = flex || (flex === 0 ? 0 : 1);
  const flexDirectionValue = flexDirection || FlexDirections.Column;
  const flexStyle = { flex: flexValue, flexDirection: flexDirectionValue };
  //style might be array of objects
  let flatStyle = Array.isArray(style) ? flattenArray(style) : style;
  let styleValue = { ...flatStyle, ...flexStyle } || flexStyle;

  return (
    <RegularView style={styleValue} {...rest}>
      {children}
    </RegularView>
  );
};

FlexView.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
  flex: PropTypes.number,
  flexDirection: PropTypes.string
};

export default FlexView;
