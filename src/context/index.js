import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const MyContext = React.createContext();

class MyProvider extends Component {
    state = {
        stage: 1,
        players: [],
        result: ''
    }

    addPlayerHandler = (name) => {
        this.setState((prevState) => ({
            players: [
                ...prevState.players,
                name
            ]
        }))
    }

    removePlayerHandler = (index) => {
        let newArray = this.state.players;
        newArray.splice(index, 1);

        this.setState({
            players: newArray
        });
    }

    nextHandler = () => {
        const { players } = this.state;

        if (players.length < 2) {
            console.log("Toast");
            toast.error("You need more than one player", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
        else {
            console.log("Move to Stage 2");

            this.setState({
                stage: 2
            }, () => {
                this.generateLooser();
            });
        }
    }

    generateLooser = () => {
        const { players } = this.state;

        toast("Getting new looser", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1500,
            closeOnClick: false,
            pauseOnHover: false,
        });

        setTimeout(() => {
            this.setState({
                result: players[Math.floor(Math.random() * players.length)]
            })
        }, 2000)
    }

    resetGame = () => {
        this.setState({
            stage: 1,
            players: [],
            result: ''
        });
    }

    render() {
        return (
            <>
                <MyContext.Provider value={{
                    state: this.state,
                    addPlayer: this.addPlayerHandler,
                    removePlayer: this.removePlayerHandler,
                    next: this.nextHandler,
                    getNewLooser: this.generateLooser,
                    resetGame: this.resetGame
                }}>
                    {this.props.children}
                </MyContext.Provider>
                <ToastContainer />
            </>
        )
    }
}

export { MyContext, MyProvider }