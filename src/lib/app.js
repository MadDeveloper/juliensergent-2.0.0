export function isHomeAnimationPlayed() {
  return !!sessionStorage.getItem("homepage.animation.played")
}

export function setHomeAnimationAsPlayed() {
  sessionStorage.setItem("homepage.animation.played", "true")
}
