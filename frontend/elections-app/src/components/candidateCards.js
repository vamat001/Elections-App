import React, { Component } from "react";
import axios from "axios";
import firebase from "firebase";
//import sampleImage from "./img_avatar.png";
import { Container, Row, Col, Form, Navbar, Nav, Button, InputGroup, FormControl, Dropdown, DropdownButton, Modal, Card} from "react-bootstrap";
const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";


class CandidateCards extends Component {
   constructor(props){
      super(props);
      this.state = {
         showModal: false,
      }
   }

   showCandidateInfo = (candidate) => {
      console.log("candidate info",candidate);
   }
   openModal = () => {
      this.setState({showModal: true});
   }
   handleModalClose = () => {
      this.setState({showModal: false});
   }

   acceptCandidate = () => {

   }
   rejectCandidate = () => {

   }

   render(){
      return(
         <div>
            <Card bg="secondary" text="white" style={{ width: '20rem', cursor: 'pointer' }} onClick={this.openModal}>
               <Card.Header>{this.props.name}</Card.Header>
              <Card.Body>

                <Card.Text>
                  {this.props.college}
                </Card.Text>
                <Card.Text>
                  {this.props.runningFor}
                </Card.Text>
                <Row style={{paddingLeft: "2%", paddingRight: 0}}>
                   <Col style={{paddingLeft: "2%", paddingRight: 0}}>
                     <Button onClick={() => {this.props.handleAccept(this.props.ID)}} variant="success">Accept</Button>
                   </Col>
                   <Col style={{paddingLeft: 0, paddingRight: 0}}>
                     <Button onClick={() => {this.props.handleDelete(this.props.ID)}} variant="danger">Reject</Button>
                   </Col>
                </Row>
              </Card.Body>
            </Card>
            <Modal show={this.state.showModal} onHide={this.handleModalClose}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>College: {this.props.college}</Modal.Body>
               <Modal.Body>Running For: {this.props.runningFor}</Modal.Body>
                <Modal.Body>Description: {this.props.description}</Modal.Body>
              <Modal.Footer>
                 <Row>
                    <Col>
                      <Button onClick={() => {this.props.handleAccept(this.props.ID)}} variant="success">Accept</Button>
                    </Col>
                    <Col>
                      <Button onClick={() => {this.props.handleDelete(this.props.ID)}} variant="danger">Reject</Button>
                    </Col>
                 </Row>
              </Modal.Footer>
            </Modal>
         </div>
      );
   }
}

export default CandidateCards;
