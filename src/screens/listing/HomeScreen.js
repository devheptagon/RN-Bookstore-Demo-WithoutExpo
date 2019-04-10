import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProductList from "./components/ProductList";
import {
  setMainNavigatorAction,
  setPageTitleAction
} from "../../redux/appActions";
import {
  setFilter,
  fetchPage,
  refresh
} from "../../services/repos/productRepo";
import FlexView from "../components/FlexView";
import { ProductListingTypes } from "../../constants/Enums";

export class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    const {
      mainNavigator,
      setMainNavigator,
      setPageTitle,
      navigation
    } = this.props;
    if (!mainNavigator && setMainNavigator) setMainNavigator(navigation);

    //fetch data with empty filter and page = 1
    setFilter("");

    this.focusListener = navigation.addListener("didFocus", () => {
      setPageTitle("");
    });
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  onScroll = async () => {
    // prevent initial triggers
    if (this.props.products.length > 0) {
      fetchPage(this.props.page + 1);
    }
  };

  onRefresh = async () => {
    refresh();
  };

  render() {
    const { products } = this.props;
    return (
      <FlexView>
        <ProductList
          listingType={ProductListingTypes.SearchResults}
          data={products}
          onScrollHandler={this.onScroll}
          onRefreshHandler={this.onRefresh}
        />
      </FlexView>
    );
  }
}

HomeScreen.propTypes = {
  mainNavigator: PropTypes.object,
  setMainNavigator: PropTypes.func,
  setPageTitle: PropTypes.func,
  navigation: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainNavigator: state.appReducer.mainNavigator,
    products: state.appReducer.products,
    page: state.appReducer.page
  };
};

const mapDispatchToProps = {
  setMainNavigator: setMainNavigatorAction,
  setPageTitle: setPageTitleAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
