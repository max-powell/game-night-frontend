import { combineReducers } from 'redux'

import currentUser from './currentUser'
import selectedFriendReducer from './selectedFriendReducer'
import selectedFriendGamesReducer from './selectedFriendGamesReducer'

const appReducer = combineReducers({
  currentUser,
  selectedFriend: selectedFriendReducer,
  selectedFriendGames: selectedFriendGamesReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
