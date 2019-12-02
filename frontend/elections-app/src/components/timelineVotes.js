import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from "axios";

var Rainbow = require('rainbowvis.js');
const API_BASE = "http://localhost:5000/elections-app-4e4df/us-central1/api";

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            t1: false,
            t2: false,
            t3: false,
            t4: false,
            t5: false,
            t6: false,
            t7: false,
            presidents: [],
            vicePresidents: [],
            BCOESenators: [],
            CNASSenators: [],
            CHASSSenators: [],
            dataBar: {
              labels: [],
              datasets: [
                {
                  label: "Number of Votes",
                  data: [],
                  backgroundColor: [],
                //   borderWidth: 2,
                  borderColor: []
                }
              ]
            },
            barChartOptions: {
              responsive: true,
              maintainAspectRatio: true,
              scales: {
                xAxes: [
                  {
                    barPercentage: 1,
                    gridLines: {
                      display: true,
                      color: "rgba(0, 0, 0, 0.1)"
                    }
                  }
                ],
                yAxes: [
                  {
                    gridLines: {
                      display: true,
                      color: "rgba(0, 0, 0, 0.1)"
                    },
                    ticks: {
                      beginAtZero: true,
                      stepSize: 1
                    }
                  }
                ]
              }
            }
        }
    }

    async componentDidMount() {
        await axios.get(API_BASE + "/getAllVotes")
        .then((res) => {
            console.log(res);
            this.setState({allPositions: res.data}, this.setAllCandidates);
        })

        // let BCOESenators = [];
        // let CNASSenators = [];
        // let CHASSSenators = [];
        // let vicePresidents = [];
        // let presidents = [];

        // this.state.allPositions.filter((position) => {
        //     let pos = position.runningFor;
        //     if(pos === "Senator"){
        //         if (position.college === "BCOE") {
        //             BCOESenators.push(position);
        //         } else if (position.college === "CNAS") {
        //             CNASSenators.push(position);
        //         } else if (position.college === "CHASS") {
        //             CHASSSenators.push(position);
        //         } else {
        //             console.log("Wrong college value:", position);
        //         }
        //     }else if(pos === "VicePresident"){
        //         vicePresidents.push(position);
        //     }else if(pos === "President"){
        //         presidents.push(position);
        //     }
        // })
        //this.setState({presidents, vicePresidents, BCOESenators, CNASSenators, CHASSSenators});
        // console.log("State after database pull: ", this.state);
        // this.graphData(this.state.presidents);
    }

    setAllCandidates = () => {
      let BCOESenators = [];
      let CNASSenators = [];
      let CHASSSenators = [];
      let vicePresidents = [];
      let presidents = [];

      this.state.allPositions.filter((position) => {
          let pos = position.runningFor;
          if(pos === "Senator"){
             if (position.college === "BCOE") {
                  BCOESenators.push(position);
             } else if (position.college === "CNAS") {
                  CNASSenators.push(position);
             } else if (position.college === "CHASS") {
                  CHASSSenators.push(position);
             } else {
                  console.log("Wrong college value:", position);
             }
          }else if(pos === "VicePresident"){
             vicePresidents.push(position);
          }else if(pos === "President"){
             presidents.push(position);
          }
      })
      this.setState({presidents, vicePresidents, BCOESenators, CNASSenators, CHASSSenators}, this.graphData(this.state.presidents));
      console.log("State after database pull: ", this.state);
   }

    graphData = (candidates) => {
      if (candidates && candidates.length > 0) {
        var numberOfItems = candidates.length;
        let s = [];
        if (numberOfItems > 1) {
          var rainbow = new Rainbow();
          rainbow.setNumberRange(1, numberOfItems);
          rainbow.setSpectrum('#159957', '#155799');
          for (var i = 1; i <= numberOfItems; i++) {
              var hexColour = rainbow.colourAt(i);
              s.push('#' + hexColour);
          }
        } else {
          s.push("#159957");
        }

        let names = [];
        let votes = [];

        candidates.filter((candidate) => {
          names.push(candidate.name);
          votes.push(candidate.voteCount);
        })

        this.state.dataBar.datasets[0].data = votes;
        this.state.dataBar.datasets[0].backgroundColor = s;
        this.state.barChartOptions.scales.yAxes[0].ticks.max = Math.ceil(Math.max.apply(null, votes) * 1.1);
        this.setState(({dataBar}) => ({dataBar: {
          ...dataBar,
          labels: names,
        }}));
        console.log(this.state);
      }
    }

    getDate = () => {
        let date = new Date();
        let dateForm = date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
        let lower = new Date("4-1-2020");
        let upper = new Date("4-26-2020");

        //Set timeline visibility
        this.state.t1 = dateForm == "1-15-2020";
        this.state.t2 = dateForm == "2-12-2020";
        this.state.t3 = date >= lower && date <= upper;
        this.state.t4 = dateForm == "4-3-2020" || dateForm == "4-10-2020";
        lower = new Date("4-22-2020");
        upper = new Date("4-26-2020");
        this.state.t5 = date >= lower && date <= upper;
        this.state.t6 = dateForm == "5-1-2020";
        lower = new Date("5-6-2020");
        upper = new Date("5-10-2020");
        this.state.t7 = date >= lower && date <= upper;
    };

    render () {
        return(
            <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        onClick={() => this.getDate()}
                      >
                        Timeline
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={
                            this.state.t1
                                ? {
                                    background: "rgb(33, 150, 243)",
                                    color: "#000"
                                }
                                : {}
                            }
                            contentArrowStyle={{
                            borderRight: "7px solid  rgb(33, 150, 243)"
                            }}
                            date="January 15, 2020"
                            iconStyle={{
                            background: "rgb(235,186,180)",
                            color: "#fff"
                            }}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                            Referendums
                            </h3>
                            <p>Referendum/Initiative Applications due by 5pm.</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={
                            this.state.t2
                                ? {
                                    background: "rgb(33, 150, 243)",
                                    color: "#000"
                                }
                                : {}
                            }
                            contentArrowStyle={{
                            borderRight: "7px solid  rgb(33, 150, 243)"
                            }}
                            date="February 12, 2020"
                            iconStyle={{
                            background: "rgb(246,211,175)",
                            color: "#fff"
                            }}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                            Candidate Apps
                            </h3>
                            <p>Candidate Paper Work Due ONLINE by 5pm.</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={
                            this.state.t3
                                ? {
                                    background: "rgb(33, 150, 243)",
                                    color: "#000"
                                }
                                : {}
                            }
                            contentArrowStyle={{
                            borderRight: "7px solid  rgb(33, 150, 243)"
                            }}
                            date="April 1-26, 2020"
                            iconStyle={{
                            background: "rgb(251,235,165)",
                            color: "#fff"
                            }}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                            Campaigning
                            </h3>
                            <p>Campaigning Period</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={
                            this.state.t4
                                ? {
                                    background: "rgb(33, 150, 243)",
                                    color: "#000"
                                }
                                : {}
                            }
                            contentArrowStyle={{
                            borderRight: "7px solid  rgb(33, 150, 243)"
                            }}
                            date="April 3/10, 2020"
                            iconStyle={{
                            background: "rgb(181,239,206)",
                            color: "#fff"
                            }}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                            Debates
                            </h3>
                            <p>
                            Senator and Director Debates on the 3rd, Cabinet and
                            Presidential Debates on 10th
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={
                            this.state.t5
                                ? {
                                    background: "rgb(33, 150, 243)",
                                    color: "#000"
                                }
                                : {}
                            }
                            contentArrowStyle={{
                            borderRight: "7px solid  rgb(33, 150, 243)"
                            }}
                            date="April 22-26,2020"
                            iconStyle={{
                            background: "rgb(183,220,244)",
                            color: "#fff"
                            }}
                            // icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                            Voting Period
                            </h3>
                            <p>
                            Voting Period for Elections. Hours and Location TBD.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={
                            this.state.t6
                                ? {
                                    background: "rgb(33, 150, 243)",
                                    color: "#000"
                                }
                                : {}
                            }
                            contentArrowStyle={{
                            borderRight: "7px solid  rgb(33, 150, 243)"
                            }}
                            date="May 1, 2020"
                            iconStyle={{
                            background: "rgb(219,189,229)",
                            color: "#fff"
                            }}
                            // icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                            Results
                            </h3>
                            <p>Election results will be announced.</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={
                            this.state.t7
                                ? {
                                    background: "rgb(33, 150, 243)",
                                    color: "#000"
                                }
                                : {}
                            }
                            contentArrowStyle={{
                            borderRight: "7px solid  rgb(33, 150, 243)"
                            }}
                            date="May 6-10, 2020"
                            iconStyle={{
                            background: "rgb(181,189,196)",
                            color: "#fff"
                            }}
                            // icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                            Special Elections
                            </h3>
                            <p>
                            Special Elections (Run off/Appointments) will be
                            conducted.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Real-Time Vote Counting
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-secondary active" onClick={() => this.graphData(this.state.presidents)}>
                                <input type="radio" name="options" id="option1" autocomplete="off"/> Presidents
                            </label>
                            <label class="btn btn-secondary" onClick={() => this.graphData(this.state.vicePresidents)}>
                                <input type="radio" name="options" id="option2" autocomplete="off"/> Vice Presidents
                            </label>
                            <label class="btn btn-secondary" onClick={() => this.graphData(this.state.BCOESenators)}>
                                <input type="radio" name="options" id="option3" autocomplete="off"/> BCOE Senators
                            </label>
                            <label class="btn btn-secondary" onClick={() => this.graphData(this.state.CNASSenators)}>
                                <input type="radio" name="options" id="option3" autocomplete="off"/> CNAS Senators
                            </label>
                            <label class="btn btn-secondary" onClick={() => this.graphData(this.state.CHASSSenators)}>
                                <input type="radio" name="options" id="option3" autocomplete="off"/> CHASS Senators
                            </label>
                        </div>
                        <MDBContainer>
                            <h3 className="mt-5">Bar chart</h3>
                            <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
                        </MDBContainer>
                    </div>
                  </div>
                </div>
              </div>




        );
    }
}

export default Timeline;
