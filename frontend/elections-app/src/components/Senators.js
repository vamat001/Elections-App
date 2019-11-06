import React, { Component } from "react";
import avatar from "../avatar.png";
import "./Senators.css";
import axios from "axios";

const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";

class Senators extends Component {
   constructor(){
      super();
      this.state = {
         checkboxes: null,
         candidateArr: []
      };
   }

   handleCheckboxChange = changeEvent => {
    const { id } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [id]: !prevState.checkboxes[id]
      }
    }));
  };

  getSenators = () => {

      this.setState({checkboxes: this.props.candidateArr.reduce(
      (options, option) => ({
          ...options,
         [option]: false
      }),
      {}
     )})
  }

  componentDidMount(){
     this.getSenators();
  }
  sendDataToParent = () => {
     this.props.callbackFromParent(this.state.checkboxes);
  }

  render(){
     if(this.props.currentStep !== 2){
       return null;
     }
     let secCheckBoxesList = null;
     //console.log(this.state);
     if(this.props.senators.length !== 0 && this.state.checkboxes !== null){
        secCheckBoxesList = this.props.senators.map((e) => (
           <li key={e.ID}>
              <input
                 type="checkbox"
                 id={e.ID}
                 value={e.ID}
                 checked={this.state.checkboxes[e.ID] === true}
                 onChange={this.handleCheckboxChange}
                 />
              <label htmlFor={e.ID}>{e.Name}</label>
              <div className="checkbox-custom"></div>
           </li>
        ))
     }
     return(
        <div className="container">
           <ul>
           {secCheckBoxesList}
           </ul>
        </div>
     );

  }

}

export default Senators;
