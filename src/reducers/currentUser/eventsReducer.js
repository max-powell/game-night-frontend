import createReducer from '../createReducer'

const addEvent = (state, action) => {
  return [...state, action.event]
}

export default createReducer([], {
  ACCEPT_EVENT_INVITE: addEvent
})
