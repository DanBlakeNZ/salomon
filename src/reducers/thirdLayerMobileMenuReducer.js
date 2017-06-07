export default function thirdLayerMobileMenuReducer (state = 'Sports', action) {
  switch (action.type) {
    case 'THIRD_MOBILE_MENU_LOAD_SUCCESS':
      return action.catagory

    default:
      return state
  }
}
