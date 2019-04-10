import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import ProductInfo from './ProductInfo'
import FlexView from '../../components/FlexView'
import NumericInput from '../../components/NumericInput'
import { addItem, removeItem } from '../../../services/repos/basketRepo'
import Theme from '../../../constants/Theme'
import { FlexDirections } from '../../../constants/Enums'

export class BasketListItem extends React.PureComponent {
    onIncrease = () => {
        const { dataItem } = this.props
        addItem(dataItem)        
    }

    onDecrease = () => {
        const { dataItem } = this.props
        removeItem(dataItem)
    }

    render () {
        const { dataItem } = this.props        
        return (        
            <FlexView flexDirection={FlexDirections.Row} style={styles.Wrapper}>
                <FlexView flex={1} centerAll style={styles.ButtonContainer}>
                    <NumericInput 
                        value={dataItem.count}                    
                        onIncrease={this.onIncrease}                    
                        onDecrease={this.onDecrease}
                    />
                </FlexView>
                <FlexView flex={6}>
                    <ProductInfo dataItem={dataItem} />
                </FlexView>                
            </FlexView>        
        )
    }
}

const styles = StyleSheet.create({
    Wrapper: {        
        borderTopWidth: Theme.General.Border.Width,
        borderBottomWidth: Theme.General.Border.Width,
        borderTopColor: Theme.ProductList.Item.BorderColor,
        borderBottomColor: Theme.ProductList.Item.BorderColor,
        backgroundColor: Theme.ProductList.Item.BackgroundColor,
    },
    ButtonContainer: {
        borderWidth: Theme.General.Border.Width,                
        borderColor: Theme.Basket.NumericColumn.BorderColor,
        backgroundColor: Theme.Basket.NumericColumn.BackgroundColor
    }
})

BasketListItem.propTypes = {      
    dataItem: PropTypes.object  
}

export default BasketListItem 