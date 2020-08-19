import React, { Component } from 'react';
import { Addition, HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button } from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>Home</NavItem>
          <NavItem className='left'>Download App</NavItem>
          <NavItem className='right'>Login</NavItem>
          <NavItem className='right'>Aa</NavItem>
          <NavSearch />
        </Nav>
        <Addition>
          <Button className='writing'>Write Article</Button>
          <Button className='reg'>Register</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

export default Header