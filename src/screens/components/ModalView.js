import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import Theme from '../../constants/Theme'

const ModalView = ({ children, ...rest }) => (
    <Modal
        isVisible={true}
        backdropColor={Theme.Modal.BackgroundColor}
        backdropOpacity={0.3}
        {...rest}
    >
        {children}
    </Modal>
)

ModalView.propTypes = {
    children: PropTypes.any
}

export default ModalView