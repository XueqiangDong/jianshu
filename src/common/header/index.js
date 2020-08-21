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
    const {focused, list, page, totalPage, mouseIn, mouseInEvent, mouseOut, changePage} = this.props
    const jsList = list.toJS()
    let pageList = []
    if (jsList.length) {
      for (let i = page * 10; i < (page + 1) * 10; i++) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={mouseInEvent} onMouseLeave={mouseOut}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => changePage(page, totalPage, this.iconSpin)}>
              <span ref={(icon) => {
                this.iconSpin = icon
              }} className={'spin iconfont'}>&#xe610;</span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageList
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const {focused, onBlur, list, onFocus, mouseIn} = this.props
    let expended = (focused || mouseIn)
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
              in={expended}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={expended ? 'focused' : 'unfocused'}
                onFocus={() => onFocus(list)}
                onBlur={() => onBlur(mouseIn)}
              />
            </CSSTransition>
            <span className={expended ? 'focused iconfont zoom' : 'unfocused iconfont zoom'}>&#xe610;</span>
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
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFocus: (list) => {
      if (!(list.size > 0))
        dispatch(actionCreators.getList())
      dispatch(store.actionCreators.searchFocus())
    },
    onBlur: (mouseIn) => {
      dispatch(store.actionCreators.searchBlur())
    },
    mouseInEvent: () => {
      dispatch(store.actionCreators.mouseInEvent())
    },
    mouseOut: () => {
      dispatch(store.actionCreators.mouseOut())
    },
    changePage: (page, totalPage, spin) => {
      let angle = spin.style.transform.replace(/[^0-9]/gi, '')
      if (angle) {
        angle = parseInt(angle, 10)
      } else {
        angle = 0
      }
      spin.style.transform = 'rotate(' + (angle + 360) + 'deg)'
      if (page + 1 < totalPage)
        dispatch(store.actionCreators.changePage(page + 1))
      else
        dispatch(store.actionCreators.changePage(0))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);