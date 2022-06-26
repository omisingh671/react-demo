import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../css/App.css';

class Slide extends Component {
    state = {
        items: ['24', '35', '140', '43']
    }

    showElements() {
        return this.state.items.map((item, i) => (
            <CSSTransition
                key={i}
                classNames="item"
                timeout={3000}
                appear={true}
            >
                <div className="item">{item}</div>
            </CSSTransition>
        ));
    }

    addItem() {
        //let random = Math.floor(Math.random() * 100) + 1;
        let newArray = [...this.state.items, Math.floor(Math.random() * 100) + 1]

        this.setState({
            items: newArray
        })
    }

    removeItem() {
        let newArray = this.state.items.slice(0, -1);
        this.setState({
            items: newArray
        })
    }

    render() {
        return (
            <div>
                <TransitionGroup component="div" className="list-group">
                    {this.showElements()}
                </TransitionGroup>

                <div className="btns">
                    <div className="btn-add" onClick={() => this.addItem()}>Add Elements</div>
                    <div className="btn-remove" onClick={() => this.removeItem()}>Remove Elements</div>
                </div>
            </div>
        )
    }



}


export default Slide;