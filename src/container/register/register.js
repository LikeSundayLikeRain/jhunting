import * as React from 'react'
import { List, InputItem, Radio, WhiteSpace, Button } from 'antd-mobile'

import Logo from '../../component/logo/logo'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius',
    }
  }

  handleRegister() {
    console.log(this.state)
  }

  handleChange(key, val) {
    this.setState({
      [key]: val,
    })
  }

  render() {
    const { RadioItem } = Radio
    return (
      <div>
        <Logo />
        <List>
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
