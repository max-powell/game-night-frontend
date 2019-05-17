import React from 'react'
import '../css/Dashboard.css'

import Profile from './Profile'
import EventDisplay from './EventDisplay'
import FriendDisplay from './FriendDisplay'
import GameDisplay from './GameDisplay'

const Dashboard = () => (
  <div id='dashboard'>
    <Profile />
    <EventDisplay />
    <FriendDisplay />
    <GameDisplay />
  </div>
);

export default Dashboard
