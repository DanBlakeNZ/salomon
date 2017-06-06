export default function mobileMenuReducer (state = false, action) {
  switch (action.type) {
    case 'TOGGLE_MENU_SUCCESS':
      return action.mobileMenuOpen

    default:
      return state
  }
}
