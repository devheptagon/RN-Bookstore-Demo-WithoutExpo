import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Platform } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import FlexView from "../../components/FlexView";
import Toaster from "../../components/Toaster";
import Loading from "../../components/Loading";
import ToasterContent from "../../components/ToasterContent";
import ProductListRenderItem from "./ProductListRenderItem";
import ProductListEmptyComponent from "./ProductListEmptyComponent";
import ProductListFooterComponent from "./ProductListFooterComponent";
import ProductListSwipeContent from "./ProductListSwipeContent";
import {
  ProductListingTypes,
  Pages,
  IconNames
} from "../../../constants/Enums";
import { addItem as addToBasketInStore } from "../../../services/repos/basketRepo";
import Texts from "../../../constants/Texts";
import Theme from "../../../constants/Theme";

export class ProductList extends React.Component {
  state = {
    selectedItem: ""
  };

  constructor(props) {
    super(props);
    this.buildToasterRefs();
  }

  selectItemInTheList = id => {
    const { data } = this.props;
    const selected = data.filter(f => f.id === id);
    if (selected && selected.length)
      this.setState({ selectedItem: selected[0] });
  };

  showDetailScreen = selectedRowData => {
    this.props.mainNavigator.navigate(Pages.ProductDetail, {
      data: selectedRowData
    });
  };

  addToBasket = () => {
    addToBasketInStore(this.state.selectedItem);
    this.toastAddToBasket.current.show(
      <ToasterContent
        text={Texts.ToasterAddBasketText}
        icon={IconNames.BasketLoaded}
        iconColor={Theme.Toaster.Icon1Color}
      />
    );
  };

  showFavouriteToaster = () =>
    this.toastAddToFavourites.current.show(
      <ToasterContent
        text={Texts.ToasterAddFavouritesText}
        icon={IconNames.Heart}
        iconColor={Theme.Toaster.Icon2Color}
      />
    );

  showUnFavouriteToaster = () =>
    this.toastDeleteFromFavourites.current.show(
      <ToasterContent
        text={Texts.ToasterDeleteFromFavouritesText}
        icon={IconNames.Heart}
        iconColor={Theme.Toaster.Icon3Color}
      />
    );

  buildToasterHandlers = () => {
    let handlers = {};
    const { listingType } = this.props;
    const { SearchResults, Favourites } = ProductListingTypes;

    if (listingType === SearchResults) handlers.addToBasket = this.addToBasket;
    if (listingType === SearchResults)
      handlers.showFavouriteToaster = this.showFavouriteToaster;
    if (listingType === Favourites)
      handlers.showUnFavouriteToaster = this.showUnFavouriteToaster;

    return handlers;
  };

  renderToasters = () => {
    const { listingType } = this.props;
    const { SearchResults, Favourites } = ProductListingTypes;
    return (
      <React.Fragment>
        {listingType === SearchResults && (
          <Toaster ref={this.toastAddToBasket} />
        )}
        {listingType === SearchResults && (
          <Toaster ref={this.toastAddToFavourites} />
        )}
        {listingType === Favourites && (
          <Toaster ref={this.toastDeleteFromFavourites} />
        )}
      </React.Fragment>
    );
  };

  buildToasterRefs = () => {
    const { listingType } = this.props;
    const { SearchResults, Favourites } = ProductListingTypes;
    if (listingType === SearchResults)
      this.toastAddToBasket = React.createRef();
    if (listingType === SearchResults)
      this.toastAddToFavourites = React.createRef();
    if (listingType === Favourites)
      this.toastDeleteFromFavourites = React.createRef();
  };

  render() {
    const {
      isLoading,
      isRefreshing,
      data,
      onScrollHandler,
      onRefreshHandler,
      listingType
    } = this.props;
    const toasterHandlers = this.buildToasterHandlers();
    const swipeButtonCount = Object.keys(toasterHandlers).length;

    return (
      <FlexView>
        {this.renderToasters()}
        <SwipeListView
          useFlatList
          data={data}
          renderItem={({ item, index }) => (
            <ProductListRenderItem
              item={item}
              index={index}
              listingType={listingType}
              onPress={() => this.showDetailScreen(item)}
            />
          )}
          keyExtractor={(item, index) => item.id}
          ListEmptyComponent={
            <ProductListEmptyComponent listingType={listingType} />
          }
          ListFooterComponent={
            <ProductListFooterComponent isVisible={isLoading} />
          }
          onEndReached={onScrollHandler}
          onEndReachedThreshold={0.9}
          onRefresh={onRefreshHandler}
          refreshing={isRefreshing || false}
          renderHiddenItem={(data, rowMap) => (
            <ProductListSwipeContent
              listingType={listingType}
              {...toasterHandlers}
            />
          )}
          recalculateHiddenLayout={false}
          leftOpenValue={0}
          rightOpenValue={swipeButtonCount * -75}
          stopRightSwipe={swipeButtonCount * -75}
          closeOnScroll={true}
          onRowOpen={rowKey => this.selectItemInTheList(rowKey)}
          disableLeftSwipe={swipeButtonCount === 0}
          disableRightSwipe={true}
          closeOnRowPress={true}
          closeOnRowBeginSwipe={true}
          initialListSize={6}
        />

        <Loading isVisible={isLoading} />
      </FlexView>
    );
  }
}

ProductList.propTypes = {
  listingType: PropTypes.number
};

const mapStateToProps = state => {
  return {
    isLoading: state.appReducer.isLoading,
    isRefreshing: state.appReducer.isRefreshing,
    mainNavigator: state.appReducer.mainNavigator
  };
};

export default connect(mapStateToProps)(ProductList);
