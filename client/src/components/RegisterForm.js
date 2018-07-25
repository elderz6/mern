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

const modStyle = {
  display:'grid',
  width:'50%',
  margin:'auto',
  borderRadius:'5px'
}
class RegisterForm extends Component
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
        <Button outline color='success' onClick={this.toggle}>
          Register
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Register
          </ModalHeader>
          <ModalBody>
            <Form style={modStyle}>
              <Label>
                Username
                <Input/>
              </Label>
              <br />

              <Label>
                Email
                <Input
                  type='password' />
              </Label>
              <br/>

                <Label>
                  Password
                  <Input
                    type='password' />
                </Label>
                <br/>

                <Label>
                  Confirm  Password
                  <Input
                    type='password' />
                </Label>
                <br/>

              <Button outline color='success'>
                Register
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default RegisterForm
