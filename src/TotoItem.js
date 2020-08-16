import React, {Component } from 'react';

class TotoItem extends Component {

  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this)
  }

  render() {
    let { item } = this.props
    return (
      <div onClick={this.onDelete}>
        {item}
      </div>
    );
  }

  onDelete() {
    let { onDelete, index } = this.props
    onDelete(index)
  }
}

export default TotoItem;
