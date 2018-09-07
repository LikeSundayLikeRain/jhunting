// @flow
import * as React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import Logo from '../../component/logo/logo'

type Props = {
  history: Object
}

class Login extends React.Component<Props> {
  // constructor(props) {
  //   super(props)
  // }

  register() {
    const { history } = this.props
    history.push('/register')
  }

  render() {
    return (
      <div>
        <Logo />
        <WingBlank>
          <List>
            <InputItem>User Name</InputItem>
            <WhiteSpace />
            <InputItem>Passowrd</InputItem>
          </List>
          <Button type="primary">Login</Button>
          <WhiteSpace />
          <Button onClick={() => this.register()} type="primary">Register</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login
