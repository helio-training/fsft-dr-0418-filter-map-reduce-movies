import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div>
        {this.props.meteor.name}
      </div>
    )
  }
}