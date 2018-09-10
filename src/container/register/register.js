// @flow
import * as React from 'react'
import { List, InputItem, Radio, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Logo from '../../component/logo/logo'
import { register } from '../../redux/user.redux'

type Props = {
  msg: number,
  register: Function,
  redirectTo: string
}

type State = {
  user: string,
  pwd: string,
  repeatpwd: string,
  type: string,
}

@connect(
  state => state.userReducer, { register },
)
class Register extends React.Component<Props, State> {
  constructor(props: Object) {
    super(props)
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius',
    }
  }

  handleRegister() {
    this.props.register(this.state)
  }

  handleChange(key: string, val: string) {
    this.setState({
      [key]: val,
    })
  }

  render() {
    const { RadioItem } = Radio
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo />
        <List>
          {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
          <InputItem onChange={val => this.handleChange('user', val)}>Username</InputItem>
          <WhiteSpace />
          <InputItem onChange={val => this.handleChange('pwd', val)} type="password">Passowrd</InputItem>
          <WhiteSpace />
          <InputItem onChange={val => this.handleChange('repeatpwd', val)} type="password">Confirm</InputItem>
          <WhiteSpace />
          <RadioItem checked={this.state.type === 'genius'} onChange={() => this.handleChange('type', 'genius')}>Genius</RadioItem>
          <RadioItem checked={this.state.type === 'boss'} onChange={() => this.handleChange('type', 'boss')}>Boss</RadioItem>
          <Button type="primary" onClick={() => this.handleRegister()}>Submit</Button>
        </List>
      </div>
    )
  }
}

export default Register
