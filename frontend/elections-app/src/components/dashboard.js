import React, { Component } from "react";
import avatar from "../avatar.png";
import "./dashboard.css";
import axios from "axios";
import Secretary from "./Secretary";
import Senators from "./Senators";
import Bubble from "./Bubble";
import Checkbox from "./Checkbox";
import SubmitVotes from "./submitVotes";
import rightArrowIcon from "./rightArrowIcon.png";
import leftArrowIcon from "./leftArrowIcon.png";
import checkmarkIcon from "./checkmarkIcon.png";
import firebase from "firebase";
const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";

class dashboard extends Component {
   constructor(){
      super();
      this.state = {
         currentStep: 1,
         step: 1,
         vicePresidents: [],
         senators: [],
         presidents: [],
         secretarySelected: '',
         checkboxes: null,
         senatorCandidates: [],
         allPositions: [],
         president: '',
         vp: '',
         senatorsSelected: null,
         finalCandidatesList: {},
         selectedCandidateIDS: [],


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

   getAllPositions = async () => {
      await axios.get(API_BASE + "/getAllPositions")
      .then((res) => {
         this.setState({allPositions: res.data});
      })
      let senators = [];
      let vicePresidents = [];
      let presidents = [];

      this.state.allPositions.filter((position) => {
         let pos = position.runningFor;
         //pos = pos.replace(/[0-9]/g, '');
         if(pos === "Senator"){
            senators.push(position);
         }else if(pos === "VicePresident"){
            vicePresidents.push(position);
         }else if(pos === "President"){
            presidents.push(position);
         }
      })
      this.setState({senators, vicePresidents, presidents});
      let senatorCandidates = [];
     this.state.senators.map(candidate =>{
        senatorCandidates.push(candidate.ID);
     });
     this.setState({senatorCandidates});
   }

   getFinalListOfCandidates = () => {
      let selectedCandidateIDS = [];
      let finalCandidatesList = {};

      let filteredPresident = this.state.presidents.filter(e => e.ID === this.state.president);
      let filteredVicePresident = this.state.vicePresidents.filter(e => e.ID === this.state.vp);

      if(filteredPresident.length > 0){
         //finalCandidatesList[this.state.president] = filteredPresident;
         finalCandidatesList["President"] = filteredPresident;
         selectedCandidateIDS.push(filteredPresident[0]['ID']);
      }

      if(filteredVicePresident.length > 0){
         //finalCandidatesList[this.state.vp] = filteredSecretary;
         finalCandidatesList["VP"] = filteredVicePresident;
         selectedCandidateIDS.push(filteredVicePresident[0]['ID']);
      }


      //finalCandidatesList.push(this.state.president);
      //finalCandidatesList.push(this.state.vp);
      if(this.state.senatorsSelected !== null){
         let senators = this.state.senators;
         const obj = this.state.senatorsSelected;
         let emptyArr = [];
         Object.entries(obj).forEach(function([key, value]) {
            if(value === true){
               // finalCandidatesList.push(key);
               emptyArr.push(senators.filter(e => e.ID === key));
               selectedCandidateIDS.push(key);
               //finalCandidatesList[key] = senators.filter(e => e.ID === key);
            }
         });
         finalCandidatesList['mySenators'] = emptyArr;
   }
      this.setState({finalCandidatesList, selectedCandidateIDS}, () => console.log("State after everything", this.state));
   }

   submitAndUpdateVotes = async() => {
      if(this.state.selectedCandidateIDS.length > 0){
         const db = firebase.firestore();
         for(const candidate of this.state.selectedCandidateIDS){
            let ref = db.collection("undergradVotes").doc(candidate);
            await db.runTransaction(function(transaction){
                  return transaction.get(ref).then(async function(refDoc){
                     if (!refDoc.exists){
                        console.log("Doc doesn't exist");
                     }
                     var newVoteCount = refDoc.data().voteCount + 1;
                     transaction.update(ref, { voteCount: newVoteCount });
               });
            })
            .then(function() {
                console.log("Transaction successfully committed!");
            }).catch(function(error) {
                console.log("Transaction failed: ", error);
            });
         }
      }
      console.log("Voting Complete!");

   }

   componentDidMount(){
      //document.body.style = 'background: #f2f3f4';
      document.body.style = 'background: #2d6cc0';
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

   storeData = (data) => {
   for (let key in data) {
      this.setState({[key]: data[key]});
   }
}

storeSpecialData = async(data) => {
   for (let key in data) {
      await this.setState({[key]: data[key]});
   }
   this.getFinalListOfCandidates();
}


storeSenatorData = (data) => {
   // for (let key in data) {
   //    this.setState({[key]: data[key]});
   // }
   this.setState({checkboxes: data});
}


   render(){
      console.log(this.state);

      // if(this.state.secretary.length === 0){
      //    return <h1> Loading </h1>;
      // }

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
//    -------------------------------------------



      return(

         <div>

            <div className="row justify-content-md-center" style={{paddingTop: "5%", paddingBottom: "5%"}}>
            <form>

            <Bubble
            currentStep={this.state.currentStep}
            step={1}
            position={this.state.presidents}
            ref={instance => { this.child1 = instance; }}
            callbackFromParent={this.storeData} />

            <Bubble
            currentStep={this.state.currentStep}
            step={2}
            position={this.state.vicePresidents}
            ref={instance => { this.child2 = instance; }}
            callbackFromParent={this.storeData} />

            <Checkbox
            position={this.state.senators}
            step={3}
            currentStep={this.state.currentStep}
            ref={instance => { this.child3 = instance; }}
            callbackFromParent={this.storeSpecialData}
            candidateArr={this.state.senatorCandidates}/>

            <SubmitVotes
            finalList={this.state.finalCandidatesList}
            currentStep={this.state.currentStep}
            step={4}
            />


            </form>
         </div>

         {
            this.state.currentStep === 1 && this.state.presidents.length > 0 ?
            <div className="row justify-content-center" style={{paddingTop: "0%", paddingLeft: "0%"}}>
               <div className="col-md-2 offset-md-1 col-3">
                  <button onClick={() => {this.prevStep(); this.child1.sendDataToParent()}}>
                     <img src={leftArrowIcon} style={{width: "30%", marginRight: 10}}/>
                     Back
                  </button>
               </div>
               <div className="col-md-2 offset-md-3 col-3 offset-2">
                  <button onClick={() => {this.nextStep(); this.child1.sendDataToParent()}}>Next
                     <img src={rightArrowIcon} style={{width: "30%", marginLeft: 10}}/>
                  </button>
               </div>


            </div>
            : null
         }
         {
            this.state.currentStep === 2 ?
            <div className="row justify-content-center" style={{paddingTop: "0%", paddingLeft: "0%"}}>
            <div className="col-md-2 offset-md-1 col-3">
               <button onClick={() => {this.prevStep(); this.child2.sendDataToParent()}}>
                  <img src={leftArrowIcon} style={{width: "30%", marginRight: 10}}/>
                  Back
               </button>
            </div>
            <div className="col-md-2 offset-md-3 col-3 offset-2">
               <button onClick={() => {this.nextStep(); this.child2.sendDataToParent()}}>Next
                  <img src={rightArrowIcon} style={{width: "30%", marginLeft: 10}}/>
               </button>
            </div>
            </div>
            : null
         }
         {
            this.state.currentStep === 3 ?
            <div className="row justify-content-center" style={{paddingTop: "0%", paddingLeft: "0%"}}>
            <div className="col-md-2 offset-md-1 col-3">
               <button onClick={() => {this.prevStep(); this.child3.sendDataToParent()}}>
                  <img src={leftArrowIcon} style={{width: "30%", marginRight: 10}}/>
                  Back
               </button>
            </div>
            <div className="col-md-2 offset-md-3 col-3 offset-2">
               <button onClick={() => {this.child3.sendDataToParent(); this.nextStep()}}>Next
                  <img src={rightArrowIcon} style={{width: "30%", marginLeft: 10}}/>
               </button>
            </div>

            </div>
            : null
         }
         {
            this.state.currentStep === 4 ?
            <div className="row justify-content-center" style={{paddingTop: "0%", paddingLeft: "0%"}}>
               <div className="col-md-2 offset-md-1 col-3">
                  <button onClick={() => {this.prevStep()}}>
                     <img src={leftArrowIcon} style={{width: "30%", marginRight: 10}}/>
                     Back
                  </button>
               </div>
               <div className="col-md-2 offset-md-3 col-3 offset-2">
                  <button onClick={() => {this.submitAndUpdateVotes();this.nextStep()}}>Submit
                     <img src={checkmarkIcon} style={{width: "25%", marginLeft: 10}}/>
                  </button>
               </div>
            </div>

            : null
         }

         </div>
      );
   }
}
export default dashboard;
