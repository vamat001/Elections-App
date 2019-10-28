import React, { Component } from "react";
import firebase, { auth, provider } from './firebase.js';

class login extends Component {
   constructor(){
      super();
      this.state = {
         user: null,
         isAuthenticated: false
      };
   }
   componentDidMount(){
      document.body.style = 'background: #0A162E';
   }

   login = () => {
      auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      this.setState({ user });
    });
   }

   logout = () => {
      auth.signOut()
    .then(() => {
      this.setState({ user: null });
    });
   }

   render(){
      //      /^[a-z]{3,5}[0-9]{3}@(ucr)(.edu)$/         regex for school emails
      const emailRegex = /^[a-z]{3,5}[0-9]{3}@(ucr)(.edu)$/;
      //console.log(this.state);

      if(this.state.user === null){
      return(
         <div style={{paddingTop: "20%"}} class="row">
         <div class="col align-items-center justify-content-center text-center">
            <div style={{paddingBottom: "2%"}}>
               <h1 style={{color: "#FFFFFF"}}>Please select a UCR email when logging in</h1>
            </div>
            <button class="btn btn-primary2" onClick={this.login}>LOGIN</button>
         </div>
         </div>
      );
   }else if(this.state.user !== null){
      const email = this.state.user.email;
      if(!email.match(emailRegex)){
      return(
         <div style={{paddingTop: "20%"}} class="row">
         <div class="col align-items-center justify-content-center text-center">
            <div style={{paddingBottom: "2%"}}>
               <h1 style={{color: "#FFFFFF"}}>Invalid Email! Please use a UCR email</h1>
            </div>
            <button class="btn btn-primary2" onClick={this.logout}>LOGOUT</button>
         </div>
         </div>
      );
   }else if(email.match(emailRegex)){
      return(
         <h1 style={{color: "white"}}> WELCOME TO THE DASHBOARD </h1>
      );
   }
   }
   }
}

export default login;
