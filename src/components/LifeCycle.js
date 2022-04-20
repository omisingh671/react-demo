import React, { Component } from 'react';

class Life extends Component {

    constructor(props) {
        super(props);

        this.state = { name: 'Amar' }

        console.log('1-Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('2-GDSFP');
        console.log(state);

        if (state.name === "Mantu") {
            return {
                name: 'Amar Pratap Singh'
            }
        }
        return null;
    }

    componentDidMount() {
        console.log('4-Component Did Mount');
    }

    componentWillUnmount() {
        console.log('5-Component will Unmount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('X-Should Component Update');

        if (nextState.name == "Mantu") {
            return false;
        }

        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        let age = 20;

        return age;
    }

    componentDidUpdate(prevProps, prevState, snapshotBeforeUpdate) {
        console.log('X-Component Did Update');
        // console.log(prevState);
        // console.log(this.state);
        console.log(snapshotBeforeUpdate);
    }

    render() {
        console.log('3-Render');
        return (
            <div>
                <div>{this.state.name}</div>
                <div onClick={() => this.setState({ name: 'Mantu Singh' })}>Change Name</div>
            </div>
        )
    }

}

export default Life;