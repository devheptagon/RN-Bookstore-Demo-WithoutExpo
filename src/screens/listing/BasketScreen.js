import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Focusable from '../hoc/Focusable'
import FlexView from '../components/FlexView'
import ProductList from './components/ProductList'
import { ProductListingTypes } from '../../constants/Enums'

export class BasketScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    let { basket } = this.props    
    if (basket && basket.length) basket.sort((item1, item2) => item1.id > item2.id ? 1 : -1)
    return (
      <Focusable>
        <FlexView>  
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
}

const mapStateToProps = (state) => {
  return {
    mainNavigator: state.appReducer.mainNavigator,    
    basket: state.appReducer.basket
  }
}

const mapDispatchToProps = ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(BasketScreen)
