// @flow
import axios from 'axios'
import { getRedirectPath } from '../util'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MGS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

const initState = {
  isAuth: '',
  msg: '',
  user: '',
  pwd: '',
  type: '',
  redirectTo: '',
}


const errorMsg = msg => ({ msg, type: ERROR_MSG })

const registerSuccess = date => ({ type: REGISTER_SUCCESS, payload: date })

const loginSuccess = data => ({ type: LOGIN_SUCCESS, payload: data })

export const userReducer = (state: Object = initState, action: Object) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, msg: '', isAuth: true, redirectTo: getRedirectPath(action.payload), ...action.payload }
    case LOGIN_SUCCESS:
      return { ...state, msg: '', isAuth: true, redirectTo: getRedirectPath(action.payload), ...action.payload }
    case ERROR_MSG:
      return { ...state, isAuth: false, msg: action.msg }
    default:
      return state
  }
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

export const login = (loginInfo: Object) => {
  const { user, pwd } = loginInfo
  if (!user || !pwd) {
    return errorMsg('Missing Inforamtion')
  }

  return (dispatch: Function) => {
    axios.post('user/login', { user, pwd })
      .then((res) => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(loginSuccess(res.data.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      }).catch((err) => {
        dispatch(errorMsg(err))
      })
  }
}
