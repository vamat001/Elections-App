import React, { Component } from "react";
import avatar from "../avatar.png";
import "./dashboard.css";
import axios from "axios";
import Secretary from "./Secretary";
import Senators from "./Senators";

const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";

class dashboard extends Component {
   constructor(){
      super();
      this.state = {
         currentStep: 1,
         secretary: [],
         senators: [],
         step: 1,
         secretarySelected: '',
         checkboxes: null,
         senatorCandidates: []

      };
   }

   handleChange = (e) =>{
      this.setState({candidateSelected: e.target.value});
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

   getSecretary = async () => {
      await axios.get(API_BASE + "/getSecretary")
      .then((res) => {
         this.setState({secretary: res.data});
      })
   }

   getSenators = async () => {
      await axios.get(API_BASE + "/getSenators")
      .then((res) => {
         this.setState({senators: res.data});
      })

      let senatorCandidates = [];
     this.state.senators.map(candidate =>{
        senatorCandidates.push(candidate.ID);
     });
     this.setState({senatorCandidates});
   }

   componentDidMount(){
      document.body.style = 'background: #f2f3f4';
      this.getSecretary();
      this.getSenators();
      //const OPTIONS = this.state.secretary;

    //   this.setState({checkboxes: OPTIONS.reduce(
    //   (options, option) => ({
    //      ...options,
    //     [option.ID]: false
    //   }),
    //   {}
    // )})
   }

   nextStep = () => {
   if(this.state.currentStep === 2){
      this.setState({currentStep: 1});
   }else{
      this.setState({currentStep: this.state.currentStep + 1});
   }
}
prevStep = () => {
   if(this.state.currentStep !== 1){
      this.setState({currentStep: this.state.currentStep - 1});
   }
}

   storeSecretaryData = (data) => {
   for (let key in data) {
      this.setState({[key]: data[key]});
   }
}
storeSenatorData = (data) => {
   // for (let key in data) {
   //    this.setState({[key]: data[key]});
   // }
   this.setState({checkboxes: data});
}


   render(){
      console.log(this.state);
      return(
         <div>
         {
            this.state.step === 1 && this.state.secretary.length !== 0 ?
            <div className="row">
            <form>
            <Secretary
            currentStep={this.state.currentStep}
            secretary={this.state.secretary}
            ref={instance => { this.child = instance; }}
            callbackFromParent={this.storeSecretaryData}/>

            <Senators
            currentStep={this.state.currentStep}
            senators={this.state.senators}
            ref={instance => { this.child2 = instance; }}
            callbackFromParent={this.storeSenatorData}
            candidateArr={this.state.senatorCandidates}/>

            </form>
            </div>
            :
            <h1>Loading</h1>
         }


            <div className="row" style={{paddingTop: "10%", paddingLeft: "50%"}}>
            <button onClick={() => {this.prevStep(); this.child2.sendDataToParent()}}>Prev</button>
            <button onClick={() => {this.nextStep(); this.child.sendDataToParent()}}>Next</button>

            </div>
         </div>
      );
   }
}
export default dashboard;
