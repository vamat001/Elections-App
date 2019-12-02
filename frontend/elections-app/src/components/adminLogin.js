import React, { Component } from "react";
import axios from "axios";
import firebase from "firebase";
import { Container, Row, Col, Form, Navbar, Nav, Button, InputGroup, FormControl, Dropdown, DropdownButton, Modal, Card } from "react-bootstrap";
const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";

class AdminLogin extends Component {
   constructor(props){
      super(props);
      this.state = {
         email: '',
         password: '',
         token: ''
      }
   }

   handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
   }

   login = async(event) => {
      event.preventDefault();
      const userData = {
      email: this.state.email,
      password: this.state.password
      }

      await axios.post(API_BASE + '/adminLogin', userData)
         .then((res) => {
            this.setState({ token: res.data.token });
            console.log("Updated token ",this.state);
         })
      const newToken = {
         token: this.state.token
      }
      let isAdmin = false;
      let uid = '';
      await axios.post(API_BASE + '/claims', newToken)
         .then((res) => {
            //console.log(res);
            try{
               if(res.data.admin === true){
                  uid = res.data.uid;
                  //this.props.history.push("/dashboard");
                  isAdmin = true;
               }
            }catch(error){
               console.log(error);
            }
         })

         if(isAdmin === true){
            this.props.history.push('/UpdateCandidates');
         }else{
            alert("Not an admin account");
         }



   }

   render(){
      console.log(this.state);
      return(
         <Container>
            <Row style={{paddingTop: "5%"}} className="justify-content-center">
               <h1>Admin Login</h1>
            </Row>
            <Form style={{paddingTop: "10%"}} onSubmit={this.login}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.handleChange}/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleChange}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </Form>
         </Container>
      );
   }
}

export default AdminLogin;
