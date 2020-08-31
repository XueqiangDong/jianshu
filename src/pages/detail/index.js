import React, { Component } from 'react';
import * as store from "./store";
import { DetailWrapper, Header, Content } from "./style";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

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
    this.props.changeDetailData(this.props.match.params.id)
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

export default connect(mapState, mapDispatch)(withRouter(Detail))