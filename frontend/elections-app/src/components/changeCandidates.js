import React, { Component } from "react";
import axios from "axios";
import "./changeCandidates.css";
import firebase from "firebase";
import { Container, Row, Col, Form, Navbar, Nav, Button, InputGroup, FormControl, Dropdown, DropdownButton, Modal, Table } from "react-bootstrap";
const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";

class ChangeCandidates extends Component {
   constructor(props){
      super(props);
      this.state = {
         key: "link-1",
         candidateFirstName: "",
         candidateLastName: "",
         college: '',
         runningFor: '',
         major: '',
         studentStanding: '',
         candidateDescription: "",
         showModal: false,
         allCandidates: []

      }
   }

async componentDidMount(){
   await axios.get(API_BASE + "/getAllPositions")
      .then((res) => {
         this.setState({allCandidates: res.data});
      })
}

   handleChange = e => {

      this.setState({ [e.target.name]: e.target.value });
   }
   storeData = (data) => {
   for (let key in data) {
      this.setState({[key]: data[key]});
   }
}

bubbleChange = (e) => {
   this.setState({studentStanding: e.target.value});
}

removeCandidate = async(candidate) => {
   const db = firebase.firestore();
   let allCandidates = null;
   if(this.state.allCandidates.length > 0){
      await db.collection("undergradCandidates").doc(candidate.ID).delete().then(function() {
          console.log("Document successfully deleted!");
      }).catch(function(error) {
          console.error("Error removing document: ", error);
      });
      allCandidates = this.state.allCandidates.filter(c => c.ID !== candidate.ID);
      this.setState({allCandidates});
   }
}

handleSubmit = async(event) => {
   event.preventDefault();
   const db = firebase.firestore();
   let collectionSize = 0;
   await db.collection('undergradCandidates').get().then(snap => {
    collectionSize = snap.size;
   });
   let gradStudent = false;
   let candidateName = this.state.candidateFirstName + " " + this.state.candidateLastName;
   let candidateID = `uid${collectionSize + 1}`;

   if(this.state.studentStanding === "grad"){
      gradStudent = true;
   }else if(this.state.studentStanding === "undergrad"){
      gradStudent = false;
   }

   db.collection("undergradCandidates").doc(candidateID).set({
    name: candidateName,
    ID: candidateID,
    major: this.state.major,
    runningFor: this.state.runningFor,
    picture: "storage",
    description: this.state.candidateDescription,
    college: this.state.college
    })
    .then(this.openModal()
    )
   .catch(function(error) {
      console.error("Error writing document: ", error);
   });
}
openModal = () => {
   this.setState({showModal: true});
}
handleModalClose = () => {
   this.setState({showModal: false});
}
   render(){
      console.log(this.state);
      return(
         <div>
         <Navbar bg="primary" variant="light">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/UpdateCandidates">Change Candidates</Nav.Link>
            <Nav.Link href="/ChangeReferendums">Change Referendums</Nav.Link>
            <Nav.Link href="/ApproveCandidates">Approve Candidates</Nav.Link>
          </Nav>
          <Nav>
             <Button style={{backgroundColor:'gray'}}>
                Logout
             </Button>
          </Nav>
        </Navbar>
        <Row className="justify-content-center" style={{paddingTop: "3%", paddingBottom: "3%"}}>
            <Nav variant="pills" defaultActiveKey="link-1" onSelect={key => this.setState({key})}>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Add Candidates</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">View Candidates</Nav.Link>
              </Nav.Item>
            </Nav>
         </Row>

         {
            this.state.key === "link-1" ?
            <div style={{backgroundColor: '#edecf0', width: "100%", height: "150vh"}}>
               <div>
                  <Row className="justify-content-center" style={{paddingTop: "2%", paddingBottom: "0%"}}>
                     <h4>Add New Candidate </h4>
                  </Row>
                  <Form onSubmit={this.handleSubmit}>
                     <Row style={{paddingTop: "1%", paddingBottom: "0%"}}>
                        <Col style={{paddingLeft: "5%", paddingRight: "10%"}}>
                           <Form.Label>First Name</Form.Label>
                           <Form.Control
                            name="candidateFirstName"
                            placeholder="Enter First Name"
                            value={this.state.candidateFirstName}
                            onChange={this.handleChange}
                            />
                         </Col>
                     </Row>
                     <br/>
                     <Row style={{paddingTop: "0%", paddingBottom: "0%"}}>
                        <Col style={{paddingLeft: "5%", paddingRight: "10%"}}>
                           <Form.Label>Last Name</Form.Label>
                           <Form.Control
                            name="candidateLastName"
                            placeholder="Enter Last Name"
                            value={this.state.candidateLastName}
                            onChange={this.handleChange}
                            />
                         </Col>
                     </Row>
                     <br/>
                     <Row style={{paddingTop: "0%", paddingBottom: "0%"}}>
                        <Col style={{paddingLeft: "5%", paddingRight: "10%"}}>
                           <Form.Label>Major</Form.Label>
                           <Form.Control
                            name="major"
                            placeholder="Enter Major"
                            value={this.state.major}
                            onChange={this.handleChange}
                            />
                         </Col>
                     </Row>
                     <br/>
                     <Row style={{paddingTop: "0%", paddingBottom: "0%"}}>
                        <Col md={3} style={{paddingLeft: "5%", paddingRight: "0%"}}>
                           <DropdownButton id="college-item-button" title="Select College" onSelect={college => this.setState({college})}>
                             <Dropdown.Item eventKey="BCOE">BCOE</Dropdown.Item>
                             <Dropdown.Item eventKey="CHASS">CHASS</Dropdown.Item>
                             <Dropdown.Item eventKey="CNAS">CNAS</Dropdown.Item>
                           </DropdownButton>
                        </Col>
                        <Col style={{paddingTop: "1%"}}>
                           {this.state.college !== "" ?
                              <h5 style={{paddingLeft: 0}}>Selected College: {this.state.college}</h5>
                              : null
                           }
                        </Col>
                     </Row>
                     <br/>
                     <Row style={{paddingTop: "0%", paddingBottom: "0%"}}>
                        <Col md={3} style={{paddingLeft: "5%", paddingRight: "0%"}}>
                           <DropdownButton id="position-item-button" title="Select Position" onSelect={runningFor => this.setState({runningFor})}>
                             <Dropdown.Item eventKey="President">President</Dropdown.Item>
                             <Dropdown.Item eventKey="Vice President">Vice President</Dropdown.Item>
                             <Dropdown.Item eventKey="Secretary">Secretary</Dropdown.Item>
                             <Dropdown.Item eventKey="Treasurer">Treasurer</Dropdown.Item>
                             <Dropdown.Item eventKey="BCOE Senator">BCOE Senator</Dropdown.Item>
                             <Dropdown.Item eventKey="CHASS Senator">CHASS Senator</Dropdown.Item>
                             <Dropdown.Item eventKey="CNAS Senator">CNAS Senator</Dropdown.Item>
                           </DropdownButton>
                        </Col>
                        <Col style={{paddingTop: "1%"}}>
                           {this.state.runningFor !== "" ?
                              <h5 style={{paddingLeft: 0}}>Running For: {this.state.runningFor}</h5>
                              : null
                           }
                        </Col>
                     </Row>
                     <br/>
                     <Row style={{paddingTop: "0%", paddingBottom: "0%"}}>
                        <Col style={{paddingLeft: "5%", paddingRight: "10%"}}>
                           <Form.Label>Student Standing</Form.Label>

                         </Col>

                     </Row>
                     <Row style={{paddingTop: "0%", paddingBottom: "0%", justifyContent: 'left', paddingLeft: "4%"}}>
                     <Col md={3}>
                        <input type="radio" name="demo" value="undergrad" id="radio-one" className="form-radio"
                        checked={this.state.studentStanding === "undergrad"}  onChange={this.bubbleChange}/>
                        <label className="candidateRadio" for="radio-one">Undergraduate</label>
                     </Col>
                     <Col md={3}>
                        <input type="radio" name="demo" value="grad" id="radio-two" className="form-radio"
                        checked={this.state.studentStanding === "grad"}  onChange={this.bubbleChange}/>
                        <label className="candidateRadio" for="radio-two">Graduate</label>
                     </Col>
                     </Row>
                     <br/>
                     <Row style={{paddingTop: "0%", paddingBottom: "0%"}}>
                        <Col style={{paddingLeft: "5%", paddingRight: "10%"}}>
                           <Form.Label>Candidate Description</Form.Label>
                             <Form.Control
                             style={{height: "20vh"}}
                               as="textarea"
                               name="candidateDescription"
                               aria-label="With textarea"
                               placeholder=""
                               value={this.state.candidateDescription}
                               onChange={this.handleChange}
                               />

                        </Col>
                     </Row>
                     <br />
                     <br />
                     <Row className="justify-content-center" style={{paddingTop: "0%", paddingBottom: "0%"}}>
                        <Button variant="primary" type="submit">
                           Add Candidate
                        </Button>
                     </Row>
                  </Form>
                  <Modal show={this.state.showModal} onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Success</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, Candidate Added Successfully!</Modal.Body>
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
               <Table striped bordered hover>
               <thead>
                <tr>
                  <th>Name</th>
                  <th>Major</th>
                  <th>Candidate ID</th>
                  <th>Running For</th>
                  <th>Student Standing</th>
                </tr>
              </thead>
              <tbody>
               {this.state.allCandidates.map(candidate => (
                  <tr key={candidate.ID}>
                     <td>{candidate.name}</td>
                     <td>{candidate.major}</td>
                     <td>{candidate.ID}</td>
                     <td>{candidate.runningFor}</td>
                     <td>{candidate.gradStudent}</td>
                     <td>
                     <button onClick={() => this.removeCandidate(candidate)} className="btn btn-danger btn-sm">
                        Delete
                     </button>
                     </td>
                  </tr>
               ))}
              </tbody>

               </Table>
            </Container>
            : null
         }

         </div>
      );
   }
}

export default ChangeCandidates;
