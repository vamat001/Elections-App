import React, { Component } from "react";
import firebase, { auth, provider } from './firebase.js';

class landingPage extends Component {
   constructor(){
      super();
      this.state = {
         user: null,
         isAuthenticated: false
      };
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
      console.log(this.state);
      if(this.state.user !== null){

      }
      return(
         <div>
         { this.state.user ?
            <h1>Hello {this.state.user.displayName}</h1>
            :
            <h1>Please Login</h1>
         }
            <button onClick={this.login}>
               Login
            </button>
            <button onClick={this.logout}>
               Logout
            </button>
         </div>


      );
   }
}

export default landingPage;
