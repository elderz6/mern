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


const modStyle = {
  display:'grid',
  width:'50%',
  margin:'auto',
  borderRadius:'5px'
}

class LogForm extends Component
{
  constructor(props)
  {
    super(props);
      this.state =
      {
        modal:false
      };
      this.toggle = this.toggle.bind(this);

  }
  toggle()
  {
    this.setState({
      modal:!this.state.modal
    });
  };

  render()
  {
    return(
      <div>
        <Button  color='info' onClick={this.toggle}>
          Login
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Login
          </ModalHeader>
          <ModalBody>
            <Form style={modStyle}>
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
              <div style={{margin:'auto'}}>
                <RegisterForm />
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }

}

export default LogForm
