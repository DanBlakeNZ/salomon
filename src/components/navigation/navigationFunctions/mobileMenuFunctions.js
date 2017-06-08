export function openLayer (layerName, menuItem, actions) {
  layerName === 'mobileMenuSecoundLayerWrapper' ? actions.loadSecoundryMobileMenuLayer(menuItem) : ''
  layerName === 'mobileMenuThirdLayerWrapper' ? actions.loadThirdMobileMenuLayer(menuItem) : ''
  document.getElementById(layerName).classList.remove('mobileMenuHide')
  document.getElementById(layerName).classList.add('mobileMenuShow')
}

export function closeLayer (layerName) {
  document.getElementById(layerName).classList.add('mobileMenuHide')
  document.getElementById(layerName).classList.remove('mobileMenuShow')
}

export function showMobileMenu (mobileMenuActions, mobileMenuOpen) {
  document.getElementById('burger').classList.toggle('burgerOpen')

// If Mobile Menu is Open //
  if (mobileMenuOpen) {
    mobileMenuActions.toggleMenuSuccess(false)
    closeLayer('mobileMenuWrapper')
    closeLayer('mobileMenuSecoundLayerWrapper')
    closeLayer('mobileMenuThirdLayerWrapper')
    closeLayer('mobileMenuSportsLayerWrapper')

// If Mobile Menu is Closed //
  } else {
    mobileMenuActions.toggleMenuSuccess(true)
    openLayer('mobileMenuWrapper')
  }
}
