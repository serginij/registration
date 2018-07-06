import React from 'react';
import '../../../bootstrap.css'

import Card from '../Card/Card';

export const profile = (onClick, onChange, props) => (
    <Card>
        <h4>Your account</h4>
        <div className='profile'>
        <div>
            <h5>Name</h5>
            <p>{props.name}</p>
            <h5>Surname</h5>
            <p>{props.surname}</p>
            <h5>Email</h5>
            <p>{props.email}</p>
            <h5>Country code</h5>
            <p>{props.country}</p>
            <h5>Username</h5>
            <p>{props.username}</p>
            <h5>Password</h5>
            <p>{props.password}</p>
        </div>
            <img src={props.imgUrl} alt='avatar' className='pict' />
        </div>
    </Card>
);
