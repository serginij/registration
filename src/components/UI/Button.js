import React from 'react';

import '../../bootstrap.css';

const button = (props) => (
    <div className='nextbtn'>
        <button type='submit' className={props.class} onClick={props.onClick}>{props.children}</button>
    </div>
);

export default button;