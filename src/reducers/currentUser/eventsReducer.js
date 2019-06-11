import createReducer from '../createReducer'

const addEvent = (state, action) => {
  return [...state, action.event]
}

const removeEvent = (state, action) => {
  return state.filter(e => e.id !== action.event.id)
}

const updateEvent = (state, action) => {
  return [...removeEvent(state,action), action.event]
}

export default createReducer([], {
  ADD_EVENT: addEvent,
  ACCEPT_EVENT_INVITE: addEvent
  UPDATE_EVENT: updateEvent,
  LEAVE_EVENT: removeEvent
})
