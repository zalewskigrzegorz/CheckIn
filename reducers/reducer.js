const reducer = (state, action) => {
  switch (action.type) {
    case 'switchTab':
      return {
        ...state,
        tabIndex: action.newTabIndex
      }
    case 'register':
      return {
        ...state,
        email: action.newEmail,
        password: action.newPassword
      }
    case 'checkIn':
      return {
        ...state
      }
    case 'refresh':
      return {
        ...state,
        isRefreshing: action.isRefreshing
      }
    default:
      return state
  }
}
export default reducer
