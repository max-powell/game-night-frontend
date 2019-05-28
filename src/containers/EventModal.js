import React, { Component } from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EventModal extends Component {

  render() {
    return (
      <Modal trigger={<FontAwesomeIcon icon="ellipsis-h" />} >
        <Modal.Header>Event Details</Modal.Header>
      </Modal>
    )
  }

}

export default EventModal
