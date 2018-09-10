// @flow
export const getRedirectPath = ({ type, avatar } : { type: string, avatar:string }) => {
  let url = (type === 'boss') ? '/boss' : '/genius'
  if (!avatar) {
    url += 'info'
  }
  return url
}
