import gnApi from '../api/gnApi'

export const addGame = bgaGame => {
  return dispatch => {
    gnApi.addGame(bgaGame)
      .then(game => {
        dispatch({
          type: 'ADD_GAME',
          game
        })
      })
  }
}
