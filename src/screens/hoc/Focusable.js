import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavigationEvents } from "react-navigation";
import { setPageTitleAction } from "../../redux/appActions";

export class Focusable extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { setPageTitle } = this.props;
    return (
      <React.Fragment>
        <NavigationEvents
          onDidFocus={payload => setPageTitle(payload.lastState.routeName)}
        />
        {this.props.children}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  setPageTitle: setPageTitleAction
};

export default connect(
  null,
  mapDispatchToProps
)(Focusable);
