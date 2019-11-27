import React, { Component } from "react";
import NavHeader from "./NavHeader";
import firebase from "./firebase.js";
import "./referendums.css";

class referendums extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    firebase
      .firestore()
      .collection("Referendums")
      .onSnapshot(
        querySnapshot => {
          this.setState({
            referendumsArray: querySnapshot.docs.map(doc => {
              return {
                implications: doc.data().implications,
                description: doc.data().description
              };
            })
          });
        },
        () => null
      );
  }
  handleClick() {
    return console.log("hello world");
  }
  render() {
    if (this.state) {
      if (this.state.referendumsArray) {
        const cards = this.state.referendumsArray.map(ref => {
          return (
            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
              <div class="unit-4 d-block">
                <div>
                  <h3>Description</h3>
                  <p>{ref.description}</p>
                  <h3>Implications</h3>
                  <p>{ref.implications}</p>
                </div>
              </div>
            </div>
          );
        });
        return (
          <body
            data-spy="scroll"
            data-target=".site-navbar-target"
            data-offset="300"
          >
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
              {/*Referendums*/}
              <div class="site-section" id="Referendums">
                <div class="container">
                  <div class="row align-items-stretch" id="paddingTop">
                    {cards}
                  </div>
                </div>
                <button onClick={this.handleClick}>Button</button>
              </div>
            </div>
          </body>
        );
      }
    } else {
      return <div></div>;
    }
  }
}

export default referendums;
