import gnApi from '../api/gnApi'

export const createEvent = event => {
  const newEvent = {
    location: event.location,
    dateTime: event.dateTime.toString(),
    invited_guest_ids: event.invited.map(i => i.id)
  }

  return dispatch => {
    gnApi.createEvent(newEvent)
    .then(event => {
      event &&
      dispatch({
        type: 'ADD_EVENT',
        event
      })
    })
  }
}
