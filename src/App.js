import React, { Component } from 'react';
import './bootstrap.css';

import logo from './assets/house.svg';
import avatar from './assets/avatar.svg';
import { cards } from './components/Cards/Cards';

class App extends Component {
  state = {
    steps: ['firstStep', 'secondStep', 'thirdStep', 'profile'],
    currentStep: 'firstStep',
    data: {
      name: '',
      surname: '',
      email: '',
      country: '',
      username: '',
      password: '',
      imgUrl: ''
    },
    currentInputValue: ''
  }

  onChangeHandler = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.id]: e.target.value
      }
    });
  }

  showMainHandler = () => {
    this.setState({ currentStep: 'firstStep' });
  }

  showProfileHandler = () => {
    this.setState({ currentStep: 'profile' });
  }

  onClickHandler = () => {
    if (this.state.currentStep !== 'thirdStep') {
      let step = this.state.steps[this.state.steps.indexOf(
        this.state.currentStep) + 1];
      this.setState({ currentStep: step });
    }
    else {
      this.setState({ currentStep: 'firstStep' });
    }
  }

  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
          <img src={logo} className='logo' alt='main' onClick={this.showMainHandler} />
          <p className='navbar-brand' onClick={this.showMainHandler} >Registration</p>
          <img src={avatar} className='logo' alt='account' onClick={this.showProfileHandler} />
        </nav>
        {cards[this.state.currentStep](this.onClickHandler, this.onChangeHandler, this.state.data)}
      </div>
    );
  }
}

export default App;
