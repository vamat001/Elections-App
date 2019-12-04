import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./landingPage.css";
import NavHeader from "./NavHeader.js";
import TimelineVotes from "./timelineVotes.js";

class landingPage extends Component {
  state = {
    t1: false,
    t2: false,
    t3: false,
    t4: false,
    t5: false,
    t6: false,
    t7: false
  };
  goToLogin = () => {
    this.props.history.push("/login");
  };

  test = () => {
    let date = new Date();
    let dateForm =
      date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
    let lower = new Date("4-1-2020");
    let upper = new Date("4-26-2020");

    //Set timeline visibility
    this.state.t1 = dateForm == "1-15-2020";
    this.state.t2 = dateForm == "2-12-2020";
    this.state.t3 = date >= lower && date <= upper;
    this.state.t4 = dateForm == "4-3-2020" || dateForm == "4-10-2020";
    lower = new Date("4-22-2020");
    upper = new Date("4-26-2020");
    this.state.t5 = date >= lower && date <= upper;
    this.state.t6 = dateForm == "5-1-2020";
    lower = new Date("5-6-2020");
    upper = new Date("5-10-2020");
    this.state.t7 = date >= lower && date <= upper;
  };

  render() {
    this.test();
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
                  <img
                    class="mb-0 site-logo"
                    id="logoPic"
                    src="images/asucrlogo.png"
                  ></img>
                </h1>
              </div>
            </div>
          </div>
          <NavHeader />
          <div class="site-blocks-cover">
            <div class="container">
              <div class="row align-items-center justify-content-center">
                <div
                  class="col-md-12"
                  style={{ position: "relative" }}
                  data-aos="fade-up"
                >
                  <div class="row mb-4">
                    <div class="col-lg-4 mr-auto">
                      <h1>Voting is Open!</h1>
                      <p class="mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam assumenda ea quo cupiditate facere deleniti
                        fuga officia.
                      </p>
                      <div>
                        <button
                          class="btn btn-primary mr-2 mb-2"
                          onClick={this.goToLogin}
                        >
                          Vote Now
                        </button>
                      </div>
                    </div>
                    <div class="col-md-6 mr-auto">
                      <img src="images/ucr.jpg" class="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Election Information*/}
          <div class="site-section bg-light" id="Information">
            <div class="container">
              <div class="row mb-5">
                <div class="col-12 text-center">
                  <h2 class="section-title mb-3">Timeline/Vote Tracker</h2>
                </div>
              </div>
              <TimelineVotes/>
            </div>
          </div>

          <div class="site-section bg-light" id="Questions">
            <div class="container">
              <div class="row mb-5">
                <div class="col-12 text-center">
                  <h2 class="section-title mb-3">Get In Touch</h2>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-7 mb-5">
                  <form action="#" class="p-5 bg-white">
                    <h2 class="h4 text-black mb-5">Contact Form</h2>

                    <div class="row form-group">
                      <div class="col-md-6 mb-3 mb-md-0">
                        <label class="text-black" for="fname">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="fname"
                          class="form-control rounded-0"
                        />
                      </div>
                      <div class="col-md-6">
                        <label class="text-black" for="lname">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lname"
                          class="form-control rounded-0"
                        />
                      </div>
                    </div>

                    <div class="row form-group">
                      <div class="col-md-12">
                        <label class="text-black" for="email">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          class="form-control rounded-0"
                        />
                      </div>
                    </div>

                    <div class="row form-group">
                      <div class="col-md-12">
                        <label class="text-black" for="subject">
                          Subject
                        </label>
                        <input
                          type="subject"
                          id="subject"
                          class="form-control rounded-0"
                        />
                      </div>
                    </div>

                    <div class="row form-group">
                      <div class="col-md-12">
                        <label class="text-black" for="message">
                          Message
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="7"
                          class="form-control rounded-0"
                          placeholder="Write your notes or questions here..."
                        ></textarea>
                      </div>
                    </div>

                    <div class="row form-group">
                      <div class="col-md-12">
                        <input
                          type="submit"
                          value="Send Message"
                          class="btn btn-primary mr-2 mb-2"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="footer py-5 border-top text-center">
            <div class="row">
              <div class="col-md-12">
                <p class="mb-0">
                  Copyright All rights reserved | This template is made with{" "}
                  <i class="icon-heart" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </body>
    );
  }
}

export default landingPage;
