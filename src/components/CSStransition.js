import React, { Component } from 'react';

import '../css/App.css';

import { CSSTransition } from 'react-transition-group';

class Fade extends Component {

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
            <div>
                <CSSTransition
                    in={!this.state.show}
                    timeout={5000}
                    classNames={"cssSQ"}
                >
                    <div className='cssSQ'>Hello</div>
                </CSSTransition>

                <button onClick={this.showDiv}>
                    Toggle It
                </button>
            </div>
        )
    }
}


export default Fade;