import React, { PureComponent } from 'react';

class PureComp extends PureComponent {

    state = {
        name: 'Amar'
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextState.name === this.state.name) {
    //         return false;
    //     }
    //     return true;
    // }

    render() {
        console.log('render');
        return (
            <>
                <h3>{this.state.name}</h3>
                <button onClick={() => this.setState({ name: 'AmarS' })}>Click to Change Name</button>
            </>
        )
    }
}

export default PureComp;