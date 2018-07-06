import React from 'react';
import '../../../bootstrap.css'

import Input from '../../UI/Input';
import Button from '../../UI/Button';
import Card from '../Card/Card';

export const step3 = (onClick, onChange, data) => {
    let src = data.imgUrl;
    if (!data.imgUrl) {
        src = 'http://apschool.ru/wp-content/plugins/ultimate_testimonials_plugin/assets/img/avatar.jpg';
    }
    let clicked = onClick;
    if (data.img === '') {
      clicked = null;
    }    
    return (
        <Card>
            <h4>Enter your data</h4>
            <Input
                id='imgUrl'
                title='Image'
                placeholder='Enter link to image'
                type='link'
                class='form-control'
                onChange={onChange}
                value={data.imgUrl} />
            <div className='avatar'>
                <img src={src} alt='avatar' className='pic' />
            </div>    
            <Button 
                class='btn btn-outline-primary'
                onClick={clicked}>Submit</Button>
        </Card>
    )
};
