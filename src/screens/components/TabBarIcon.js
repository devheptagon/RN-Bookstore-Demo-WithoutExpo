import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Theme from '../../constants/Theme'

export class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon
        name={this.props.name}
        size={26}
        style={styles.Icon}
        color={this.props.focused ? Theme.TabBar.Icon.SelectedColor : Theme.TabBar.Icon.UnselectedColor}
      />
    );
  }
}

TabBarIcon.propTypes = {
  focused: PropTypes.bool,
  name: PropTypes.string
}

const styles = StyleSheet.create({
  Icon: {
    marginBottom: -3
  }
})

export default TabBarIcon 