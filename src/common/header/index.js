import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch } from "./style";

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
          <NavSearch>Search</NavSearch>
        </Nav>
      </HeaderWrapper>
    );
  }
}

export default Header