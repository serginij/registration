import React from 'react';

import './Card.css';

const card = (props) => (
    <form className='card'>
        {props.children}
    </form>
);

export default card;