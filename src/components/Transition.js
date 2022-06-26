import React, { Component } from 'react';
import '../css/App.css';

import { Transition } from 'react-transition-group';

class TransitionComp extends Component {

    state = {
        show: true
    }

    showDiv = () => {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        return (
            <>
                <Transition
                    in={this.state.show}
                    timeout={1000}
                    // enter={false}
                    // exit={false}

                    onEnter={(node, isAppearing) => {
                        console.log(node);
                        console.log(isAppearing);
                    }}

                    onExit={(node, isAppearing) => {
                        console.log(node);
                        console.log(isAppearing);
                    }}

                >
                    {(state) => (
                        <div className={`square square-${state}`}>
                            {`square square-${state}`}
                        </div>
                    )}
                </Transition>

                <button onClick={this.showDiv}>
                    Toggle It
                </button>
            </>

        )
    }
}


export default TransitionComp;