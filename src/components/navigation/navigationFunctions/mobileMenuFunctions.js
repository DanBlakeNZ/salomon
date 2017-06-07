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
// If Mobile Menu is Open //
  if (mobileMenuOpen) {
    mobileMenuActions.toggleMenuSuccess(false)
    document.getElementById('burger').classList.remove('burgerOpen')
    document.getElementById('burger').classList.add('burgerClosed')
    closeLayer('mobileMenuWrapper')
    closeLayer('mobileMenuSecoundLayerWrapper')
    closeLayer('mobileMenuThirdLayerWrapper')
    closeLayer('mobileMenuSportsLayerWrapper')

// If Mobile Menu is Closed //
  } else {
    mobileMenuActions.toggleMenuSuccess(true)
    document.getElementById('burger').classList.remove('burgerClosed')
    document.getElementById('burger').classList.add('burgerOpen')
    openLayer('mobileMenuWrapper')
  }
}
