import React from 'react';
import { Addition, HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button, SearchWrapper } from "./style";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

const Header = (props) => {
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
            in={props.focused}
            timeout={200}
            classNames='slide'
          >
            <NavSearch
              className={props.focused ? 'focused' : 'unfocused'}
              onFocus={props.onFocus}
              onBlur={props.onBlur}
            />
          </CSSTransition>
          <span className={props.focused ? 'focused iconfont' : 'unfocused iconfont'}>&#xe610;</span>
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
  )
};

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFocus: () => {
      let action = {
        type: 'search_focus'
      };
      dispatch(action)
    },
    onBlur: () => {
      let action = {
        type: 'search_blur'
      };
      dispatch(action)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);