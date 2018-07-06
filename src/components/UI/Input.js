import React from 'react';

import '../../bootstrap.css';

const input = (props) => (
    <div className='inputDiv'>
        <label htmlFor={props.id}>{props.title}</label>
        <input onChange={props.onChange} type={props.type} className={props.class} placeholder={props.placeholder} id={props.id} required value={props.value} />
    </div>
);

export default input;