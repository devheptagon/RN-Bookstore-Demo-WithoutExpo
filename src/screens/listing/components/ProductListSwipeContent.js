import React from 'react'
import PropTypes from 'prop-types'
import FlexView from '../../components/FlexView'
import SwipeButton from '../../components/SwipeButton'
import { ProductListingTypes, FlexAlign, FlexDirections, IconNames } from '../../../constants/Enums'
import Theme from '../../../constants/Theme'
import Texts from '../../../constants/Texts'

export const ProductListSwipeContent = props => {
    const { listingType, addToBasket, showFavouriteToaster, showUnFavouriteToaster } = props
    const { SearchResults, Favourites } = ProductListingTypes
    const { Swipe: { ContainerBackgroundColor, Button1BackgroundColor, Button1IconColor, Button2BackgroundColor, Button2IconColor, 
        Button3BackgroundColor, Button3IconColor } } = Theme
    return <FlexView style={{
        backgroundColor: ContainerBackgroundColor,
        justifyContent: FlexAlign.FlexStart,
        alignItems: FlexAlign.FlexEnd,
    }}>
        <FlexView flexDirection={FlexDirections.Row} alignItems={FlexAlign.Center}>            
            <SwipeButton
                isVisible={listingType === SearchResults}
                onPress={addToBasket}
                backgroundColor={Button1BackgroundColor}
                text={Texts.Buy}
                icon={IconNames.BasketAdd}
                iconColor={Button1IconColor}
            />
            <SwipeButton
                isVisible={listingType === SearchResults}
                onPress={showFavouriteToaster}
                backgroundColor={Button2BackgroundColor}
                text={Texts.Fav}
                icon={IconNames.Fav}
                iconColor={Button2IconColor}
            />
            <SwipeButton
                isVisible={listingType === Favourites}
                onPress={showUnFavouriteToaster}
                backgroundColor={Button3BackgroundColor}
                text={Texts.Unfav}
                icon={IconNames.Unfav}
                iconColor={Button3IconColor}
            />
        </FlexView>
    </FlexView>
}

ProductListSwipeContent.propTypes = {  
    addToBasket: PropTypes.func, 
    showFavouriteToaster: PropTypes.func, 
    showUnFavouriteToaster: PropTypes.func, 
    listingType: PropTypes.number
}

export default  ProductListSwipeContent