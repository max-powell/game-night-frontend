import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import '../css/NewEvent.css'

class NewEvent extends Component {

  state = {
    location: '',
    dateTime: '',
    invited: [],
    notInvited: [],
    gameId: 0,
    gameOwner: ''
  }

  handleInputChange = (e, {name, value}) => {
    this.setState({
      [name]: value
    })
  }

  render() {

    const { location, dateTime, invited, notInvited, gameId, gameOwner } = this.state
    const { handleInputChange } = this

    return (
      <div id='new-event' className='main-container-item'>
        <div id='new-event-title'><h1>Schedule a game night</h1></div>
          <div id='area1'>
            <Input label='Location:' name='location' value={location} onChange={handleInputChange} />
          </div>
      </div>
    )
  }

}

export default NewEvent
