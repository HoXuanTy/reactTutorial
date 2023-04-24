import React, { Component } from 'react'

export default class ChangeStates extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "Ho Xuan Ty",
            color: "brown",
            year: 1993
         };
    };

    ChangeColor = (event) => {
        this.setState({
          color: "Red"
           
        })
    };

  onChange(event) {
    this.setState({
        username: event.target.value
      })
        this.setState({ name: event.target.value });
    }
  render() {
    return (
      <div>
            {/* <h1>{this.state.name}</h1>
            <p>Anh đẹp Trai quá</p>
            <p >Tuổi: {this.state.year}</p>
            <p style={{background:this.state.color}}>Màu</p>
            <button onClick={this.ChangeColor} >Thay đổi màu</button> */}

            <input type="text" onChange={this.onChange.bind(this)} />
            <p title="hello">Hello {this.state.name}</p>
      </div>
     
    )
  }
}
