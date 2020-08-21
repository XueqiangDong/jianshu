import React, { Component } from 'react';
import {
  Addition, HeaderWrapper, Logo, Nav, NavItem,
  NavSearch, Button, SearchWrapper, SearchInfo,
  SearchInfoTitle, SearchInfoSwitch, SearchInfoItem,
  SearchInfoList
} from "./style";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import * as store from './store'
import { actionCreators } from "./store";

class Header extends Component {
  getListArea = () => {
    const {focused, list} = this.props
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              list.map((item) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const {focused, onBlur, onFocus} = this.props
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
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={focused ? 'focused' : 'unfocused'}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </CSSTransition>
            <span className={focused ? 'focused iconfont' : 'unfocused iconfont'}>&#xe610;</span>
            {this.getListArea(focused)}
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
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFocus: () => {
      dispatch(actionCreators.getList())
      dispatch(store.actionCreators.searchFocus())
    },
    onBlur: () => {
      dispatch(store.actionCreators.searchBlur())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);