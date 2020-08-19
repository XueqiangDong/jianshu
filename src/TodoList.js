import React, { Component, Fragment } from 'react'
import store from "./store";
import { connect } from 'react-redux'

class TodoList extends Component {

  componentWillMount() {
    // store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <Fragment>
        <div>
          <input value={this.props.inputValue} onChange={this.props.changeInputValue} />
          <button>submit</button>
        </div>
        <ul>
          <li>helo</li>
        </ul>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      let action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
