import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class SignupForm extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      username:'',
      email:'',
      password:'',
      passwordConfirmation:'',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e)
  {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onSubmit(e)
  {
    e.preventDefault();
    console.log(this.state);
  }
  render()
  {
    return(
      <Form onSubmit={this.onSubmit}>
        <h1>Join the community or something</h1>
        <FormGroup>
          <Label className='control-label'>Username</Label>
          <Input
            value={this.state.username}
            type='text'
            name='username'
            className='form-control'
            onChange={this.onChange}
             />
        </FormGroup>
        <FormGroup>
          <Label className='control-label'>Email</Label>
          <Input
            value={this.state.email}
            type='text'
            name='email'
            className='form-control'
            onChange={this.onChange}
             />
        </FormGroup>
        <FormGroup>
          <Label className='control-label'>Password</Label>
          <Input
            value={this.state.password}
            type='password'
            name='password'
            className='form-control'
            onChange={this.onChange}
             />
        </FormGroup>
        <FormGroup>
          <Label className='control-label'>Password Confirmation</Label>
          <Input
            value={this.state.passwordConfirmation}
            type='password'
            name='passwordConfirmation'
            className='form-control'
            onChange={this.onChange}
             />
        </FormGroup>
        <FormGroup>
          <Button>
            Sign up
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default SignupForm
;
