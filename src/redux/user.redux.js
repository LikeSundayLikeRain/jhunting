// @flow
import axios from 'axios'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MGS'

const initState = {
  isAuth: '',
  msg: '',
  user: '',
  pwd: '',
  type: '',
}

export default (state:Object = initState, action:Object) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, msg: '', isAuth: true, ...action.payload }
    case ERROR_MSG:
      return { ...state, isAuth: false, msg: action.msg }
    default:
      return state
  }
}

function errorMsg(msg) {
  return { msg, type: ERROR_MSG }
}

function registerSuccess(date) {
  return { type: REGISTER_SUCCESS, payload: date }
}

export const register = (registerInfo: Object) => {
  const { user, pwd, repeatpwd, type } = registerInfo
  if (!user || !pwd || !repeatpwd || !type) {
    return errorMsg('Missing Information')
  }

  if (pwd !== repeatpwd) {
    return errorMsg('Password doesn\'t match')
  }

  return (dispatch: Function) => {
    axios.post('/user/register', { user, pwd, type })
      .then((res) => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(registerSuccess({ user, pwd, type }))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      }).catch(() => {
        dispatch(errorMsg('ERROR'))
      })
  }
}
