import { combineReducers } from 'redux'

import gamesReducer from './gamesReducer'
import friendsReducer from './friendsReducer'

export default combineReducers({
  games: gamesReducer,
  friends: friendsReducer
})
