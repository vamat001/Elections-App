import React, { Component } from "react";
import axios from "axios";
import firebase from "firebase";
//import sampleImage from "./img_avatar.png";
import CandidateCards from "./candidateCards";
import { Container, Row, Col, Form, Navbar, Nav, Button, InputGroup, FormControl, Dropdown, DropdownButton, Modal, Card} from "react-bootstrap";

const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";


class ApproveCandidates extends Component {
   constructor(props){
      super(props);
      this.state = {
         unapprovedCandidates: [],
         modal1: false,
         modal2: false,
         name: '',
         college: '',
         description: '',
         runningFor: ''

      };
   }
   async componentDidMount(){
      await axios.get(API_BASE + "/unapprovedCandidates")
         .then((res) => {
            this.setState({unapprovedCandidates: res.data});
         })
   }
   showCandidateInfo = (candidate) => {
      console.log("candidate info",candidate);
   }
   handleModalClose = () => {
      this.setState({showModal: false});
   }
   openModal1 = () => {
      this.setState({modal1: true})
   }
   closeModal1 = () => {
      this.setState({modal1: false});
   }
   openModal2 = () => {
      this.setState({modal2: true})
   }
   closeModal2 = () => {
      this.setState({modal2: false});
   }
   deleteCandidate = async(ID) => {
      console.log(ID);
      let unapprovedCandidates = null;
      const db = firebase.firestore();
      if(this.state.unapprovedCandidates.length > 0){
         await db.collection("unapprovedCandidates").doc(ID).delete().then(function() {
             console.log("Document successfully deleted!");
         })
         .then(this.openModal2()
         )
         .catch(function(error) {
             console.error("Error removing document: ", error);
         });
         unapprovedCandidates = this.state.unapprovedCandidates.filter(r => r.ID !== ID);
         this.setState({unapprovedCandidates});
      }
   }
   acceptCandidate = async(ID) => {
      const db = firebase.firestore();
      let unapprovedCandidates = null;
      let collectionSize = 0;
      let approvedCandidate = this.state.unapprovedCandidates.filter(r => r.ID === ID);
      approvedCandidate = approvedCandidate[0];
      await db.collection('undergradCandidates').get().then(snap => {
       collectionSize = snap.size;
      });
      let candidateID = `uid${collectionSize + 1}`;
      await db.collection("undergradCandidates").doc(candidateID).set({
       ID: candidateID,
       name: approvedCandidate.name,
       description: approvedCandidate.description,
       major: approvedCandidate.major,
       runningFor: approvedCandidate.runningFor,
       picture: "None",
       college: approvedCandidate.college
       })
       .then(this.openModal1()
       )
      .catch(function(error) {
         console.error("Error writing document: ", error);
      });
      if(this.state.unapprovedCandidates.length > 0){
         await db.collection("unapprovedCandidates").doc(ID).delete().then(function() {
             console.log("Document successfully deleted!");
         })
         .catch(function(error) {
             console.error("Error removing document: ", error);
         });
         unapprovedCandidates = this.state.unapprovedCandidates.filter(r => r.ID !== ID);
         this.setState({unapprovedCandidates});
      }
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
        <Container>
         <Row className="justify-content-left" style={{paddingTop: "3%", paddingBottom: "3%"}}>
            {
               this.state.unapprovedCandidates.map(candidate => (
                  <li style={{ listStyleType: "none"}} key={candidate.ID}>
                  <Col md={4} style={{paddingBottom: "3%"}}>
                     <CandidateCards
                     name={candidate.name}
                     college={candidate.college}
                     description={candidate.description}
                     runningFor={candidate.runningFor}
                     ID={candidate.ID}
                     handleDelete={this.deleteCandidate}
                     handleAccept={this.acceptCandidate}
                     />
                  </Col>
                  </li>
               ))
            }

         </Row>
         <Modal show={this.state.modal1} onHide={this.closeModal1}>
           <Modal.Header closeButton>
             <Modal.Title>Success</Modal.Title>
           </Modal.Header>
           <Modal.Body>Candidate Accepted Successfully!</Modal.Body>
           <Modal.Footer>
             <Button variant="primary" onClick={this.closeModal1}>
               Close
             </Button>
           </Modal.Footer>
         </Modal>
         <Modal show={this.state.modal2} onHide={this.closeModal2}>
           <Modal.Header closeButton>
             <Modal.Title>Success</Modal.Title>
           </Modal.Header>
           <Modal.Body>Candidate Rejected Successfully!</Modal.Body>
           <Modal.Footer>
             <Button variant="primary" onClick={this.closeModal2}>
               Close
             </Button>
           </Modal.Footer>
         </Modal>

        </Container>
        </div>
      );
   }
}

export default ApproveCandidates;
