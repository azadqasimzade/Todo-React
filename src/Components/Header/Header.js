import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <>
        <h1 className='text-center'>{this.props.title}</h1>
        <h5 className='text-center mt-2 text-danger'>{this.props.desc}</h5>
      </>
    )
  }
}