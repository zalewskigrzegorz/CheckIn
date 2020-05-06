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
    case 'checkOut':
      return {
        ...state
      }
    default:
      return state
  }
}
export default reducer
