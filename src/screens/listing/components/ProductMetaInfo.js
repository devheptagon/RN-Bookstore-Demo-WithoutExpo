import React from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet } from "react-native";
import Rating from "../../components/Rating";
import { formatMoney } from "../../../utils/helper";
import Theme from "../../../constants/Theme";

export const ProductMetaInfo = props => {
  const { volumeInfo, saleInfo, description, isbn } = props.dataItem;
  const { title, subtitle, authors, publishedDate, averageRating } = volumeInfo;
  const { listPrice } = saleInfo;
  const amount = listPrice ? listPrice.amount : 1;
  const { isDetailed } = props;
  return (
    <React.Fragment>
      <Text numberOfLines={isDetailed ? 5 : 1} style={styles.Title}>
        {title}
      </Text>
      <Text numberOfLines={isDetailed ? 5 : 1} style={styles.Subtitle}>
        {subtitle}
      </Text>
      <Text numberOfLines={isDetailed ? 5 : 1} style={styles.Author}>
        {authors && authors[0]} - {publishedDate}
      </Text>
      {isDetailed && (
        <React.Fragment>
          <Text style={styles.Description}>{description}</Text>
          <Text style={styles.Isbn}>
            {isbn && isbn.type + ": " + isbn.identifier}
          </Text>
        </React.Fragment>
      )}
      <Rating value={averageRating} />
      <Text style={styles.Amount}>{formatMoney(amount)}</Text>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: Theme.General.Text.FontBig,
    fontWeight: Theme.General.Text.FontBold
  },
  Subtitle: {
    fontSize: Theme.General.Text.FontRegular,
    color: Theme.ProductList.Item.AlternateTextColor1
  },
  Author: {
    fontSize: Theme.General.Text.FontSmall,
    color: Theme.ProductList.Item.AlternateTextColor2
  },
  Amount: {
    fontSize: Theme.General.Text.FontBig,
    fontWeight: Theme.General.Text.FontBold,
    color: Theme.General.Text.AmountColor
  },
  Description: {
    fontSize: Theme.General.Text.FontSmall
  },
  Isbn: {
    fontWeight: Theme.General.Text.FontBold
  }
});

ProductMetaInfo.propTypes = {
  volumeInfo: PropTypes.object,
  saleInfo: PropTypes.object,
  description: PropTypes.string,
  isbn: PropTypes.object
};

export default ProductMetaInfo;
