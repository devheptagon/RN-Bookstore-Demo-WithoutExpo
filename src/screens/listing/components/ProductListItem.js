import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import ProductInfo from "./ProductInfo";
import FlexView from "../../components/FlexView";
import Theme from "../../../constants/Theme";
import { FlexDirections } from "../../../constants/Enums";

export class ProductListItem extends React.PureComponent {
  render() {
    const { dataItem } = this.props;
    return (
      <FlexView flexDirection={FlexDirections.Row} style={styles.Wrapper}>
        <ProductInfo dataItem={dataItem} />
      </FlexView>
    );
  }
}

const styles = StyleSheet.create({
  Wrapper: {
    height: 120,
    borderTopWidth: Theme.General.Border.Width,
    borderBottomWidth: Theme.General.Border.Width,
    borderTopColor: Theme.ProductList.Item.BorderColor,
    borderBottomColor: Theme.ProductList.Item.BorderColor,
    backgroundColor: Theme.ProductList.Item.BackgroundColor
  }
});

ProductListItem.propTypes = {
  dataItem: PropTypes.object
};

export default ProductListItem;
