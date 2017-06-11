export default function desktopMenuDataReducer (state = 'Men', action) {
  switch (action.type) {
    case 'DESKTOP_MENU_LOAD_SUCCESS':
      return action.catagory

    default:
      return state
  }
}
