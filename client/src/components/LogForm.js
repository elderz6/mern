import React, {Component} from 'react';
import {
    Form,
    Input,
    Label,
    Button,
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';
import RegisterForm from './RegisterForm';


class LogForm extends Component
{
  constructor(props)
  {
    super(props);
      this.state = {visible:true,
      display:'grid',
      width:'50%',
      margin:'auto'
    };
      this.toggle = this.toggle.bind(this);
  }

  toggle()
  {
      this.setState({visible: !this.state.visible, display:'none'});
  }

  render()
  {
    return(
      <div>
            <Form className='text-center' style={this.state}>
              <Label>
                Username
                <Input/>
              </Label>
              <br />
              <Label>
                Password
                <Input
                  type='password' />
              </Label>
              <br/>
              <Button outline color='primary'>
                Login
              </Button>
              <br />
              <Button outline color='success' onClick={this.toggle}>
                Register
              </Button>
          </Form>
          { !this.state.visible && <RegisterForm /> }
      </div>
    )
  }
}

export default LogForm
