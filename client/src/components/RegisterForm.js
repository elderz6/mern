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
import { connect } from 'react-redux';
import { registerUser } from '../actions/registerActions';

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
        modal:false,
          name:'',
          password:'',
          email:''
      };
      this.toggle = this.toggle.bind(this);
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e)
  {
    e.preventDefault();

    const newUser = {
      name:this.state.name,
      password:this.state.password,
      email:this.state.email
    }
    this.props.registerUser(newUser);
    this.toggle();
    console.log(newUser);
    window.location.reload();
  }

  onChange(e)
  {this.setState({[e.target.name]:e.target.value})};

  toggle()
  {

  };

  render()
  {
    return(
      <div>
        <Form onSubmit={this.onSubmit} style={modStyle}>
              <Label>
                Username
                <Input name='name' onChange={this.onChange}/>
              </Label>
              <br />

              <Label>
                Email
                <Input name='email' onChange={this.onChange}/>
              </Label>
              <br/>

                <Label>
                  Password
                  <Input name='password' type='password' onChange={this.onChange}/>
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
      </div>
    )
  }
}
const mapStateToProps = state => ({
    user: state.user
})

export default connect(
  mapStateToProps,{ registerUser })(RegisterForm);
