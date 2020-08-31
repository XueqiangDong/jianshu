import React, { Component } from 'react';
import * as store from "./store";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'

class Login extends Component {
  render() {
    let {login, loginDispatch} = this.props
    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='用户名' innerRef={(input) => {
              this.props.account = input
            }}/>
            <Input placeholder='密码' type={'password'} innerRef={(input) => {
              this.props.passwd = input
            }}/>
            <Button onClick={() => loginDispatch(this.props.account, this.props.passwd)}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to={'/'} />
    }

  }
}

const mapState = (state) => ({
  login: state.getIn(['login', 'loginStatus']),
})

const mapDispatch = (dispatch) => {
  return {
    loginDispatch: (accountElem, passwordElem) => {
      // console.warn(accountElem,passwordElem)
      dispatch(store.actionCreators.login(accountElem, passwordElem))
    }
  }
}

export default connect(mapState, mapDispatch)(Login)