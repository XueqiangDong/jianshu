import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import { addItemAction, deleteItemAction, getInputAction, initListAction } from "./store/actionCreator"
import axios from 'axios'

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
    let onSuccess = (res) => {
      let data = res.data
      let action = initListAction(data)
      store.dispatch(action)
    }
    let onError = (error) => {
      console.log(',,', error)
    }
    axios.get('http://localhost:3001/list')
      .then(onSuccess)
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