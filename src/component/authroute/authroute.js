import * as React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

@withRouter
class AuthRouter extends React.Component {
  componentDidMount() {
    const publicList = ['/login', '/register']
    const { location } = this.props

    if (publicList.indexOf(location.pathname) > -1) {
      return
    }
    // get user info
    axios.get('/user/info').then((res) => {
      console.log(res)
      if (res.status === 200) {
        if (res.data.code === 0) {
          //
        } else {
          const { history } = this.props
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
