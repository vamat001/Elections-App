import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Navbar, Nav, Button, InputGroup, FormControl } from "react-bootstrap";
const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";

class Admin extends Component {
   constructor(props){
      super(props);
      this.state = {

      }
   }

   changeCandidates = () => {
      this.props.history.push("/UpdateCandidates");
   }

   render(){
      return(
         <Navbar bg="primary" variant="light">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={this.changeCandidates}>Change Candidates</Nav.Link>
            <Nav.Link>Change Referendums</Nav.Link>
            <Nav.Link>Approve Candidates</Nav.Link>
          </Nav>
          <Nav>
             <Button style={{backgroundColor:'gray'}}>
                Logout
             </Button>
          </Nav>
        </Navbar>
      );
   }
}

export default Admin;
