import React, { Component } from "react";
import avatar from "../avatar.png";
import "./Secretary.css";
import axios from "axios";

const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";

class Secretary extends Component {
   constructor(){
      super();
      this.state = {
         secretarySelected: '',
      };
   }
   handleChange = (e) =>{
      this.setState({secretarySelected: e.target.value});
   }

   getSecretary = async () => {
      await axios.get(API_BASE + "/getSecretary")
      .then((res) => {
         this.setState({secretary: res.data});
      })
   }

   componentDidMount(){
      //console.log("secretary props", this.props.secretary[0].ID);
      //this.getSecretary();
   }

   sendDataToParent = () => {
      this.props.callbackFromParent(this.state);
   }

   render(){
      if(this.props.currentStep !== 1){
         return null;
      }
      let secretaryList = null;
      //console.log(this.state);
      if(this.props.secretary.length !== 0){
         secretaryList = this.props.secretary.map((e) => (
            <li key={e.ID}>
               <input
                  type="radio"
                  id={e.ID}
                  name="selector"
                  onChange={this.handleChange}
                  value={e.ID}
                  checked={this.state.secretarySelected === e.ID}/>
               <label htmlFor={e.ID}>{e.Name}</label>
               <div className="check"></div>
            </li>
         ));
      }
      return(
         <div className="container">
            <ul>
            {secretaryList}

            </ul>
         </div>
      );
   }
}

export default Secretary;
