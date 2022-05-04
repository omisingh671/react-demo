import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        users: [
            { id: 1, name: 'Francis' },
            { id: 2, name: 'Steve' },
            { id: 3, name: 'Lisa' },
            { id: 4, name: 'Samantha' },
            { id: 5, name: 'Jhon' },
        ],
        active: true
    }

    toggleActive = () => {
        this.setState({ active: !this.state.active })
    }

    render() {
        return (
            <MyContext.Provider value={{
                users: this.state.users,
                active: this.state.active,
                toggleActive: this.toggleActive
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyContext, MyProvider }