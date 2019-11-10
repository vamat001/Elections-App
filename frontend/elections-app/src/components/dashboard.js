import React, { Component } from "react";
import avatar from "../avatar.png";
import "./dashboard.css";
import axios from "axios";
import Secretary from "./Secretary";
import Senators from "./Senators";
import Bubble from "./Bubble";
import Checkbox from "./Checkbox";
import SubmitVotes from "./submitVotes";

const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";

class dashboard extends Component {
   constructor(){
      super();
      this.state = {
         currentStep: 1,
         step: 1,
         secretary: [],
         senators: [],
         presidents: [],
         secretarySelected: '',
         checkboxes: null,
         senatorCandidates: [],
         allPositions: [],
         president: '',
         vp: '',
         senatorsSelected: null,
         finalCandidatesList: {}

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

   getAllPositions = async () => {
      await axios.get(API_BASE + "/getAllPositions")
      .then((res) => {
         this.setState({allPositions: res.data});
      })
      let senators = [];
      let secretary = [];
      let presidents = [];

      this.state.allPositions.filter((position) => {
         let pos = position.ID;
         pos = pos.replace(/[0-9]/g, '');
         if(pos === "Senator"){
            senators.push(position);
         }else if(pos === "VP"){
            secretary.push(position);
         }else if(pos == "President"){
            presidents.push(position);
         }
      })
      this.setState({senators, secretary, presidents});
      let senatorCandidates = [];
     this.state.senators.map(candidate =>{
        senatorCandidates.push(candidate.ID);
     });
     this.setState({senatorCandidates});
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

   getFinalListOfCandidates = () => {
      let finalCandidatesList = {};
      let filteredPresident = this.state.presidents.filter(e => e.ID === this.state.president);
      let filteredSecretay = this.state.secretary.filter(e => e.ID === this.state.vp);

      if(filteredPresident.length > 0){
         finalCandidatesList[this.state.president] = filteredPresident;
      }

      if(filteredSecretay.length > 0){
         finalCandidatesList[this.state.vp] = filteredSecretay;
      }


      //finalCandidatesList.push(this.state.president);
      //finalCandidatesList.push(this.state.vp);

      if(this.state.senatorsSelected !== null){
         let senators = this.state.senators;
         const obj = this.state.senatorsSelected;
         //console.log("inside senators state ",this.state)
         Object.entries(obj).forEach(function([key, value]) {
            if(value === true){
               // finalCandidatesList.push(key);
               finalCandidatesList[key] = senators.filter(e => e.ID === key);
            }
         });
   }
      this.setState({finalCandidatesList});
   }

   componentDidMount(){
      document.body.style = 'background: #f2f3f4';
      //this.getSecretary();
      //this.getSenators();
      this.getAllPositions();
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
   if(this.state.currentStep === 4){
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

      if(this.state.secretary.length === 0){
         return <h1> Loading </h1>;
      }
      // <Secretary
      // currentStep={this.state.currentStep}
      // secretary={this.state.secretary}
      // ref={instance => { this.child = instance; }}
      // callbackFromParent={this.storeSecretaryData}/>

      // <Senators
      // currentStep={this.state.currentStep}
      // senators={this.state.senators}
      // ref={instance => { this.child2 = instance; }}
      // callbackFromParent={this.storeSenatorData}
      // candidateArr={this.state.senatorCandidates}/>
      return(

         <div>

            <div className="row">
            <form>

            <Bubble
            currentStep={this.state.currentStep}
            step={1}
            position={this.state.presidents}
            ref={instance => { this.child1 = instance; }}
            callbackFromParent={this.storeSecretaryData} />

            <Bubble
            currentStep={this.state.currentStep}
            step={2}
            position={this.state.secretary}
            ref={instance => { this.child2 = instance; }}
            callbackFromParent={this.storeSecretaryData} />

            <Checkbox
            position={this.state.senators}
            step={3}
            currentStep={this.state.currentStep}
            ref={instance => { this.child3 = instance; }}
            callbackFromParent={this.storeSecretaryData}
            candidateArr={this.state.senatorCandidates}/>

            <SubmitVotes
            finalList={this.state.finalCandidatesList}
            currentStep={this.state.currentStep}
            step={4}
            />


            </form>
         </div>

         {
            this.state.currentStep === 1 ?
            <div className="row" style={{paddingTop: "10%", paddingLeft: "50%"}}>
            <button onClick={() => {this.prevStep(); this.child1.sendDataToParent()}}>Prev</button>
            <button onClick={() => {this.nextStep(); this.child1.sendDataToParent()}}>Next</button>
            </div>
            : null
         }
         {
            this.state.currentStep === 2 ?
            <div className="row" style={{paddingTop: "10%", paddingLeft: "50%"}}>
            <button onClick={() => {this.prevStep(); this.child2.sendDataToParent()}}>Prev</button>
            <button onClick={() => {this.nextStep(); this.child2.sendDataToParent()}}>Next</button>
            </div>
            : null
         }
         {
            this.state.currentStep === 3 ?
            <div className="row" style={{paddingTop: "10%", paddingLeft: "50%"}}>
            <button onClick={() => {this.prevStep(); this.child3.sendDataToParent()}}>Prev</button>
            <button onClick={() => {this.child3.sendDataToParent(); this.getFinalListOfCandidates();this.nextStep()}}>Next</button>
            </div>
            : null
         }
         {
            this.state.currentStep === 4 ?
            <div className="row" style={{paddingTop: "10%", paddingLeft: "50%"}}>
            <button onClick={() => {this.getFinalListOfCandidates(); this.nextStep()}}>Finish</button>
            </div>
            : null
         }

         </div>
      );
   }
}
export default dashboard;
