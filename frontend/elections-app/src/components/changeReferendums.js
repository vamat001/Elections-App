import React, { Component } from "react";
import axios from "axios";
import firebase from "firebase";
import { Container, Row, Col, Form, Navbar, Nav, Button, InputGroup, FormControl, Dropdown, DropdownButton, Modal, Card } from "react-bootstrap";
const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";

class ChangeReferendums extends Component {
   constructor(props){
      super(props);
      this.state = {
         referendumName: '',
         referendumDescription: '',
         referendumImplication: '',
         showModal: false,
         key: "link-1",
         allReferendums: [],
      }
   }
   async componentDidMount(){
      await axios.get(API_BASE + "/NewReferendums")
         .then((res) => {
            this.setState({allReferendums: res.data});
         })
   }
   handleChange = e => {

      this.setState({ [e.target.name]: e.target.value });
   }
   openModal = () => {
      this.setState({showModal: true});
   }
   handleModalClose = () => {
      this.setState({showModal: false});
   }
   removeReferendum = async(referendum) => {
      const db = firebase.firestore();
      let allReferendums = null;
      if(this.state.allReferendums.length > 0){
         await db.collection("NewReferendums").doc(referendum.ID).delete().then(function() {
             console.log("Document successfully deleted!");
         }).catch(function(error) {
             console.error("Error removing document: ", error);
         });
         allReferendums = this.state.allReferendums.filter(r => r.ID !== referendum.ID);
         this.setState({allReferendums});
      }
   }
   handleSubmit = async(event) => {
      event.preventDefault();
      const db = firebase.firestore();
      let collectionSize = 0;
      await db.collection('NewReferendums').get().then(snap => {
       collectionSize = snap.size;
      });
      let referendumID = `Referendum${collectionSize + 1}`;
      db.collection("NewReferendums").doc(referendumID).set({
       ID: referendumID,
       name: this.state.referendumName,
       description: this.state.referendumDescription,
       implication: this.state.referendumImplication,
       })
       .then(this.openModal()
       )
      .catch(function(error) {
         console.error("Error writing document: ", error);
      });
   }
   logout = () => {
      console.log("comes here");
      firebase.auth().signOut().then(function() {
         console.log("signed out");
      }).catch(function(error) {
         console.log(error);
      });
      this.props.history.push("/");
   }
   render(){
      return(
         <div>
         <Navbar bg="primary" variant="light">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/UpdateCandidates">Change Candidates</Nav.Link>
            <Nav.Link href="/ChangeReferendums">Change Referendums</Nav.Link>
            <Nav.Link href="/ApproveCandidates">Approve Candidates</Nav.Link>
          </Nav>
          <Nav>
             <Button onClick={this.logout} style={{backgroundColor:'gray'}}>
                Logout
             </Button>
          </Nav>
        </Navbar>
        <Row className="justify-content-center" style={{paddingTop: "3%", paddingBottom: "3%"}}>
            <Nav variant="pills" defaultActiveKey="link-1" onSelect={key => this.setState({key})}>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Add Referendums</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">View Referendums</Nav.Link>
              </Nav.Item>
            </Nav>
         </Row>

         {
            this.state.key === "link-1" ?
            <div style={{backgroundColor: '#edecf0', width: "100%", height: "80vh"}}>
               <div>
                  <Row className="justify-content-center" style={{paddingTop: "2%", paddingBottom: "0%"}}>
                     <h4>Add New Referendum </h4>
                  </Row>
                  <Form onSubmit={this.handleSubmit}>
                     <Row style={{paddingTop: "1%", paddingBottom: "0%"}}>
                        <Col style={{paddingLeft: "5%", paddingRight: "10%"}}>
                           <Form.Label>Referendum Name</Form.Label>
                           <Form.Control
                            name="referendumName"
                            placeholder="Enter Referendum Name"
                            value={this.state.referendumName}
                            onChange={this.handleChange}
                            />
                         </Col>
                     </Row>

                     <br/>
                     <Row style={{paddingTop: "0%", paddingBottom: "0%"}}>
                        <Col style={{paddingLeft: "5%", paddingRight: "10%"}}>
                           <Form.Label>Referendum Description</Form.Label>
                             <Form.Control
                             style={{height: "10vh"}}
                               as="textarea"
                               name="referendumDescription"
                               aria-label="With textarea"
                               placeholder=""
                               value={this.state.referendumDescription}
                               onChange={this.handleChange}
                               />

                        </Col>
                     </Row>
                     <br/>
                     <Row style={{paddingTop: "0%", paddingBottom: "0%"}}>
                        <Col style={{paddingLeft: "5%", paddingRight: "10%"}}>
                           <Form.Label>Referendum Implication</Form.Label>
                             <Form.Control
                             style={{height: "10vh"}}
                               as="textarea"
                               name="referendumImplication"
                               aria-label="With textarea"
                               placeholder=""
                               value={this.state.referendumImplication}
                               onChange={this.handleChange}
                               />

                        </Col>
                     </Row>
                     <br />
                     <br />
                     <Row className="justify-content-center" style={{paddingTop: "0%", paddingBottom: "0%"}}>
                        <Button variant="primary" type="submit">
                           Add Referendum
                        </Button>
                     </Row>
                  </Form>
                  <Modal show={this.state.showModal} onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Success</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, Referendum Added Successfully!</Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" onClick={this.handleModalClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
               </div>
            </div>
            : null
      }


      {/* =================================================================================================== */}


      {
         this.state.key === "link-2" ?
         <Container>
         {
            this.state.allReferendums.map(referendum => (
               <div>
               <Card>
                 <Card.Header as="h5">{referendum.ID}</Card.Header>
                 <Card.Body>
                   <Card.Title>{referendum.name}</Card.Title>
                   <Card.Text>
                     {referendum.description}
                   </Card.Text>
                   <Card.Text>
                     {referendum.implication}
                   </Card.Text>
                   <Row style={{paddingTop: 0, paddingBottom: 0}}>
                     <Col md={{ span: 2, offset: 6 }}>
                        <Button variant="dark">Edit</Button>
                     </Col>
                     <Col md={{ span: 2}}>
                        <Button onClick={() => this.removeReferendum(referendum)} variant="danger">Delete</Button>
                     </Col>
                    </Row>
                 </Card.Body>
               </Card>
               <br/>
               </div>
         ))
      }
         </Container>
         : null
      }


        </div>
      );
   }
}

export default ChangeReferendums;
