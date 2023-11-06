import React, { Component } from 'react'

export default class Classcomp extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
        <>
        <div>{this.props.name}</div>
        <div>{this.props.age}</div>

        </>
      
    )
  }
}
