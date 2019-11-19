import React, { Component } from "react";
import { Card, CardDeck } from 'react-bootstrap';
import firebase, { auth, provider, firestore } from "./firebase.js";

class candidates extends Component {

constructor(){
    super();
   firebase.firestore().collection('Candidates')
    .onSnapshot(
    querySnapshot => {this.setState({
    candidatesArray: querySnapshot.docs.map(doc => {
              return { runningFor: doc.data().runningFor,
              name: doc.data().name, 
              id: doc.data().ID,
              gradStudent: doc.data().gradStudent,
              description: doc.data().description,
              major: doc.data().major };
            }),
        });
    },
    () => null,
);
}
  render() {
    if(this.state){
            if(this.state.candidatesArray){
                const cardLists = this.state.candidatesArray.map(can =>{
                        return  <CardDeck >
                        <div className='mt-1'>
                            <Card border="dark" bg="light" style={{ width: 'auto' }}>
                                      <Card.Body>
                                        <Card.Title>{can.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Running For: {can.runningFor}</Card.Subtitle>
                                        <Card.Text>
                                            I'm majoring in {can.major}. {can.description}
                                        </Card.Text>
                                      </Card.Body>
                                    </Card>
                        </div>
                                </CardDeck>;
                });

              return <li  class="list-group-item"> 
                    <Card bg="info" text="black" style={{ width: 'auto' }}>
                        <Card.Header>All Candidates</Card.Header>
                        <Card.Body>
                                {cardLists}
                        </Card.Body>
                      </Card>
                </li>;

            };
    }else{
    return (
      <div>
      </div>
    );
    }
  }
}

export default candidates;
