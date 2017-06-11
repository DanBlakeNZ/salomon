export function desktopMenuVisable () {
  document.getElementById('desktopMenu').classList.remove('desktopMenuHide')
  document.getElementById('desktopMenu').classList.add('desktopMenuShow')
}

export function desktopMenuHidden () {
  document.getElementById('desktopMenu').classList.add('desktopMenuHide')
  document.getElementById('desktopMenu').classList.remove('desktopMenuShow')
}
