import React, { Component } from "react";
import axios from "axios";
import firebase from "firebase";
import { Container, Row, Col, Form, Navbar, Nav, Button, InputGroup, FormControl, Dropdown, DropdownButton, Modal, Card, Spinner } from "react-bootstrap";
const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";

class AdminLogin extends Component {
   constructor(props){
      super(props);
      this.state = {
         email: '',
         password: '',
         token: '',
         loading: false
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
      this.setState({loading: true});

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
         this.setState({loading: false});
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
            {
               this.state.loading ?
               <Row className="justify-content-center" style={{paddingTop: 0}}>
                  <Spinner animation="border" role="status" size="lg">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
               </Row>
               :  null


            }

         </Container>
      );
   }
}

export default AdminLogin;
