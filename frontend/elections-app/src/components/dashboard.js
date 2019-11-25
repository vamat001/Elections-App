import React, { Component } from "react";
import axios from "axios";
import Bubble from "./Bubble";
import Checkbox from "./Checkbox";
import SubmitVotes from "./submitVotes";
import firebase from "firebase";

const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";
const db = firebase.firestore();

class dashboard extends Component {
   constructor(){
      super();
      this.state = {
         currentStep: 1,
         step: 1,
         vicePresidents: [],
         senators: [],
         presidents: [],
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

   getAllPositions = async () => {
      await axios.get(API_BASE + "/Candidates")
      .then((res) => {
         this.setState({allPositions: res.data});
      })
      let senators = [];
      let vicePresidents = [];
      let presidents = [];

      this.state.allPositions.filter((position) => {
         let pos = position.runningFor;
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
     this.state.senators.map(candidate => {
        senatorCandidates.push(candidate.ID);
     });
     this.setState({senatorCandidates});
     console.log("state:", this.state);
   }

   getFinalListOfCandidates = () => {
      let finalCandidatesList = {};
      let filteredPresident = this.state.presidents.filter(e => e.ID === this.state.president);
      let filteredVP = this.state.vicePresidents.filter(e => e.ID === this.state.vp);

      if(filteredPresident.length > 0){
         finalCandidatesList["President"] = filteredPresident;
      }

      if(filteredVP.length > 0){
         finalCandidatesList["VP"] = filteredVP;
      }

      if(this.state.senatorsSelected !== null){
         let senators = this.state.senators;
         const obj = this.state.senatorsSelected;
         let emptyArr = [];
         Object.entries(obj).forEach(function([key, value]) {
            if(value === true){
               emptyArr.push(senators.filter(e => e.ID === key))
            }
         });
         finalCandidatesList['mySenators'] = emptyArr;
   }
      this.setState({finalCandidatesList}, () => console.log("State after everything", this.state));
   }

   componentDidMount(){
      document.body.style = 'background: #f2f3f4';
      this.getAllPositions();
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

   increment = (collectionPath, docName) => {
      let ref = db.collection(collectionPath).doc(docName);
      db.runTransaction(function(transaction){
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

   submit = async () => {
      this.increment("undergradVotes", this.state.president);
      this.increment("undergradVotes", this.state.vp);
      for (let senator in this.state.senatorsSelected) {
         this.increment("undergradVotes", senator);
      }
   }

   storeVPData = (data) => {
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
      this.setState({checkboxes: data});
   }

   render(){
      console.log(this.state);
      return(
         <div>
            <div className="rowSubmit">
            <form>
               <Bubble
               currentStep={this.state.currentStep}
               step={1}
               position={this.state.presidents}
               ref={instance => { this.child1 = instance; }}
               callbackFromParent={this.storeVPData} />

               <Bubble
               currentStep={this.state.currentStep}
               step={2}
               position={this.state.vicePresidents}
               ref={instance => { this.child2 = instance; }}
               callbackFromParent={this.storeVPData} />

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
            <button onClick={() => {this.child3.sendDataToParent(); this.nextStep()}}>Next</button>
            </div>
            : null
         }
         {
            this.state.currentStep === 4 ?
            <div className="row" style={{paddingTop: "10%", paddingLeft: "50%"}}>
               <button onClick={() => {this.prevStep()}}>Prev</button>
               <button onClick={() => {this.submit()}}>Finish</button>
            </div>
            : null
         }

         </div>
      );
   }
}
export default dashboard;
