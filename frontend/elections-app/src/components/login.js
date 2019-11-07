import React, { Component } from "react";
import { Form, Grid, Header, Segment } from "semantic-ui-react";
import firebase, { auth, provider } from "./firebase.js";

class login extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      isAuthenticated: false,
      fullName: "",
      ucrEmail: "",
      password: ""
    };
  }
  componentDidMount() {
    document.body.style = "background: #0A162E";
    firebase.auth().onAuthStateChanged(user => {
      if (user && user.emailVerified === true) {
        window.location = "dashboard";
      }
    });
  }

  login = () => {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({ user });
    });
  };

  logout = () => {
    auth.signOut().then(() => {
      this.setState({ user: null });
    });
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = async () => {
    try {
      console.log(this.state);
      const email = this.state.ucrEmail;
      const password = this.state.password;
      const name = this.state.fullName;
      const createAuthUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      createAuthUser.user.sendEmailVerification().then(function() {
        console.log("email verification sent to user");
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    //      /^[a-z]{3,5}[0-9]{3}@(ucr)(.edu)$/         regex for school emails
    const emailRegex = /^[a-z]{3,5}[0-9]{3}@(ucr)(.edu)$/;
    //console.log(this.state);

    if (this.state.user === null) {
      return (
        <div style={{ paddingTop: "20%" }} class="row">
          <div class="col align-items-center justify-content-center text-center">
            <div className="signup-page">
              <Grid.Column>
                <Segment>
                  <h1 style={{ color: "#FFFFFF" }}>Sign Up</h1>
                  <div style={{ paddingBottom: "1%" }}>
                    <h5 style={{ color: "#FFFFFF" }}>
                      Please select a UCR email when signing up
                    </h5>
                  </div>
                </Segment>
                <>
                  <Form size="large" onSubmit={this.handleSubmit}>
                    <Segment stacked>
                      <div style={{ paddingBottom: "1%" }}>
                        <Form.Input
                          fluid
                          onChange={this.handleChange}
                          placeholder="First Last Name"
                          name="fullName"
                        />
                      </div>
                      <div style={{ paddingBottom: "1%" }}>
                        <Form.Input
                          fluid
                          onChange={this.handleChange}
                          placeholder="UCR e-mail"
                          name="ucrEmail"
                        />
                      </div>
                      <div style={{ paddingBottom: "2%" }}>
                        <Form.Input
                          fluid
                          onChange={this.handleChange}
                          placeholder="Password"
                          type="password"
                          name="password"
                        />
                      </div>

                      <div style={{ paddingBottom: "2%" }}>
                        <Form.Button fluid primary size="large">
                          Create Account
                        </Form.Button>
                      </div>
                    </Segment>
                  </Form>
                </>
              </Grid.Column>
            </div>
            <button class="btn btn-primary2" onClick={this.login}>
              Sign Up With Google
            </button>
          </div>
        </div>
      );
    } else if (this.state.user !== null) {
      const email = this.state.user.email;
      if (!email.match(emailRegex)) {
        return (
          <div style={{ paddingTop: "20%" }} class="row">
            <div class="col align-items-center justify-content-center text-center">
              <div style={{ paddingBottom: "2%" }}>
                <h1 style={{ color: "#FFFFFF" }}>
                  Invalid Email! Please use a UCR email
                </h1>
              </div>
              <button class="btn btn-primary2" onClick={this.logout}>
                LOGOUT
              </button>
            </div>
          </div>
        );
      } else if (email.match(emailRegex)) {
        return <h1 style={{ color: "white" }}> WELCOME TO THE DASHBOARD </h1>;
      }
    }
  }
}

export default login;
