import React, { Component } from 'react'

export default class ClassComponent extends Component {
    
  render() {
    const {name}=this.props
    return (
      <div style={{
        backgroundColor:"green",
        color:"white"
      }}>
      <div>I Am Class Component</div>
      <h4>I am Rendering out name: {name}</h4>
      </div>
    )
  }
}
