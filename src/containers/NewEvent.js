import React, { Component } from 'react'

class NewEvent extends Component {

  state = {
    location: '',
    dateTime: '',
    invited: [],
    notInvited: [],
    gameId: 0,
    gameOwner: ''
  }

  render() {
    return (
      <div id='new-event' className='main-container-item'>
        Hi
      </div>
    )
  }

}

export default NewEvent
