import React, { Component } from 'react';
import { WriterItem, WriterWrapper } from "../style";
import { connect } from 'react-redux'

class Writer extends Component {
  render() {
    const { writers } = this.props
    return (
      <WriterWrapper>
        {
          writers.map((item) => {
            return (
              <WriterItem key={item.get('id')}>
                <img
                  className='writer-avatar'
                  src={item.get('imgUrl')}
                  alt=''
                />
                <h3 className='name'>{item.get('name')}</h3>
                <p className='desc'>{item.get('desc')}</p>
              </WriterItem>
            )
          })
        }
      </WriterWrapper>
    )
  }
}

const mapState = (state) => ({
  writers: state.getIn(['home', 'writers'])
})

export default connect(mapState, null)(Writer)