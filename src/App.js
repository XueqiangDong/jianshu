import React, {Component, Fragment} from 'react';
import './style.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    this.onClick = this.onClick.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>
          hello
        </div>
        <button onClick={this.onClick}>toggle</button>
      </Fragment>
    );
  }

  onClick() {
    this.setState((preState) => ({
      show: !preState.show
    }))
  }
}

export default App;
