import React, { Component } from 'react';
import { Addition, HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button, SearchWrapper } from "./style";
import { CSSTransition } from "react-transition-group";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focused: false
    }
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>Home</NavItem>
          <NavItem className='left'>Download App</NavItem>
          <NavItem className='right'>Login</NavItem>
          <NavItem className='right'>
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.state.focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={this.state.focused ? 'focused' : 'unfocused'}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
              />
            </CSSTransition>
            <span className={this.state.focused ? 'focused iconfont' : 'unfocused iconfont'}>&#xe610;</span>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writing'>
            <span className="iconfont">&#xe708;</span>
            Write Article
          </Button>
          <Button className='reg'>Register</Button>
        </Addition>
      </HeaderWrapper>
    );
  }

  onFocus() {
    this.setState({
      focused: true
    })
  }

  onBlur() {
    this.setState({
      focused: false
    })
  }
}

export default Header