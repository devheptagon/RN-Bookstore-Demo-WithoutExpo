import React from "react";
import PropTypes from "prop-types";
import StarRating from "react-native-star-rating";
import { StyleSheet } from "react-native";
import Theme from "../../constants/Theme";

class Rating extends React.PureComponent {
  render() {
    return (
      <StarRating
        disabled={false}
        maxStars={5}
        rating={this.props.value || 3}
        starSize={13}
        fullStarColor={Theme.ProductList.Item.RatingStarColor}
        containerStyle={styles.ContainerStyle}
      />
    );
  }
}

const styles = StyleSheet.create({
  ContainerStyle: {
    width: "30%",
    marginTop: 5,
    marginBottom: 5
  }
});

Rating.propTypes = {
  value: PropTypes.number
};

export default Rating;
