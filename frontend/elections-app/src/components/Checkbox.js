import React, { Component } from "react";
import "./Checkbox.css";
import axios from "axios";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";

class Checkbox extends Component {
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
  }

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
     // let pos = this.props.position[0].ID;
     // pos = pos.replace(/[0-9]/g, '');
     let pos = this.props.position[0].runningFor;
     if(pos === "Senator"){
        let senatorsSelected =  {"senatorsSelected" : this.state.checkboxes};
        this.props.callbackFromParent(senatorsSelected);
     }
  }


  render(){
     if(this.props.currentStep !== this.props.step){
       return null;
     }
     let heading = "";
     // if(this.props.currentStep !== 2){
     //   return null;
     // }
     let secCheckBoxesList = null;
     //console.log(this.state);
     if(this.props.position.length !== 0 && this.state.checkboxes !== null){

        // let pos = this.props.position[0].ID;
        // pos = pos.replace(/[0-9]/g, '');
        // if(pos === "Senator"){
        //    heading = "Senator";
        // }
        heading = this.props.position[0].runningFor;



        secCheckBoxesList = this.props.position.map((e) => (
           <li className="checkboxList-li-tag" key={e.ID}>
              <input
                 type="checkbox"
                 id={e.ID}
                 value={e.ID}
                 checked={this.state.checkboxes[e.ID] === true}
                 onChange={this.handleCheckboxChange}
                 />
              <label htmlFor={e.ID}>{e.name}</label>
              <div className="checkbox-custom"></div>
           </li>
        ))
     }
     return(
        <div className="container">
           <div className="row justify-content-center" style={{paddingTop: "5%", paddingBottom: "5%"}}>
              <h1 style={{color: "white"}}>{heading}</h1>
           </div>
           <ul className="checkboxList">
              <ReactCSSTransitionGroup
              transitionName="example"
             transitionAppear={true}
             transitionAppearTimeout={500}
             transitionEnter={false}
             transitionLeave={false}>
               {secCheckBoxesList}
             </ReactCSSTransitionGroup>
           </ul>
        </div>
     );

  }






}

export default Checkbox;
