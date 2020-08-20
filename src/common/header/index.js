import React from 'react';
import {
  Addition, HeaderWrapper, Logo, Nav, NavItem,
  NavSearch, Button, SearchWrapper, SearchInfo,
  SearchInfoTitle, SearchInfoSwitch, SearchInfoItem,
  SearchInfoList
} from "./style";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import * as store from './store'

const getListArea = (show) => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>大学</SearchInfoItem>
          <SearchInfoItem>热点</SearchInfoItem>
          <SearchInfoItem>开门红</SearchInfoItem>
          <SearchInfoItem>过年好</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  } else {
    return null
  }
}
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
          {getListArea(props.focused)}
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
    focused: state.getIn(['header', 'focused'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFocus: () => {
      dispatch(store.actionCreators.searchFocus())
    },
    onBlur: () => {
      dispatch(store.actionCreators.searchBlur())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);