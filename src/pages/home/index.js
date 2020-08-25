import React, { Component } from 'react';
import {
  HomeWrapper, HomeLeft, HomeRight, BackTop
} from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { connect } from "react-redux";
import * as store from './store'
import { actionCreators } from './store';

class Home extends Component {

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt=''
               src="https://upload.jianshu.io/admin_banners/web_images/5000/73fb106b57565c1d79d1a4fb359d77d716aef438.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }

  handleScrollTop(){
    window.scrollTo(0, 0);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }

}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => {
  return {
    changeHomeData: () => {
      dispatch(store.actionCreators.getHomeData())
    },
    changeScrollTopShow: () => {
      if (document.documentElement.scrollTop > 100)
        dispatch(actionCreators.toggleTopShow(true))
      else
        dispatch(actionCreators.toggleTopShow(false))
    }
  }
}

export default connect(mapState, mapDispatch)(Home)