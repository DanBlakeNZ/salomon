export default function mobileMenuToggleReducer (state = false, action) {
  switch (action.type) {
    case 'TOGGLE_MENU_SUCCESS':
      return action.mobileMenuOpen

    default:
      return state
  }
}
