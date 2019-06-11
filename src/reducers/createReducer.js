export default (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
