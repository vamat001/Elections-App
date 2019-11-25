import React, { Component } from "react";
import axios from "axios";
import "./submitVotes.css";
const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";


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
      let senatorsList = null;
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
            senatorsList = senators.map(candidate =>
               <li key={candidate[0]['ID']}>{candidate[0]['name']}</li>
            );
           //  senators.map(candidate =>{
           //    senatorNames.push(candidate[0]['Name']);
           // });
           //this.setState({senatorNames});
         }catch(error){
            console.log(error);
         }

      }
      console.log(presName, vpName, senatorNames);
      
      return(

         <div className="container-fluid">

         <div className="row justify-content-md-center" style={{width: "100%", paddingTop: "5%", paddingBottom: "5%"}}>
            <h1 style={{color: "white"}}>Selected Candidates</h1>
         </div>

            <div className="row justify-content-md-center" style={{ width: "100%", paddingTop: "5%", paddingBottom: "5%"}}>
               <div style={{ width: "100%", paddingBottom: 0, backgroundColor: "orange", borderRadius: 10, border:"solid 3px white"}}>
                  <div style={{paddingLeft: "5%", paddingBottom: "5%", paddingTop: "5%"}}>
                     <h1 style={{color: "white"}}>President</h1>
                     <h3 style={{color: "white"}}>{presName}</h3>
                  </div>
               </div>
            </div>


            <div className="row justify-content-md-center" style={{ width: "100%", paddingTop: "5%", paddingBottom: "5%"}}>
               <div style={{ width: "100%", paddingBottom: 0, backgroundColor: "orange", borderRadius: 10, border:"solid 3px white"}}>
                  <div style={{paddingLeft: "5%", paddingBottom: "5%", paddingTop: "5%"}}>
                     <h1 style={{color: "white"}}>Vice President</h1>
                     <h3 style={{color: "white"}}>{vpName}</h3>
                  </div>
               </div>
            </div>


            <div className="row justify-content-md-center" style={{ width: "100%", paddingTop: "5%", paddingBottom: "5%"}}>
               <div style={{ width: "100%", paddingBottom: 0, backgroundColor: "orange", borderRadius: 10, border:"solid 3px white"}}>
                  <div style={{paddingLeft: "5%", paddingBottom: "5%", paddingTop: "5%"}}>
                     <h1 style={{color: "white"}}>Senators</h1>
                     <h3 style={{color: "white"}}>{senatorsList}</h3>
                  </div>
               </div>
            </div>

         </div>



      );
   }

}

export default SubmitVotes;
