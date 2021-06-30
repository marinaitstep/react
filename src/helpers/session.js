export function checkCredentials(params) {
  if (
    params.username.toLowerCase() !== 'marina' ||
    params.password !== '1234'
  ) {
    return false
  }

  return true
}
