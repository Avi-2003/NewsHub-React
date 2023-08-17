import loading from './loading.gif'
import React, { Component } from 'react'

export class Spinner extends Component {

  render() {
    return (
      <div className='text-center'>
        <img className="my-3" src={loading} alt="Loading" />
      </div>
    )
  }
}

export default Spinner