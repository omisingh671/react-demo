import React from 'react';
import { Link } from 'react-router-dom';

const Adjel = () => {

    const ids = [
        { id: '1', name: 'Amar' },
        { id: '2', name: 'Vipin' },
        { id: '3', name: 'Saurav' },
        { id: '4', name: 'Nishant' },
        { id: '5', name: 'Uttam' }
    ];

    const list = ids.map(item => (
        <span key={item.id}>
            <Link to={item.id}>{item.name}</Link><br />
        </span>
    ))

    return (
        <>
            {list}
        </>
    );
}

export default Adjel;