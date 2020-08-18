import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <Fragment>
        <div>
          <Input
            value={this.state.inputValue}
            placeHolder='toto'
            onChange={this.onChange}
            style={{width: '300px'}}
          />
          <Button type='primary' onClick={this.onClick}>submit</Button>
        </div>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}
          style={{width: '300px'}}
        />
      </Fragment>
    )
  }

  onClick() {
    let action = {
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }

  onChange() {
    // let action = {
    //   type: 'add_todo_item'
    // }
    // store.dispatch(action)
  }

  handleStoreChange() {
    this.setState((preState) => ({
      // return store.getState()
    }))
  }
}

export default TodoList
