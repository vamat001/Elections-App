import React, { Component } from "react";
import "./Bubble.css";
import axios from "axios";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";

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
      let pos = this.props.position[0].ID;
      pos = pos.replace(/[0-9]/g, '');
      if(pos === "VP"){
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
      let heading = "";



      let candidateList = null;
      //console.log(this.state);
      if(this.props.position.length !== 0){

         let pos = this.props.position[0].ID;
         pos = pos.replace(/[0-9]/g, '');
         if(pos === "VP"){
            heading = "Vice President";
         }else if(pos == "President"){
            heading = "President";
         }


         candidateList = this.props.position.map((e) => (
            <li key={e.ID}>
               <input
                  type="radio"
                  id={e.ID}
                  name="selector"
                  onChange={this.handleChange}
                  value={e.ID}
                  checked={this.state.position === e.ID}/>
               <label htmlFor={e.ID}>{e.Name}</label>
               <div className="check"></div>
            </li>
         ));
      }
      return(
         <div className="container">
            <div className="row">
               <h1 style={{color: "white"}}>{heading}</h1>
            </div>
            <ul>
               <ReactCSSTransitionGroup
               transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={false}
              transitionLeave={false}>
                {candidateList}
              </ReactCSSTransitionGroup>
            </ul>

         </div>
      );
   }

}
export default Bubble;
