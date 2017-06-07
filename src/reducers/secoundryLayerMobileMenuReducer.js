export default function secoundryLayerMobileMenuReducer (state = 'Men', action) {
  switch (action.type) {
    case 'SECOUNDRY_MOBILE_MENU_LOAD_SUCCESS':
      return action.catagory

    default:
      return state
  }
}
