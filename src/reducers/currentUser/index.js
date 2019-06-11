import { combineReducers } from 'redux'

import gamesReducer from './gamesReducer'
import friendsReducer from './friendsReducer'
import eventsReducer from './eventsReducer'

export default combineReducers({
  games: gamesReducer,
  friends: friendsReducer,
  events: eventsReducer
})
