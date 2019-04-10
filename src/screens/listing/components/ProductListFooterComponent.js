import React from "react";
import PropTypes from "prop-types";
import { PacmanIndicator } from "react-native-indicators";
import FlexView from "../../components/FlexView";
import Theme from "../../../constants/Theme";

export const ProductListFooterComponent = props => {
  return (
    <FlexView centerAll>
      {props.isVisible ? (
        <PacmanIndicator color={Theme.Loading.PacmanColor} />
      ) : null}
    </FlexView>
  );
};

ProductListFooterComponent.propTypes = {
  isVisible: PropTypes.bool
};

export default ProductListFooterComponent;
