import React, { Component } from 'react';
import logo from '../../logo.svg';

class Header extends Component {

    state = {
        name: 'Amar',
        title: 'The keywords are:',
        keywords: '',
        count: 0
    }
    addOne = () => {
        this.setState((state, props) => ({
            count: state.count + 1
        }));
    }

    inputChangeHandler = (event) => {
        this.setState({
            keywords: event.target.value
        });
        console.log(event.target.value);
    }

    render() {

        console.log(this.state);

        return (
            <header>
                <h1>Logo</h1>
                <input onChange={(event) => this.inputChangeHandler(event)} />

                <div>
                    <h3>{this.state.title}</h3>
                    <p>{this.state.keywords}</p>
                    <p>{this.state.count}</p>
                    <button onClick={() => this.addOne()}>Add One</button>
                </div>
            </header>
        )
    }
}

export default Header;