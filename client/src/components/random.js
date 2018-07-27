import React, { Component } from 'react';
import SignupForm from './signupform';

class SignupPage extends Component
{
  render()
  {
    return(
      <div>
        <div className='col-md-4 col-md-offset-4'>
          <h1>Sign Up page</h1>
          <SignupForm />
        </div>
      </div>
    );
  }
}

export default SignupPage;
