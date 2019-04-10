import React from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight } from 'react-native'
import ProductListItem from './ProductListItem'
import { ProductListingTypes } from '../../../constants/Enums'
import BasketListItem from './BasketListItem'

export const ProductListRenderItem = props => {
    const { onPress, item, index, listingType } = props
    switch (listingType) {
        case ProductListingTypes.SearchResults:
            return (
                <TouchableHighlight onPress={onPress}>
                    <ProductListItem dataItem={item} rowIndex={index} />
                </TouchableHighlight>
            )
        case ProductListingTypes.Basket:
            return <BasketListItem dataItem={item} rowIndex={index} />
        default:
            return null
    }
}

ProductListRenderItem.propTypes = {  
    onPress: PropTypes.func, 
    item: PropTypes.object, 
    index: PropTypes.number, 
    listingType: PropTypes.number
}

export default ProductListRenderItem