export function openLayer (layerName, actions, menuItem) {
  layerName === 'mobileMenuSecoundLayerWrapper' ? actions.loadSecoundryMobileMenuLayer(menuItem) : ''
  layerName === 'mobileMenuThirdLayerWrapper' ? actions.loadThirdMobileMenuLayer(menuItem) : ''
  document.getElementById(layerName).classList.remove('mobileMenuHide')
  document.getElementById(layerName).classList.add('mobileMenuShow')
}

export function closeLayer (layerName) {
  document.getElementById(layerName).classList.add('mobileMenuHide')
  document.getElementById(layerName).classList.remove('mobileMenuShow')
}
