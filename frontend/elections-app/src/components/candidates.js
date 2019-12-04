import React, { Component } from "react";
import NavHeader from "./NavHeader.js";
import sampleImage from "../avatar.png";
import firebase, { auth, provider, firestore } from "./firebase.js";
import { Card, Button, Row, Col } from "react-bootstrap";
import { RemoveScrollBar } from "react-remove-scroll-bar";

class candidates extends Component {
  constructor(props) {
    super(props);
    // this.state = { cantoggle: true };
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
    this.setState({ pres: false, vice: false, sen: false });
  }

  handlePres = () => {
    this.setState({ pres: false, vice: true, sen: true });
  };

  handleVice = () => {
    this.setState({ pres: true, vice: false, sen: true });
  };

  handleSen = () => {
    this.setState({ pres: true, vice: true, sen: false });
  };

  render() {
    if (this.state) {
      if (this.state.candidatesArray) {
        const cardLists = this.state.candidatesArray.map(can => {
          if (!this.state.pres) {
            if (can.runningFor == "President") {
              return (
                <Col md={4} style={{ paddingBottom: "3%" }}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={sampleImage} />
                    <Card.Body>
                      <Card.Title>{can.name}</Card.Title>
                      <Card.Text>{can.description}</Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }
          } else if (!this.state.vice) {
            if (can.runningFor == "VicePresident") {
              return (
                <Col md={4} style={{ paddingBottom: "3%" }}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={sampleImage} />
                    <Card.Body>
                      <Card.Title>{can.name}</Card.Title>
                      <Card.Text>{can.description}</Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }
          } else if (!this.state.sen) {
            if (can.runningFor == "Senator") {
              return (
                <Col md={4} style={{ paddingBottom: "3%" }}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={sampleImage} />
                    <Card.Body>
                      <Card.Title>{can.name}</Card.Title>
                      <Card.Text>{can.description}</Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }
          } else if (!this.state.sen && !this.state.vice && !this.state.pres) {
            return (
              <Col md={4} style={{ paddingBottom: "3%" }}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={sampleImage} />
                  <Card.Body>
                    <Card.Title>{can.name}</Card.Title>
                    <Card.Text>{can.description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          }
        });

        return (
          <div class="site-wrap">
            <RemoveScrollBar />
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
              <Row>
                <div class="col-sm-12 col-md-6 col-lg-3">
                  <ul class="list-group" style={{paddingTop: "2px"}}>
                    <li
                      class="list-group-item tableItem"
                      onClick={this.handlePres}
                    >
                      President
                    </li>
                    <li
                      class="list-group-item tableItem"
                      onClick={this.handleVice}
                    >
                      Vice President
                    </li>
                    <li
                      class="list-group-item tableItem"
                      onClick={this.handleSen}
                    >
                      Senator
                    </li>
                  </ul>
                </div>
                <div
                  style={{
                    width: "75%",
                    height: "100%"
                  }}
                >
                  <Row>{cardLists}</Row>
                  {/*{cardLists}*/}
                </div>
              </Row>
            </div>
          </div>
        );
      }
    } else {
      return <div></div>;
    }
  }
}

export default candidates;