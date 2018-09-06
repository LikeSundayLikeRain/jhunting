import * as React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Logo from '../../component/logo/logo'
import { login } from '../../redux/user.redux'

type Props = {
  history: any
}

@connect(
  state => state.userReducer, { login },
)
class Login extends React.Component < Props > {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: '',
    }
  }

  register() {
    const { history } = this.props
    history.push('/register')
  }

  handleLogin() {
    this.props.login(this.state)
  }

  handleChange(key, val) {
    this.setState({
      [key]: val,
    })
  }

  render() {
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo />
        <WingBlank>
          <List>
            <InputItem onChange={val => this.handleChange('user', val)}>User Name</InputItem>
            <WhiteSpace />
            <InputItem type="password" onChange={val => this.handleChange('pwd', val)}>Passowrd</InputItem>
          </List>
          <Button type="primary" onClick={() => this.handleLogin()}>Login</Button>
          <WhiteSpace />
          <Button onClick={() => this.register()} type="primary">Register</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login
