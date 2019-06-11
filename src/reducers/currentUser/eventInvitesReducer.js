import createReducer from '../createReducer'

const removeEventInvite = (state, action) => {
  return state.filter(eI => eI.id !== action.invite.id)
}

export default createReducer([], {
  ACCEPT_EVENT_INVITE: removeEventInvite,
  REJECT_EVENT_INVITE: removeEventInvite
})
