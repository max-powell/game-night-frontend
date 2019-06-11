import { combineReducers } from 'redux'

import gamesReducer from './gamesReducer'
import friendsReducer from './friendsReducer'
import eventsReducer from './eventsReducer'
import friendRequestsReducer from './friendRequestsReducer'
import sentFriendRequestsReducer from './sentFriendRequestsReducer'

export default combineReducers({
  games: gamesReducer,
  friends: friendsReducer,
  events: eventsReducer,
  friendRequests: friendRequestsReducer,
  sentFriendRequests: sentFriendRequestsReducer
})
