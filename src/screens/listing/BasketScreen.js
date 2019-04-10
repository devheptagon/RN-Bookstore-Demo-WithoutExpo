import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Focusable from "../hoc/Focusable";
import RegularView from "../components/RegularView";
import FlexView from "../components/FlexView";
import ProductList from "./components/ProductList";
import { ProductListingTypes, Pages, FlexAlign } from "../../constants/Enums";
import NextButton from "../components/NextButton";

export class BasketScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    let { basket, mainNavigator } = this.props;
    if (basket && basket.length)
      basket.sort((item1, item2) => (item1.id > item2.id ? 1 : -1));
    return (
      <Focusable>
        <FlexView>
          {Boolean(basket && basket.length) && (
            <RegularView
              alignItems={FlexAlign.FlexEnd}
              justifyContent={FlexAlign.FlexEnd}
            >
              <NextButton navigator={mainNavigator} pageName={Pages.Address} />
            </RegularView>
          )}
          <ProductList
            listingType={ProductListingTypes.Basket}
            data={basket}
            onScrollHandler={() => {}}
            onRefreshHandler={() => {}}
          />
        </FlexView>
      </Focusable>
    );
  }
}

BasketScreen.propTypes = {
  basket: PropTypes.array
};

const mapStateToProps = state => {
  return {
    mainNavigator: state.appReducer.mainNavigator,
    basket: state.appReducer.basket
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketScreen);
