import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, ScrollView } from "react-native";
import FlexView from "../../components/FlexView";
import ProductImage from "./ProductImage";
import ProductMetaInfo from "./ProductMetaInfo";
import { FlexDirections } from "../../../constants/Enums";

export const ProductInfo = props => {
  const { volumeInfo } = props.dataItem;
  const imageLinks = volumeInfo ? volumeInfo.imageLinks : [];
  return (
    <FlexView
      flexDirection={
        props.isDetailed ? FlexDirections.Column : FlexDirections.Row
      }
    >
      <FlexView>
        <ProductImage
          calculateActualSize={props.isDetailed}
          imageLinks={imageLinks}
        />
      </FlexView>
      <FlexView flex={props.isDetailed ? 1 : 3} style={styles.InfoField}>
        <ScrollView>
          <ProductMetaInfo
            dataItem={props.dataItem}
            isDetailed={props.isDetailed}
          />
        </ScrollView>
      </FlexView>
    </FlexView>
  );
};

const styles = StyleSheet.create({
  InfoField: {
    padding: 10
  }
});

ProductInfo.propTypes = {
  dataItem: PropTypes.object
};

export default ProductInfo;
