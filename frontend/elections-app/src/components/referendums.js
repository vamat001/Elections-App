import React, { Component } from "react";
import NavHeader from "./NavHeader";
import firebase from "./firebase.js";

const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";

class referendums extends Component {
  constructor() {
    super();
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
    if (this.state) {
      if (this.state.referendumsArray) {
        const cards = this.state.referendumsArray.map(ref => {
          return (
            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
              <div class="unit-4 d-block">
                <div class="unit-4-icon mb-3">
                  <span class="icon-wrap">
                    <span class="text-primary icon-autorenew"></span>
                  </span>
                </div>
                <div>
                  <h3>Referendum</h3>
                  <p>{ref.description}</p>
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
                    <h1 class="mb-0 site-logo text-black h2 mb-0">
                      UCR Elections<span class="text-primary"></span>
                    </h1>
                  </div>
                </div>
              </div>
              <NavHeader />
              {/*Referendums*/}
              <div class="site-section" id="Referendums">
                <div class="container">
                  <div class="row mb-5">
                    <div class="col-12 text-center">
                      <h2 class="section-title mb-3">Referendums</h2>
                    </div>
                  </div>
                  <div class="row align-items-stretch">
                    {cards}
                    {/*} <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                  <div class="unit-4 d-block">
                    <div class="unit-4-icon mb-3">
                      <span class="icon-wrap">
                        <span class="text-primary icon-autorenew"></span>
                      </span>
                    </div>
                    <div>
                      <h3>Referendum 1</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis quis molestiae vitae eligendi at.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                  <div class="unit-4 d-block">
                    <div class="unit-4-icon mb-3">
                      <span class="icon-wrap">
                        <span class="text-primary icon-store_mall_directory"></span>
                      </span>
                    </div>
                    <div>
                      <h3>Referendum 2</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis quis molestiae vitae eligendi at.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                  <div class="unit-4 d-block">
                    <div class="unit-4-icon mb-3">
                      <span class="icon-wrap">
                        <span class="text-primary icon-shopping_basket"></span>
                      </span>
                    </div>
                    <div>
                      <h3>Referendum 3</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis quis molestiae vitae eligendi at.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                  <div class="unit-4 d-block">
                    <div class="unit-4-icon mb-3">
                      <span class="icon-wrap">
                        <span class="text-primary icon-settings_backup_restore"></span>
                      </span>
                    </div>
                    <div>
                      <h3>Referendum 4</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis quis molestiae vitae eligendi at.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                  <div class="unit-4 d-block">
                    <div class="unit-4-icon mb-3">
                      <span class="icon-wrap">
                        <span class="text-primary icon-sentiment_satisfied"></span>
                      </span>
                    </div>
                    <div>
                      <h3>Referendum 5</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis quis molestiae vitae eligendi at.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                  <div class="unit-4 d-block">
                    <div class="unit-4-icon mb-3">
                      <span class="icon-wrap">
                        <span class="text-primary icon-power"></span>
                      </span>
                    </div>
                    <div>
                      <h3>Referendum 6</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis quis molestiae vitae eligendi at.
                      </p>
                    </div>
                  </div>
    </div> */}
                    <div>
                      <p style={{ marginLeft: 1 + "em" }}>
                        <a href="#" class="btn btn-primary">
                          More Info
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
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
