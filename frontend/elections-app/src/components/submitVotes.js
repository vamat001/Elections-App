import React, { Component } from "react";
// import axios from "axios";
import "./submitVotes.css";
// const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";


class SubmitVotes extends Component {
   constructor(){
      super();
      this.state = {
         presName: null,
         vpName: null,
         senatorNames: null
      };
   }

   render(){
      if(this.props.currentStep !== this.props.step){
         return null;
      }
      let presName = null;
      let vpName = null;
      let senatorNames = [];
      let finalList = null;
      let pres = this.props.finalList['President'];

      if(pres != null){
         try{
            presName = pres[0]['name'];
            //this.setState({presName});
         }catch(error){
            console.log(error);
         }
         try{
            let vp = this.props.finalList['VP'];
            vpName = vp[0]['name'];
            //this.setState({vpName});
         }catch(error){
            console.log(error);
         }
         try{
            let senators = this.props.finalList['mySenators'];
            senators.map(candidate =>{
              senatorNames.push(candidate[0]['name']);
           });
           //this.setState({senatorNames});
         }catch(error){
            console.log(error);
         }
      }
      console.log("Final selection: ", presName, vpName, senatorNames);
      return(

         <div className="container-fluid">
            <div className="row" style={{ width: "100%"}}>
               <div className="col">President: {presName}</div>
            </div>
            <div style={{paddingTop: 0.7, paddingBottom: 0.7, width: "100%", backgroundColor:"black"}}></div>
            <div className="row" style={{width: "100%"}}>
               <div className="col">Vice President: {vpName}</div>
            </div>
            <div style={{paddingTop: 0.7, paddingBottom: 0.7, width: "100%", backgroundColor:"black"}}></div>
            <div className="row" style={{ width: "100%"}}>
               <div className="col">Secretary: {senatorNames.join(', ')}</div>
            </div>





         </div>



      );
   }

}

export default SubmitVotes;
