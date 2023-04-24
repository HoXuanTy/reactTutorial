import React, { Component } from 'react'

export default class DemoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            class: ""
        };
    };

    onChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    onChange_class(event) {
        this.setState({
            class: event.target.value
        })
    }

    alert_func = () => {
        alert('Name: ' + this.state.username + "\nClass: " + this.state.class)
    }

    render() {
        return (
            <form align='center'>
                <p>Nhap ten:</p>
                <input
                    type='text'
                    name='username'
                    onChange={(this.onChange.bind(this))}
                />
                <select onChange={(this.onChange_class.bind(this))}>
                    <option value="">Chosse an option</option>
                    <option value="24B">24B</option>
                    <option value="24C">24C</option>
                </select>
                <button onClick={this.alert_func}>Submit</button>

            </form>

        )
    }
}
