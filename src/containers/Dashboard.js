import React from 'react'
import '../css/Dashboard.css'

import Profile from './Profile'
import EventDisplay from './EventDisplay'

const Dashboard = () => (
  <div id='dashboard'>
    <Profile />
    <EventDisplay />
  </div>
);

export default Dashboard
