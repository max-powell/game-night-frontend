import gnApi from '../api/gnApi'

export const selectFriend = friend => {
  return {
    type: 'SELECT_FRIEND',
    friend
  }
}
