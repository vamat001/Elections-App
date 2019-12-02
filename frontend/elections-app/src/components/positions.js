import React, {
  Component,
  listgroup,
  listgroupitem,
  list,
  CardGroup,
  media
} from "react";
import firebase, { auth, provider, firestore } from "./firebase.js";
import { Card, CardDeck } from "react-bootstrap";

class positions extends Component {
  constructor() {
    super();
    firebase
      .firestore()
      .collection("Positions")
      .onSnapshot(
        querySnapshot => {
          this.setState({
            positionsArray: querySnapshot.docs.map(doc => {
              return {
                undergradCands: doc.data().undergradCandidates,
                description: doc.data().description,
                id: doc.id
              };
            })
          });
        },
        () => null
      );
    firebase
      .firestore()
      .collection("Candidates")
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
  }

  render() {
    if (this.state) {
      if (this.state.positionsArray) {
        const positionNames = this.state.positionsArray.map(pos => {
          if (this.state.candidatesArray) {
            const cardLists = this.state.candidatesArray.map(can => {
              if (can.runningFor === pos.id && !can.gradStudent) {
                return (
                  <CardDeck>
                    <div className="mt-1">
                      <Card border="dark" bg="light">
                        <Card.Body>
                          <Card.Title>{can.name}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">
                            {can.major}
                          </Card.Subtitle>
                          <Card.Text>{can.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </CardDeck>
                );
              }
            });

            return (
              <li class="list-group-item">
                <h1 class="list-group-item-heading">{pos.id}</h1>
                <p class="list-group-item-text">{pos.description}</p>
                <Card bg="info" text="black" style={{ width: "auto" }}>
                  <Card.Header>Candidates</Card.Header>
                  <Card.Body>{cardLists}</Card.Body>
                </Card>
              </li>
            );
          }
        });
        return <div class="list-group">{positionNames}</div>;
      }
    } else {
      return <div class="list-group"></div>;
    }
  }
}

export default positions;
