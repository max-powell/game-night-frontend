import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gnApi from '../api/gnApi'

class AlertModal extends Component {

  render() {
    return (
      <Modal trigger={<FontAwesomeIcon icon='bell' size='lg' />}>

      </Modal>
    )
  }

}

export default AlertModal
