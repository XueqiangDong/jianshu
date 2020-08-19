import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import { addItemAction, deleteItemAction, getInputAction, getTodoList } from "./store/actionCreator"

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
  }

  componentWillMount() {
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <Fragment>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder='toto'
            onChange={this.onChange}
            style={{width: '300px'}}
          />
          <Button type='primary' onClick={this.onClick}>submit</Button>
        </div>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.onDelete.bind(this, index)}>{item}</List.Item>)}
          style={{width: '300px'}}
        />
      </Fragment>
    )
  }

  componentDidMount() {
    let action = getTodoList()
    store.dispatch(action)
  }

  onClick() {
    let action = addItemAction()
    store.dispatch(action)
  }

  onChange(e) {
    let action = getInputAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  onDelete(index) {
    let action = deleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList
