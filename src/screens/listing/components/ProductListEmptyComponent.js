import React from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet } from 'react-native'
import Layout from '../../../constants/Layout'
import FlexView from '../../components/FlexView'
import { ProductListingTypes } from '../../../constants/Enums'
import Texts from '../../../constants/Texts'

export const ProductListEmptyComponent = props => {
    return <FlexView centerAll style={styles.Wrapper}>
        <Text>
        { 
            props.listingType === ProductListingTypes.Basket
                ? Texts.EmptyBasketText
                : Texts.EmptyListText
        }
        </Text>
    </FlexView>
}

const styles = StyleSheet.create({
    Wrapper: {
        height: Layout.window.height * 0.8
    }
})

ProductListEmptyComponent.propTypes = {  
    listingType: PropTypes.number
}

export default ProductListEmptyComponent