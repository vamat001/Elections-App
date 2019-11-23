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
            presName = pres[0]['Name'];
            //this.setState({presName});
         }catch(error){
            console.log(error);
         }
         try{
            let vp = this.props.finalList['VP'];
            vpName = vp[0]['Name'];
            //this.setState({vpName});
         }catch(error){
            console.log(error);
         }
         try{
            let senators = this.props.finalList['mySenators'];
            senatorsList = senators.map(candidate =>
               <li key={candidate[0]['ID']}>{candidate[0]['Name']}</li>
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
      //console.log(pres[0]);
      //console.log(this.state);
         // finalList = this.props.finalList.map((e) => (
         //    <li key={e}>
         //       <label htmlFor={e.ID}>{e.Name}</label>
         //       <div className="check"></div>
         //    </li>
         // ));
//<h1>President: {presName}</h1>

// {
//    presName !== null ?
//    <div className="row justify-content-md-center" style={{backgroundColor: "blue", textAlign: "center"}}>
//          <h1> President: {presName}</h1>
//    </div>
//    : null
// }

// <div className="col">
//    <h1 style={{color: "orange"}}>President: {presName}</h1>
// </div>

//<div style={{paddingTop: 0.7, paddingBottom: 0.7, width: "100%", backgroundColor:"black"}}></div>
      return(

         <div className="container-fluid">

         <div className="row" style={{width: "100%"}}>
            <h1 style={{color: "white"}}>Selected Candidates</h1>
         </div>

            <div className="row" style={{ width: "100%"}}>
               <div style={{ width: "100%", paddingBottom: 0, backgroundColor: "orange", borderRadius: 10, border:"solid 3px white"}}>
                  <div style={{paddingLeft: "5%", paddingBottom: "5%", paddingTop: "5%"}}>
                     <h1 style={{color: "white"}}>President</h1>
                     <h3 style={{color: "white"}}>{presName}</h3>
                  </div>
               </div>
            </div>


            <div className="row" style={{ width: "100%"}}>
               <div style={{ width: "100%", paddingBottom: 0, backgroundColor: "orange", borderRadius: 10, border:"solid 3px white"}}>
                  <div style={{paddingLeft: "5%", paddingBottom: "5%", paddingTop: "5%"}}>
                     <h1 style={{color: "white"}}>Vice President</h1>
                     <h3 style={{color: "white"}}>{vpName}</h3>
                  </div>
               </div>
            </div>


            <div className="row" style={{ width: "100%"}}>
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
