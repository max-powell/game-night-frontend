import React, { Component } from 'react'

class AlertItem extends Component {



  getFormattedDateString = dateString => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const dateObj = new Date(dateString)

    return `${days[dateObj.getDay()]}, ${dateObj.getDate()} ${months[dateObj.getMonth()]}`
  }

  render() {

    const { request, invite } = this.props
    const { getFormattedDateString } = this

    return (
      <div className='alert-item'>
      {request && `${request.user.username} sent you a friend request`}
      {invite && `${invite.event.host.username} invited you to a game night on ${getFormattedDateString(invite.event.dateTime)}`}
      </div>
    )
  }

}

export default AlertItem
