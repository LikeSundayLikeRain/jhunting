// @flow
import * as React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

type Props = {
  location: any,
  history: any
}

@withRouter
class AuthRouter extends React.Component<Props> {
  componentDidMount() {
    const publicList = ['/login', '/register']
    const { location, history } = this.props

    if (publicList.indexOf(location.pathname) > -1) {
      return
    }
    // get user info
    axios.get('/user/info').then((res) => {
      if (res.status === 200) {
        if (res.data.code === 0) {
          //
        } else {
          history.push('/login')
        }
      }
    })
  }

  render() {
    return null
  }
}

export default AuthRouter;
