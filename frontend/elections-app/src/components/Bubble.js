import React, { Component } from "react";
import "./Bubble.css";
// import axios from "axios";

// const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";

class Bubble extends Component {
   constructor(){
      super();
      this.state = {
         position: ''
      };
   }

   handleChange = (e) =>{
      this.setState({position: e.target.value});
   }

   sendDataToParent = () => {
      let pos = this.props.position[0].runningFor;
      if(pos === "VicePresident"){
         let vp =  {"vp" : this.state.position};
         this.props.callbackFromParent(vp);
      }else if(pos == "President"){
         let president = { "president": this.state.position };
         this.props.callbackFromParent(president);
      }

   }

   render(){
      if(this.props.currentStep !== this.props.step){
         return null;
      }
      let candidateList = null;
      if(this.props.position.length !== 0){
         candidateList = this.props.position.map((e) => (
            <li key={e.ID}>
               <input
                  type="radio"
                  id={e.ID}
                  name="selector"
                  onChange={this.handleChange}
                  value={e.ID}
                  checked={this.state.position === e.ID}/>
               <label htmlFor={e.ID}>{e.name}</label>
               <div className="check"></div>
            </li>
         ));
      }
      return(
         <div className="container">
            <ul>
            {candidateList}
            </ul>
         </div>
      );
   }

}
export default Bubble;
