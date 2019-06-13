import gnApi from '../api/gnApi'

export const acceptEventInvite = eventInvite => {
  return dispatch => {
    gnApi.acceptEventInvite(eventInvite)
    .then(event => {
      dispatch({
        type: 'ACCEPT_EVENT_INVITE',
        eventInvite,
        event
      })
    })
  }
}

export const rejectEventInvite = eventInvite => {
  return dispatch => {
    gnApi.rejectEventInvite(eventInvite)
      .then(() => {
        dispatch({
          type: 'REJECT_EVENT_INVITE',
          eventInvite
        })
      })
  }
}
