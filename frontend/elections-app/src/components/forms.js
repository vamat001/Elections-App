import React, { Component } from "react";
import NavHeader from "./NavHeader.js";

class forms extends Component {
  render() {
    return (
      <body
        data-spy="scroll"
        data-target=".site-navbar-target"
        data-offset="300"
      >
        <div class="site-wrap">
          <div class="container d-none d-lg-block">
            <div class="row">
              <div class="col-12 text-center mb-4 mt-5">
                <img
                  class="mb-0 site-logo"
                  id="logoPic"
                  src="images/asucrlogo.png"
                ></img>
              </div>
            </div>
          </div>
          <NavHeader />
          <div class="site-section">
            <div class="container">
              <div class="row mb-5">
                <div class="col-12 text-center" data-aos="fade-up">
                  <h2 class="section-title mb-3">Forms</h2>
                  <h4>
                    ALL forms below must be submitted ONLINE by 5 p.m. on (DATE
                    TBA)
                  </h4>
                  <hr></hr>
                  <h4>
                    Candidacy Signatures must be submitted IN PRINT to the ASUCR
                    Office by 5:00pm on (DATE TBA)
                  </h4>
                  <hr></hr>
                  <h4>
                    Please address Candidacy Signature forms to: Dyanna
                    Castaneda, Elections Director.
                  </h4>
                  <hr></hr>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 col-lg-6 mb-6 mb-lg-6">
                  <div class="h-entry">
                    <img src="images/img_1.jpg" alt="Image" class="img-fluid" />
                    <h2>
                      <a href="#">Constitution and Elections Code</a>
                    </h2>
                    {/* <div class="meta mb-4">Ham Brook <span class="mx-2">&bullet;</span> Jan 18, 2019<span class="mx-2">&bullet;</span> <a href="#">News</a></div> */}
                    <ul>
                      <li>
                        <a
                          href="https://docs.google.com/document/d/1bzRxyGcEtPyHKLjbCii74SRuMJ5qnU0zy9JmTsDpAK0/edit"
                          title="ASUCR Constitution"
                          target="_blank"
                        >
                          ASUCR Constitution
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://docs.google.com/document/d/1o2UN_2_IiNAZdYAEis0Ngyza_-DOF2-Kf6fL6CZ_Snk/edit#heading=h.gjdgxs"
                          title="ASUCR Elections Code"
                          target="_blank"
                        >
                          ASUCR Elections Code
                        </a>
                      </li>
                    </ul>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                     <p><a href="#">Continue Reading...</a></p> */}
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 mb-6 mb-lg-6">
                  <div class="h-entry">
                    <img src="images/img_2.jpg" alt="Image" class="img-fluid" />
                    <h2>
                      <a href="#">Candidacy Paperwork</a>
                    </h2>
                    {/* <div class="meta mb-4">James Phelps <span class="mx-2">&bullet;</span> Jan 18, 2019<span class="mx-2">&bullet;</span> <a href="#">News</a></div> */}
                    <ul>
                      <li>
                        <a
                          href="https://elections.ucr.edu/sites/g/files/rcwecm1701/files/2019-01/Candidate_Application_Information_Packet_18-19.pdf"
                          title="Candidacy Application Information Packet"
                          target="_blank"
                        >
                          Candidacy Application Information Packet
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://associatedstudentsucr.seamlessdocs.com/f/gh7v8ktsxzuq"
                          title="Declaration of Candidacy Form"
                          target="_blank"
                        >
                          Declaration of Candidacy Form
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://elections.ucr.edu/sites/g/files/rcwecm1701/files/2019-01/Candidacy_Nomination_Form_18-19.pdf"
                          title="Candidacy Nomination Form"
                          target="_blank"
                        >
                          Candidacy Nomination Form
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://associatedstudentsucr.seamlessdocs.com/f/tyml1tz2ickl"
                          title="Eligibility Waiver Form"
                          target="_blank"
                        >
                          Eligibility Waiver Form
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://associatedstudentsucr.seamlessdocs.com/f/683q8q9a34s2"
                          title="Permission to release Personal/Educational Information"
                          target="_blank"
                        >
                          Permission to release Personal/Educational Information
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 mb-6 mb-lg-6">
                  <div class="h-entry">
                    <img src="images/img_3.jpg" alt="Image" class="img-fluid" />
                    <h2>
                      <a href="#">Referendum and Ballot Initiative Paperwork</a>
                    </h2>
                    {/* <div class="meta mb-4">James Phelps <span class="mx-2">&bullet;</span> Jan 18, 2019<span class="mx-2">&bullet;</span> <a href="#">News</a></div> */}
                    <ul>
                      <li>
                        <a
                          href="https://associatedstudentsucr.seamlessdocs.com/f/27easnzfjl98"
                          title="Declaration of Intent to File for Initiatives or Referendum"
                          target="_blank"
                        >
                          Declaration of Intent to File for Initiatives or
                          Referendum
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://associatedstudentsucr.seamlessdocs.com/f/t4axm9qmmxss"
                          title="New Pro or Con Group Registration Form"
                          target="_blank"
                        >
                          New Pro or Con Group Registration Form
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://drive.google.com/file/d/0ByhO2-K8OGrbY2o0YzU1RjdwcFU/view"
                          title="Referendum Instructions"
                          target="_blank"
                        >
                          Referendum Instructions
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 mb-6 mb-lg-6">
                  <div class="h-entry">
                    <img src="images/img_3.jpg" alt="Image" class="img-fluid" />
                    <h2>
                      <a href="#">Violations Forms</a>
                    </h2>
                    {/* <div class="meta mb-4">James Phelps <span class="mx-2">&bullet;</span> Jan 18, 2019<span class="mx-2">&bullet;</span> <a href="#">News</a></div> */}
                    <ul>
                      <li>
                        <a
                          href="https://elections.ucr.edu/sites/g/files/rcwecm1701/files/2018-08/campaign-violation-report-form_updated.pdf"
                          title="Campaign Violation Report Form"
                          target="_blank"
                        >
                          Campaign Violation Report Form
                        </a>
                      </li>
                      <p>
                        (Must file within 3 days of reported campaign violation)
                      </p>
                      <li>
                        <a
                          href="https://elections.ucr.edu/sites/g/files/rcwecm1701/files/2018-08/campaign-violation-appeal-form_updated.pdf"
                          title="Campaign Violation Appeal Form"
                          target="_blank"
                        >
                          Campaign Violation Appeal Form
                        </a>
                      </li>
                      <p>
                        (Must file within one week of Judicial Branch's initial
                        ruling)
                      </p>
                    </ul>
                  </div>
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
