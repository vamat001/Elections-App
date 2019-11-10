import React, { Component } from "react";
import axios from "axios";

const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";

class SubmitVotes extends Component {
   constructor(){
      super();
      this.state = {

      };
   }

   render(){
      if(this.props.currentStep !== this.props.step){
         return null;
      }
      let finalList = null;
      console.log(this.props);
      //console.log(this.state);
         // finalList = this.props.finalList.map((e) => (
         //    <li key={e}>
         //       <label htmlFor={e.ID}>{e.Name}</label>
         //       <div className="check"></div>
         //    </li>
         // ));

      return(
         <h1>Hello</h1>
      );
   }

}

export default SubmitVotes;
