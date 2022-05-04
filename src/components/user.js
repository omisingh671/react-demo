import React, { Component } from 'react';
import UserItem from './useritem';
import { MyContext } from '../context';

class User extends Component {

    //static contextType = MyContext;

    render() {

        //console.log(this.context);

        return (
            <>
                <MyContext.Consumer>
                    {
                        context => {
                            console.log(context);
                        }
                    }
                </MyContext.Consumer>
                <UserItem />
            </>
        )
    }
}

export default User;