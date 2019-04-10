import React from 'react'
import PropTypes from 'prop-types'
import Focusable from '../hoc/Focusable'
import ProductInfo from '../listing/components/ProductInfo'

export class ProductDetailScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam('data', {});
    return (
      <Focusable>
        <ProductInfo dataItem={data} isDetailed={true} />
      </Focusable>
    );
  }
}

ProductDetailScreen.propTypes = {  
  navigation: PropTypes.object  
}

export default ProductDetailScreen