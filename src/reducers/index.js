import { combineReducers } from 'redux'

import currentUser from './currentUser'
import selectedFriendReducer from './selectedFriendReducer'

const appReducer = combineReducers({
  currentUser,
  selectedFriend: selectedFriendReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
