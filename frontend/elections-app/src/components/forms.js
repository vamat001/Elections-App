import React, { Component } from "react";
import { Link } from "react-router-dom";

class forms extends Component {
  render() {
    return (
      <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
      <div class="site-mobile-menu site-navbar-target">
             <div class="site-mobile-menu-header">
               <div class="site-mobile-menu-close mt-3">
                 <span class="icon-close2 js-menu-toggle"></span>
               </div>
             </div>
             <div class="site-mobile-menu-body"></div>
           </div>

           <div class="container d-none d-lg-block">
             <div class="row">
               <div class="col-12 text-center mb-4 mt-5">
                   <h1 class="mb-0 site-logo text-black h2 mb-0">UCR Elections<span class="text-primary"></span></h1>
                 </div>
             </div>
           </div>
           <header class="site-navbar py-md-4 js-sticky-header site-navbar-target" role="banner">

             <div class="container">
               <div class="row align-items-center">

                 <div class="col-6 col-md-6 col-xl-2  d-block d-lg-none">
                   <h1 class="mb-0 site-logo"><a href="index.html" class="text-black h2 mb-0">UCR Elections<span class="text-primary">.</span> </a></h1>
                 </div>

                 <div class="col-12 col-md-10 main-menu">
                   <nav class="site-navigation text-right" role="navigation">

                     <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block" style={{paddingRight: "4%"}}>
                       <li><Link to="/" class="nav-link">Home</Link></li>
                       <li><Link to="/positions" class="nav-link">Positions</Link></li>
                       <li><Link to="/candidates" class="nav-link">Candidates</Link></li>
                       <li><Link to="/referendums" class="nav-link">Referendums</Link></li>
                       <li><Link to="/forms" class="nav-link">Forms</Link></li>
                       <li><a href="#" class="nav-link" onClick={this.goToLogin}>Vote</a></li>
                     </ul>
                   </nav>
                 </div>
                 <div class="col-6 col-md-6 d-inline-block d-lg-none ml-md-0" ><a href="#" class="site-menu-toggle js-menu-toggle text-black float-right"><span class="icon-menu h3"></span></a></div>

               </div>
             </div>

           </header>

           <div class="site-section" id="blog-section">
             <div class="container">
               <div class="row mb-5">
                 <div class="col-12 text-center">
                   <h2 class="section-title mb-3">Forms</h2>
                   <h4>ALL forms below must be submitted ONLINE by 5 p.m. on (DATE TBA)</h4>
                   <hr></hr>
                   <h4>Candidacy Signatures must be submitted IN PRINT to the ASUCR Office by 5:00pm on (DATE TBA)</h4>
                   <hr></hr>
                   <h4>Please address Candidacy Signature forms to: Dyanna Castaneda, Elections Director.</h4>
                   <hr></hr>
                 </div>
               </div>

               <div class="row">
                 <div class="col-md-6 col-lg-6 mb-6 mb-lg-6">
                   <div class="h-entry">
                     <img src="images/img_1.jpg" alt="Image" class="img-fluid"/>
                     <h2><a href="#">Constitution and Elections Code</a></h2>
                     {/* <div class="meta mb-4">Ham Brook <span class="mx-2">&bullet;</span> Jan 18, 2019<span class="mx-2">&bullet;</span> <a href="#">News</a></div> */}
                     <ul>
                       <li><a href="https://docs.google.com/document/d/1bzRxyGcEtPyHKLjbCii74SRuMJ5qnU0zy9JmTsDpAK0/edit" title="ASUCR Constitution" target="_blank">ASUCR Constitution</a></li>
                       <li><a href="https://docs.google.com/document/d/1o2UN_2_IiNAZdYAEis0Ngyza_-DOF2-Kf6fL6CZ_Snk/edit#heading=h.gjdgxs" title="ASUCR Elections Code" target="_blank">ASUCR Elections Code</a></li>
                     </ul>
                     {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                     <p><a href="#">Continue Reading...</a></p> */}
                   </div>
                 </div>
                 <div class="col-md-6 col-lg-6 mb-6 mb-lg-6">
                   <div class="h-entry">
                     <img src="images/img_2.jpg" alt="Image" class="img-fluid"/>
                     <h2><a href="#">Candidacy Paperwork</a></h2>
                     {/* <div class="meta mb-4">James Phelps <span class="mx-2">&bullet;</span> Jan 18, 2019<span class="mx-2">&bullet;</span> <a href="#">News</a></div> */}
                     <ul>
                       <li><a href="https://elections.ucr.edu/sites/g/files/rcwecm1701/files/2019-01/Candidate_Application_Information_Packet_18-19.pdf" title="Candidacy Application Information Packet" target="_blank">Candidacy Application Information Packet</a></li>
                       <li><a href="https://associatedstudentsucr.seamlessdocs.com/f/gh7v8ktsxzuq" title="Declaration of Candidacy Form" target="_blank">Declaration of Candidacy Form</a></li>
                       <li><a href="https://elections.ucr.edu/sites/g/files/rcwecm1701/files/2019-01/Candidacy_Nomination_Form_18-19.pdf" title="Candidacy Nomination Form" target="_blank">Candidacy Nomination Form</a></li>
                       <li><a href="https://associatedstudentsucr.seamlessdocs.com/f/tyml1tz2ickl" title="Eligibility Waiver Form" target="_blank">Eligibility Waiver Form</a></li>
                       <li><a href="https://associatedstudentsucr.seamlessdocs.com/f/683q8q9a34s2" title="Permission to release Personal/Educational Information" target="_blank">Permission to release Personal/Educational Information</a></li>
                     </ul>
                   </div>
                 </div>
                 <div class="col-md-6 col-lg-6 mb-6 mb-lg-6">
                   <div class="h-entry">
                     <img src="images/img_3.jpg" alt="Image" class="img-fluid"/>
                     <h2><a href="#">Referendum and Ballot Initiative Paperwork</a></h2>
                     {/* <div class="meta mb-4">James Phelps <span class="mx-2">&bullet;</span> Jan 18, 2019<span class="mx-2">&bullet;</span> <a href="#">News</a></div> */}
                     <ul>
                       <li><a href="https://associatedstudentsucr.seamlessdocs.com/f/27easnzfjl98" title="Declaration of Intent to File for Initiatives or Referendum" target="_blank">Declaration of Intent to File for Initiatives or Referendum</a></li>
                       <li><a href="https://associatedstudentsucr.seamlessdocs.com/f/t4axm9qmmxss" title="New Pro or Con Group Registration Form" target="_blank">New Pro or Con Group Registration Form</a></li>
                       <li><a href="https://drive.google.com/file/d/0ByhO2-K8OGrbY2o0YzU1RjdwcFU/view" title="Referendum Instructions" target="_blank">Referendum Instructions</a></li>
                     </ul>
                   </div>
                 </div>
                 <div class="col-md-6 col-lg-6 mb-6 mb-lg-6">
                   <div class="h-entry">
                     <img src="images/img_3.jpg" alt="Image" class="img-fluid"/>
                     <h2><a href="#">Violations Forms</a></h2>
                     {/* <div class="meta mb-4">James Phelps <span class="mx-2">&bullet;</span> Jan 18, 2019<span class="mx-2">&bullet;</span> <a href="#">News</a></div> */}
                     <ul>
                       <li><a href="https://elections.ucr.edu/sites/g/files/rcwecm1701/files/2018-08/campaign-violation-report-form_updated.pdf" title="Campaign Violation Report Form" target="_blank">Campaign Violation Report Form</a></li>
                       <p>(Must file within 3 days of reported campaign violation)</p>
                       <li><a href="https://elections.ucr.edu/sites/g/files/rcwecm1701/files/2018-08/campaign-violation-appeal-form_updated.pdf" title="Campaign Violation Appeal Form" target="_blank">Campaign Violation Appeal Form</a></li>
                       <p>(Must file within one week of Judicial Branch's initial ruling)</p>
                     </ul>
                   </div>
                 </div>

               </div>
             </div>
           </div>

           </body>
    );
  }
}

export default forms;
