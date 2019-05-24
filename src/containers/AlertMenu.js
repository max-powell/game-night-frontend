import React, { Component } from 'react';

import { Header, Segment, Portal } from 'semantic-ui-react'

class AlertMenu extends Component {

  state = {
    open: false
  }

  render() {
    return (
      <Portal
        closeOnTriggerClick
        openOnTriggerClick
        trigger={
          <Button
            content={open ? 'Close Portal' : 'Open Portal'}
            negative={open}
            positive={!open}
          />
        }
      />
    )
  }

}

export default AlertMenu
