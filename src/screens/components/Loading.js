import React from "react";
import PropTypes from "prop-types";
import { BallIndicator } from "react-native-indicators";
import ModalView from "../components/ModalView";
import FlexView from "../components/FlexView";
import Theme from "../../constants/Theme";

const Loading = props => {
  return props.isVisible ? (
    <ModalView>
      <FlexView centerAll>
        <BallIndicator color={Theme.Loading.SpinnerColor} />
      </FlexView>
    </ModalView>
  ) : null;
};

Loading.propTypes = {
  isVisible: PropTypes.bool
};

export default Loading;
