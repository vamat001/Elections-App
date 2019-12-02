import React, { Component } from "react";
import NavHeader from "./NavHeader.js";
import Sidebar from "./Sidebar.js";
import "./Sidebar.css";
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
  }

  render() {
    if (this.state) {
      if (this.state.candidatesArray) {
        const cardLists = this.state.candidatesArray.map(can => {
          if (can.runningFor === "President" && !can.gradStudent) {
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
            <div class="container site-section padTop">
              <div class="row">
                <Sidebar />
                <div class="col-lg-9">{cardLists}</div>
              </div>
            </div>
          </div>
        );
      }
    } else {
      return <div class="list-group"></div>;
    }
  }
}

export default candidates;
