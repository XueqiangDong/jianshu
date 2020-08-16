import React, {Component, Fragment} from 'react';
import TotoItem from "./TotoItem";
import './style.css'

class TotoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.onClick = this.onClick.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor='input'>Type your word:</label>
          <input
            id='input'
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.onClick}>submit</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <li key={index}>
          <TotoItem
            item={item}
            index={index}
            onDelete={this.onDelete}
          />
        </li>
        // <li
        //   key={index}
        //   onClick={this.onDelete.bind(this, index)}
        //   dangerouslySetInnerHTML={{__html: item}}
        // >
        // </li>)
      )
    })
  }

  handleInputChange(e) {
    let value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  onClick() {
    this.setState((preState) => ({
      list: [...preState.list, preState.inputValue],
      inputValue: ''
    }))
  }

  onDelete(index) {
    this.setState((preState) => {
      let list = [...preState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
  }
}

export default TotoList;
