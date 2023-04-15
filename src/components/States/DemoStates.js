import React, { Component } from 'react'

export default class DemoStates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Bù văn Tèo",
            age: 25
        }
    }
  render() {
    return (
      <div>
            <h2>{this.state.name}</h2>
            <p>Tuổi: {this.state.age} </p>
      </div>
    )
  }
}
