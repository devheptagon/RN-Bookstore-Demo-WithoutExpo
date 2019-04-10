import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import FlexView from './FlexView'
import RegularView from './RegularView'
import Icon from 'react-native-vector-icons/FontAwesome'
import Theme from '../../constants/Theme'
import { FlexAlign, IconNames } from '../../constants/Enums'

export default class NumericInput extends React.PureComponent {
    state = {
        value: this.props.value || 0
    }

    increase = () => { 
        const { onIncrease } = this.props
        this.setState((state, props) => { 
            const newValue = state.value + 1 
            onIncrease(newValue)
            return { value: newValue} 
        })         
    }

    decrease = () => { 
        const { onDecrease } = this.props
        this.setState((state, props) => { 
            const newValue = state.value - 1 
            onDecrease(newValue)
            return { value: newValue} 
        })         
    }

    render () {                
        return (        
            <RegularView style={styles.Wrapper}>
                <FlexView justifyContent={FlexAlign.SpaceBetween} alignItems={FlexAlign.Center}>
                    <TouchableOpacity onPress={this.increase} style={styles.Button}>
                        <Icon name={IconNames.CaretUp} size={30} />                                         
                    </TouchableOpacity>
                    <Text style={styles.Input}>
                        {this.state.value}
                    </Text>
                    <TouchableOpacity onPress={this.decrease} style={styles.Button}>
                        <Icon name={IconNames.CaretDown} size={30} />                   
                    </TouchableOpacity>
                </FlexView>  
            </RegularView>      
        )
    }
}

NumericInput.propTypes = {
    value: PropTypes.number
}

const styles = StyleSheet.create({
    Wrapper: {        
        paddingTop: 4,
        paddingBottom: 4,
        height: 100
    },
    Input: {
        color: Theme.General.Text.AmountColor,
        fontSize: Theme.General.Text.FontXXBig,
        fontWeight: Theme.General.Text.FontBold
    },
    Button: {
        width: 32, 
        alignItems: FlexAlign.Center
    }
})