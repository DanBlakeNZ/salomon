export function toggleMenuSuccess (mobileMenuOpen) {
  return {
    type: 'TOGGLE_MENU_SUCCESS',
    mobileMenuOpen
  }
}

export function loadSecoundryMobileMenuLayer (catagory) {
  return {
    type: 'SECOUNDRY_MOBILE_MENU_LOAD_SUCCESS',
    catagory
  }
}

export function loadThirdMobileMenuLayer (catagory) {
  return {
    type: 'THIRD_MOBILE_MENU_LOAD_SUCCESS',
    catagory
  }
}
