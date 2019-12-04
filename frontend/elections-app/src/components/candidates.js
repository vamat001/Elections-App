import React, { Component } from "react";
import { Card, CardDeck, Button, Form, } from "react-bootstrap";
import NavHeader from "./NavHeader.js";
import Sidebar from "./Sidebar.js";
import "./Sidebar.css";
import firebase, { auth, provider, firestore } from "./firebase.js";

class candidates extends Component {

  constructor() {
    super();
    firebase
      .firestore()
      .collection("undergradCandidates")
      .onSnapshot(
        querySnapshot => {
          this.setState({
            candidatesArray: querySnapshot.docs.map(doc => {
              return {
                runningFor: doc.data().runningFor,
                name: doc.data().name,
                id: doc.data().ID,
                gradStudent: doc.data().gradStudent,
                description: doc.data().description,
                major: doc.data().major
              };
            })
          });
        },
        () => null
      );
      this.setState({
          apply: false,
      });
  }

applyClick = () => {
    this.setState({
        apply: true,
    });
};

cancel = () => {
    this.setState({
        apply: false,
    });
}

handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
}

handleSubmit = async (event) => {
    event.preventDefault();
    let uid = firebase.auth().currentUser.uid;
    const db = firebase.firestore();
    db.collection("unapprovedCandidates").doc(uid).set({
        name: this.state.fullname,
        id: uid,
        major: this.state.major,
        runningFor: this.state.runningFor,
        description: this.state.description,
        college: this.state.college,
    });
    this.setState({
        apply: false,
    });
}

  render() {
    if (this.state) {
        if (this.state.candidatesArray) {
            if (!this.state.apply) {
                const cardLists = this.state.candidatesArray.map(can => {
                    if (!can.gradStudent) {
                        return (
                            <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title">{can.name}</h5>
                                    <p class="card-text">{can.description}</p>
                                </div>
                            </div>
                        );
                    }
                });
                return (
                    <div class="site-wrap">
                        <div class="site-mobile-menu site-navbar-target">
                            <div class="site-mobile-menu-header">
                                <div class="site-mobile-menu-close mt-3">
                                    <span class="icon-close2 js-menu-toggle"></span>
                                </div>
                            </div>
                            <div class="site-mobile-menu-body"></div>
                        </div>
                        <Button variant="primary" size="lg" onClick={this.applyClick} block>
                            Apply To Be A Candidate Now!
                        </Button>
                        <div class="container d-none d-lg-block">
                            <div class="row">
                                <div class="col-12 text-center mb-4 mt-5">
                                    <img
                                        class="mb-0 site-logo"
                                        id="logoPic"
                                        src="images/asucrlogo.png"
                                    ></img>
                                </div>
                            </div>
                        </div>
                        <NavHeader />
                        <div class="container site-section padTop" data-aos="fade-up">
                            <div class="row">
                                <Sidebar />
                                <div class="col-lg-9">{cardLists}</div>
                            </div>
                        </div>
                    </div>
                );
            }
            else {

                return (
                    <li class="list-group-item">
                        <Card text="black" style={{ width: "auto" }}>
                            <Card.Header>Apply To Be A Candidate</Card.Header>
                            <Card.Body>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="fullname">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control placeholder="First Last"
                                            name="fullname"
                                            value={this.state.fullname}
                                            onChange={this.handleChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="College" >
                                        <Form.Label>College</Form.Label>
                                        <Form.Control placeholder="i.e. BCOE"
                                            name="college"
                                            value={this.state.college}
                                            onChange={this.handleChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="Major">
                                        <Form.Label>Major</Form.Label>
                                        <Form.Control placeholder="i.e. Computer Science"
                                            name="major"
                                            value={this.state.major}
                                            onChange={this.handleChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="RunningFor">
                                        <Form.Label>What position are you running for?</Form.Label>
                                        <Form.Control placeholder="i.e. President"
                                            name="runningFor"
                                            value={this.state.runningFor}
                                            onChange={this.handleChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="Description">
                                        <Form.Label>Why should people vote for you?</Form.Label>
                                        <Form.Control placeholder="Description"
                                            name="description"
                                            value={this.state.description}
                                            onChange={this.handleChange}/>
                                        <Form.Text className="text-muted">
                                            This description may become public to prospective voters.
                                        </Form.Text>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                    <Button variant="danger" onClick={this.cancel}>
                                        Cancel
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </li>
                    );
            }
        }
    } else {
      return <div></div>;
    }
  }
}

export default candidates;