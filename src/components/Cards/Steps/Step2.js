import React from 'react';
import '../../../bootstrap.css'

import Input from '../../UI/Input';
import Button from '../../UI/Button';
import Card from '../Card/Card';

export const step2 = (onClick, onChange, data) => {
  let clicked = onClick;
  if (data.email === '' || data.username === '' || data.password === '') {
    clicked = null;
  }
    return (
      <Card>
            <h4>Enter your data</h4>
            <Input
              id='email'
              title='Email'
              placeholder='Enter your e-mail'
              type='email'
              class='form-control'
              onChange={onChange}
              value={data.email} />
            <Input
              id='username'
              title='Username'
              placeholder='Enter your username'
              type='text'
              class='form-control'
              onChange={onChange}
              value={data.username} />
          <Input
              id='password'
              title='Password'
              placeholder='Enter your password'
              type='password'
              class='form-control'
              onChange={onChange}
              value={data.password} />
            <Button 
              class='btn btn-outline-primary'
              onClick={clicked}>Next</Button>
      </Card>
)
};
