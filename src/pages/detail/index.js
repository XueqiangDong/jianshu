import React, { Component } from 'react';
import * as store from "./store";
import { DetailWrapper, Header, Content } from "./style";
import { connect } from "react-redux";

class Detail extends Component {
  render() {
    let {header, content} = this.props
    return (
      <DetailWrapper>
        <Header>{header}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}}></Content>
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.changeDetailData()
  }
}

const mapState = (state) => ({
  header: state.getIn(['detail', 'header']),
  content: state.getIn(['detail', 'content']),
})

const mapDispatch = (dispatch) => {
  return {
    changeDetailData: () => {
      dispatch(store.actionCreators.getDetailData())
    }
  }
}

export default connect(mapState, mapDispatch)(Detail)