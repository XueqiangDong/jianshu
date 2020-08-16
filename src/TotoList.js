import React, {Component, Fragment} from 'react';

class TotoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
      <Fragment>
        <div><input
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        />
          <button onClick={this.onClick.bind(this)}>submit</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index} onClick={this.onDelete.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    );
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  onClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  onDelete(index) {
    let list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default TotoList;
