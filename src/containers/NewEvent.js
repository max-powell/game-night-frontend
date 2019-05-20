import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../css/NewEvent.css'

class NewEvent extends Component {

  state = {
    location: '',
    dateTime: new Date,
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

  test = (...args) => {
    const state = this.state
    debugger
  }

  changeDateTime = dateTime => {this.setState({dateTime})}

  render() {

    const { location, dateTime, invited, notInvited, gameId, gameOwner } = this.state
    const { handleInputChange, changeDateTime } = this

    return (
      <div id='new-event' className='main-container-item'>
        <div id='new-event-title'><h1>Schedule a game night</h1></div>
          <div id='area1'>
            <div>
            <label>Location: </label>
              <Input name='location' value={location} onChange={handleInputChange} />
            </div>
            <div>
            <label>When: </label>
              <DatePicker
              selected={dateTime}
              showTimeInput
              dateFormat='dd/MM/yy h:mm aa'
              minDate={new Date()}
              name='dateTime'
              onChange={changeDateTime}
              />
            </div>
            <div onClick={this.test}>HI</div>
          </div>
      </div>
    )
  }

}

export default NewEvent
