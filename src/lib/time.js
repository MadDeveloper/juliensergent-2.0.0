export function calculateAge(birthday = new Date()) {
  const difference = Date.now() - birthday.getTime()
  const ageDate = new Date(difference) // miliseconds from epoch

  return Math.abs(ageDate.getUTCFullYear() - 1970)
}
