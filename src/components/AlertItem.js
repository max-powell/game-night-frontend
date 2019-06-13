import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AlertItem extends Component {

  getFormattedDateString = dateString => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const dateObj = new Date(dateString)

    return `${days[dateObj.getDay()]}, ${dateObj.getDate()} ${months[dateObj.getMonth()]}`
  }

  render() {

    const { item, type, accept, reject } = this.props
    const { getFormattedDateString } = this

    return (
      <div className='alert-item'>
        <div className='alert-text'>
          {type === 'fR' && `${item.user.username} sent you a friend request`}
          {type === 'eI' && `${item.event.host.username} invited you to a game night on ${getFormattedDateString(item.event.dateTime)}`}
        </div>
        <div className='alert-button'>
          <FontAwesomeIcon
            icon='check-circle'
            color='green'
            size='lg'
            onClick={() => accept(item)}
          />
        </div>
        <div className='alert-button'>
          <FontAwesomeIcon
            icon='times-circle'
            color='red'
            size='lg'
            onClick={() => reject(item)}
          />
        </div>
      </div>
    )
  }

}

export default AlertItem
