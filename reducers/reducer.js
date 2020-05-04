const reducer = (state, action) => {
  switch (action.type) {
    case 'changeTheme':
      return {
        ...state,
        theme: action.newTheme
      }
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

    default:
      return state
  }
}
export default reducer
