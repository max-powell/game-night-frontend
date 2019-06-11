import createReducer from '../createReducer'

const addEvent = (state, action) => {
  return [...state, action.event]
}

export default createReducer([], {
  ADD_EVENT: addEvent,
  ACCEPT_EVENT_INVITE: addEvent
})
