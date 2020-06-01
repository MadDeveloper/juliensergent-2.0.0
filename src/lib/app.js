export function isHomeAnimationPlayed() {
  return !!sessionStorage.getItem("homepage.animation.played")
}

export function setHomeAnimationAsPlayed() {
  sessionStorage.setItem("homepage.animation.played", "true")
}

export function isDevEnv() {
  return process.env.NODE_ENV === "development"
}

export function isProdEnv() {
  return process.env.NODE_ENV === "production"
}
