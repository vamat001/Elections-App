import React, { Component } from "react";
import NavHeader from "./NavHeader.js";
import Sidebar from "./Sidebar.js"
import "./Sidebar.css"
import { Card, CardDeck } from "react-bootstrap";
import firebase, { auth, provider, firestore } from "./firebase.js";

class candidates extends Component {
  constructor() {
    super();
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

select = (pos) => {
  this.state.showPos = pos;
}

  render() {
    return(
      <div>
        <NavHeader/>
        <div class="container site-section padTop">
          <div class="row">
            <Sidebar/>

            <div class="card-deck col-lg-9">
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* <Sidebar/> */}

      </div>
      
    );
    // if (this.state) {
    //   if (this.state.candidatesArray) {
    //     const cardLists = this.state.candidatesArray.map(can => {
    //       return (
    //         <CardDeck>
    //           <div className="mt-1">
    //             <Card border="dark" bg="light" style={{ width: "auto" }}>
    //               <Card.Body>
    //                 <Card.Title>{can.name}</Card.Title>
    //                 <Card.Subtitle className="mb-2 text-muted">
    //                   Running For: {can.runningFor}
    //                 </Card.Subtitle>
    //                 <Card.Text>
    //                   I'm majoring in {can.major}. {can.description}
    //                 </Card.Text>
    //               </Card.Body>
    //             </Card>
    //           </div>
    //         </CardDeck>
    //       );
    //     });

    //     return (
    //       <li class="list-group-item">
    //         <Card bg="info" text="black" style={{ width: "auto" }}>
    //           <Card.Header>All Candidates</Card.Header>
    //           <Card.Body>{cardLists}</Card.Body>
    //         </Card>
    //       </li>
    //     );
    //   }
    // } else {
    //   return <div></div>;
    // }
  }
}

export default candidates;
