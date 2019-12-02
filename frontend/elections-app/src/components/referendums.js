import React, { Component } from "react";
import NavHeader from "./NavHeader";
import firebase from "./firebase.js";
import "./referendums.css";
import RefModal from "./modal.js";
import { Button, ButtonToolbar } from "react-bootstrap";

class referendums extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
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

  render() {
    let closeModal = () => this.setState({ showModal: false });
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
              <ButtonToolbar>
                <Button
                  variant="primary"
                  onClick={() => this.setState({ showModal: true })}
                >
                  more info
                </Button>
                <RefModal show={this.state.showModal} onHide={closeModal} />
              </ButtonToolbar>
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
            <div class="site-section">
              <div class="container">
                <div class="row align-items-stretch" id="paddingTop">
                  {cards}
                </div>
              </div>
            </div>
          </div>
        </body>
      );
    } else {
      return <div></div>;
    }
  }
}
export default referendums;
