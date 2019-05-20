import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EventDisplayBanner = ({history}) => (
  <div className='dashboard-item-banner'>
    <h2>Upcoming Game Nights</h2>
    <FontAwesomeIcon icon="calendar-plus" size='2x' onClick={() => history.push('/new-event')} />
  </div>
)

export default EventDisplayBanner
