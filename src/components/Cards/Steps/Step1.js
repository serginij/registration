import React from 'react';
import '../../../bootstrap.css'

import CountrySelect from '../../UI/CountrySelect';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import Card from '../Card/Card';

export const step1 = (onClick, onChange, data) => {
    let clicked = onClick;
    if (data.country === '' || data.name === '' || data.surname === '') {
      clicked = null;
    }
    return (
      <Card>
            <h4>Enter your data</h4>
            <CountrySelect value={data.country} onChange={onChange} />
            <Input
              id='name'
              title='First name'
              placeholder='Enter your 1st name'
              type='text'
              class='form-control'
              onChange={onChange}
              value={data.name} />
            <Input
              id='surname'
              title='Second name'
              placeholder='Enter your 2st name'
              type='text'
              class='form-control'
              onChange={onChange}
              value={data.surname} />
            <Button 
              class='btn btn-outline-primary'
              onClick={clicked}>Next</Button>
      </Card>
    )
};
