import React from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet } from 'react-native'
import FlexView from '../../components/FlexView'
import Layout from '../../../constants/Layout'
import Theme from '../../../constants/Theme'

const noImage = require('../../../../assets/images/no-image.png')

export class ProductImage extends React.Component {
    state = {        
        width: '100%',
        height: '100%'
    }

    componentDidMount () {
        const { imageLinks, calculateActualSize } = this.props        
        if (calculateActualSize && imageLinks && imageLinks.thumbnail) {
            Image.getSize(
                imageLinks.thumbnail, 
                (width, height) => {
                    const ratio = width / height
                    const newHeight = Math.floor((Layout.window.height - 150) / 2)
                    const newWidth =  Math.floor(newHeight * ratio)                               
                    this.setState({ width: newWidth, height: newHeight})
                }
            )     
        }
    }
    
    render () {
        const { imageLinks } = this.props
        const { width, height } = this.state
        return <FlexView centerAll style={styles.ImageField}>
            <Image
                source={imageLinks && imageLinks.thumbnail ? { uri: imageLinks.thumbnail } : noImage}
                style={[styles.Image,  { width, height }]}
            />
        </FlexView>
    }
}

const styles = StyleSheet.create({
    ImageField: {
        padding: 5
    },
    Image: {         
        borderWidth: Theme.General.Image.BorderWidth, 
        borderColor: Theme.General.Image.BorderColor
    }
})

ProductImage.propTypes = {  
    imageLinks: PropTypes.any, 
    calculateActualSize: PropTypes.bool
}

export default ProductImage 