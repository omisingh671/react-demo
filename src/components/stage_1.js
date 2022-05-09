import React, { useState, useContext, useRef } from 'react';
import { Button, Form, Alert, ListGroup } from 'react-bootstrap';

import { MyContext } from '../context';

const Stage1 = () => {

    const textInput = useRef();
    const context = useContext(MyContext);
    const [error, setError] = useState([false, '']);

    const handleSubmit = (event) => {
        event.preventDefault();

        const value = textInput.current.value;
        const validate = validateInput(value);

        if (validate) {
            // form is valid...add player
            setError([false, '']);

            context.addPlayer(value);

            textInput.current.value = '';
        }
        else {
            console.log(error);
        }

    }

    const validateInput = (value) => {

        if (value === '') {
            setError([true, 'Sorry, You need to add something']);
            return false;
        }
        if (value.length <= 2) {
            setError([true, 'Sorry, You need 3 charcters atleast']);
            return false;
        }
        return true;
    }

    console.log(context.state.players);

    return (
        <>
            <Form className='mt-4' onSubmit={handleSubmit}>
                <Form.Group className='mb-2'>
                    <Form.Control id="player" type='text' name='player' placeholder='Add player name' ref={textInput} />
                </Form.Group>

                {
                    error[0] ? <Alert variant='danger'>{error[1]}</Alert> : null
                }

                <Button className='miami' variant='primary' type='submit'>
                    Add Player
                </Button>

                {
                    (context.state.players && context.state.players.length) > 0 ?

                        <>
                            <div className='mt-4'>
                                <ListGroup>
                                    {
                                        context.state.players.map((item, index) => (
                                            <ListGroup.Item key={index} className='d-flex justify-content-between align-items-center'>
                                                {item}
                                                <span className='badge badge-danger rounded' onClick={() => context.removePlayer(index)}>X</span>
                                            </ListGroup.Item>
                                        ))
                                    }
                                </ListGroup>
                                <div className='action_button' onClick={() => context.next()}>
                                    Next
                                </div>
                            </div>
                        </>
                        : null
                }
            </Form>

        </>
    );
}

export default Stage1;