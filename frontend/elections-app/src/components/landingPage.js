import React, { Component } from "react";
// import Navbar from "./navbar";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./landingPage.css";
import { Link } from "react-router-dom";

class landingPage extends Component {
  state = {t1:false, t2:false, t3:false, t4:false, t5:false, t6:false, t7:false};
   goToLogin = () => {
      this.props.history.push('/login');
   }

   test = () => {
     let date = new Date();
     let dateForm = (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear();
     let lower = new Date("4-1-2020");
     let upper = new Date("4-26-2020"); 

     //Set timeline visibility
     this.state.t1 = (dateForm == "1-15-2020");
     this.state.t2 = (dateForm == "2-12-2020");
     this.state.t3 = (date >= lower && date <= upper);
     this.state.t4 = (dateForm == "4-3-2020" || dateForm == "4-10-2020");
     lower = new Date("4-22-2020");
     upper = new Date("4-26-2020");
     this.state.t5 = (date >= lower && date <= upper);
     this.state.t6 = (dateForm == "5-1-2020");
     lower = new Date("5-6-2020");
     upper = new Date("5-10-2020");
     this.state.t7 = (date >= lower && date <= upper);
   }

   render(){
    this.test();
      return(
         <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">

         <div class="site-wrap"  id="Home">

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


           <div class="site-blocks-cover">
             <div class="container">
               <div class="row align-items-center justify-content-center">


                 <div class="col-md-12" style={{position: 'relative'}} data-aos="fade-up">
                   <div class="row mb-4">
                     <div class="col-lg-4 mr-auto">
                       <h1>Voting is Open!</h1>
                       <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                       <div>
                         <button class="btn btn-primary mr-2 mb-2" onClick={this.goToLogin}>Vote Now</button>
                       </div>
                     </div> 
                     <div class="col-lg-6 mr-auto">
                       <img src="images/ucr.jpg" class="img-fluid" />
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>

          {/*Election Information*/}
          <div class="site-section bg-light" id="Information">
            <div class="container">
              <div class="row mb-5">
                <div class="col-12 text-center">
                  <h2 class="section-title mb-3">Test Info</h2>
                </div>
              </div>
                 <div class="accordion" id="accordionExample">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={() => this.setState({})}>
                          Timeline
                        </button>
                      </h2>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div class="card-body">
                      <VerticalTimeline>
                        <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={this.state.t1 ? { background: 'rgb(33, 150, 243)', color: '#000' } : {}}
                          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                          date="January 15, 2020"
                          iconStyle={{ background: 'rgb(235,186,180)', color: '#fff' }}
                          // icon={<WorkIcon />}
                        >
                          <h3 className="vertical-timeline-element-title">Referendums</h3>
                          <p>
                            Referendum/Initiative Applications due by 5pm.
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={this.state.t2 ? { background: 'rgb(33, 150, 243)', color: '#000' } : {}}
                          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                          date="February 12, 2020"
                          iconStyle={{ background: 'rgb(246,211,175)', color: '#fff' }}
                          // icon={<WorkIcon />}
                        >
                          <h3 className="vertical-timeline-element-title">Candidate Apps</h3>
                          <p>
                            Candidate Paper Work Due ONLINE by 5pm.
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={this.state.t3 ? { background: 'rgb(33, 150, 243)', color: '#000' } : {}}
                          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                          date="April 1-26, 2020"
                          iconStyle={{ background: 'rgb(251,235,165)', color: '#fff' }}
                          // icon={<WorkIcon />}
                        >
                          <h3 className="vertical-timeline-element-title">Campaigning</h3>
                          <p>
                            Campaigning Period
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={this.state.t4 ? { background: 'rgb(33, 150, 243)', color: '#000' } : {}}
                          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                          date="April 3/10, 2020"
                          iconStyle={{ background: 'rgb(181,239,206)', color: '#fff' }}
                          // icon={<WorkIcon />}
                        >
                          <h3 className="vertical-timeline-element-title">Debates</h3>
                          <p>
                            Senator and Director Debates on the 3rd, Cabinet and Presidential Debates on 10th
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-element--education"
                          contentStyle={this.state.t5 ? { background: 'rgb(33, 150, 243)', color: '#000' } : {}}
                          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                          date="April 22-26,2020"
                          iconStyle={{ background: 'rgb(183,220,244)', color: '#fff' }}
                          // icon={<SchoolIcon />}
                        >
                          <h3 className="vertical-timeline-element-title">Voting Period</h3>
                          <p>
                            Voting Period for Elections. Hours and Location TBD.
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-element--education"
                          contentStyle={this.state.t6 ? { background: 'rgb(33, 150, 243)', color: '#000' } : {}}
                          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                          date="May 1, 2020"
                          iconStyle={{ background: 'rgb(219,189,229)', color: '#fff' }}
                          // icon={<SchoolIcon />}
                        >
                          <h3 className="vertical-timeline-element-title">Results</h3>
                          <p>
                            Election results will be announced. 
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          className="vertical-timeline-element--education"
                          contentStyle={this.state.t7 ? { background: 'rgb(33, 150, 243)', color: '#000' } : {}}
                          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                          date="May 6-10, 2020"
                          iconStyle={{ background: 'rgb(181,189,196)', color: '#fff' }}
                          // icon={<SchoolIcon />}
                        >
                          <h3 className="vertical-timeline-element-title">Special Elections</h3>
                          <p>
                            Special Elections (Run off/Appointments) will be conducted.
                          </p>
                        </VerticalTimelineElement>
                      </VerticalTimeline>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Real-Time Vote Counting
                        </button>
                      </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          {/*Referendums*/}
           <div class="site-section" id="Referendums">
             <div class="container">
               <div class="row mb-5">
                 <div class="col-12 text-center">
                   <h2 class="section-title mb-3">Referendums</h2>
                 </div>
               </div>
               <div class="row align-items-stretch">
                 <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">

                   <div class="unit-4 d-block">
                     <div class="unit-4-icon mb-3">
                       <span class="icon-wrap"><span class="text-primary icon-autorenew"></span></span>
                     </div>
                     <div>
                       <h3>Referendum 1</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                     </div>
                   </div>

                 </div>
                 <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">

                   <div class="unit-4 d-block">
                     <div class="unit-4-icon mb-3">
                       <span class="icon-wrap"><span class="text-primary icon-store_mall_directory"></span></span>
                     </div>
                     <div>
                       <h3>Referendum 2</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                     </div>
                   </div>
                 </div>
                 <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" >
                   <div class="unit-4 d-block">
                     <div class="unit-4-icon mb-3">
                       <span class="icon-wrap"><span class="text-primary icon-shopping_basket"></span></span>
                     </div>
                     <div>
                       <h3>Referendum 3</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                     </div>
                   </div>
                 </div>


                 <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                   <div class="unit-4 d-block">
                     <div class="unit-4-icon mb-3">
                       <span class="icon-wrap"><span class="text-primary icon-settings_backup_restore"></span></span>
                     </div>
                     <div>
                       <h3>Referendum 4</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                     </div>
                   </div>
                 </div>

                 <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                   <div class="unit-4 d-block">
                     <div class="unit-4-icon mb-3">
                       <span class="icon-wrap"><span class="text-primary icon-sentiment_satisfied"></span></span>
                     </div>
                     <div>
                       <h3>Referendum 5</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                     </div>
                   </div>


                 </div>

                 <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                   <div class="unit-4 d-block">
                     <div class="unit-4-icon mb-3">
                       <span class="icon-wrap"><span class="text-primary icon-power"></span></span>
                     </div>
                     <div>
                       <h3>Referendum 6</h3>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                     </div>
                   </div>
                 </div>
                 <div>
                    <p style={{marginLeft: 1 + 'em'}}><a href="#" class="btn btn-primary">Learn More</a></p>
                 </div>
               </div>
             </div>
           </div>
{/* 
           <div class="feature-big" id="Candidates">
             <div class="container">
               <div class="row mb-5 site-section border-bottom">
                 <div class="col-lg-7">
                   <img src="images/do_ui_kit_download_cta_floating_devices-2x.png" alt="Image" class="img-fluid" />
                 </div>
                 <div class="col-lg-5 pl-lg-5 ml-auto mt-md-5">
                   <h2 class="text-black">Create interactive prototypes</h2>
                   <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.</p>
                   <ul class="ul-check mb-5 list-unstyled success">
                     <li>Adipisci excepturi aliquam</li>
                     <li>Deleniti labore reiciendis</li>
                   </ul>
                   <div class="author-box">
                     <div class="d-flex mb-4">
                       <div class="mr-3">
                         <img src="images/person_1.jpg" alt="Image" class="img-fluid rounded-circle" />
                       </div>
                       <div class="mr-auto text-black">
                         <strong class="font-weight-bold mb-0">Amalia G.</strong> <br/>
                         Co-Founder, XYZ Inc.
                       </div>
                     </div>
                     <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?&rdquo;</blockquote>
                   </div>
                 </div>
               </div>

               <div class="mt-5 row mb-5 site-section ">
                 <div class="col-lg-7 order-1 order-lg-2">
                   <img src="images/do_ui_kit_hero_floating_devices-2x.png" alt="Image" class="img-fluid" />
                 </div>
                 <div class="col-lg-5 pr-lg-5 mr-auto mt-5 order-2 order-lg-1">
                   <h2 class="text-black">Create interactive prototypes</h2>
                   <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam</p>
                   <ul class="ul-check mb-5 list-unstyled success">
                     <li>Laborum enim quasi at modi</li>
                     <li>Ad at tempore</li>
                   </ul>


                   <div class="author-box">
                     <div class="d-flex mb-4">
                       <div class="mr-3">
                         <img src="images/person_4.jpg" alt="Image" class="img-fluid rounded-circle"/>
                       </div>
                       <div class="mr-auto text-black">
                         <strong class="font-weight-bold mb-0">Darren K.</strong> <br/>
                         Co-Founder, XYZ Inc.
                       </div>
                     </div>
                     <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?&rdquo;</blockquote>
                   </div>
                 </div>
               </div>
             </div>
           </div>


           <div class="site-section bg-light" id="Forms">
             <div class="container">
               <div class="row mb-5">
                 <div class="col-12 text-center">
                   <h2 class="section-title mb-3">About Us</h2>
                 </div>
               </div>
               <div class="row mb-5">
                 <div class="col-lg-6">
                   <img src="images/about_1.jpg" alt="Image" class="img-fluid mb-5 mb-lg-0 rounded shadow"/>
                 </div>
                 <div class="col-lg-5 ml-auto pl-lg-5">
                   <h2 class="text-black mb-4">Create interactive prototypes</h2>
                   <p class="mb-4">Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.</p>
                   <p><a href="#" class="btn btn-primary">Learn More</a></p>
                 </div>
               </div>

             </div>
           </div> */}


           <div class="site-section testimonial-wrap bg-light" id="testimonials-section">
             <div class="container">
               <div class="row mb-5">
                 <div class="col-12 text-center">
                   <h2 class="section-title mb-3">Featured Candidates</h2>
                 </div>
               </div>
             </div>
             <div class="slide-one-item home-slider owl-carousel">
                 <div>
                   <div class="testimonial">
                     <figure class="mb-4 d-block align-items-center justify-content-center">
                       <div><img src="images/person_3.jpg" alt="Image" class="w-100 img-fluid mb-3 shadow"/></div>
                     </figure>
                     <blockquote class="mb-3">
                       <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                     </blockquote>
                     <p class="text-black"><strong>John Smith</strong></p>


                   </div>
                 </div>
                 <div>
                   <div class="testimonial">

                     <figure class="mb-4 d-block align-items-center justify-content-center">
                       <div><img src="images/person_2.jpg" alt="Image" class="w-100 img-fluid mb-3 shadow"/></div>
                     </figure>

                     <blockquote class="mb-3">
                       <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                     </blockquote>

                     <p class="text-black"><strong>Robert Aguilar</strong></p>


                   </div>
                 </div>

                 <div>
                   <div class="testimonial">
                     <figure class="mb-4 d-block align-items-center justify-content-center">
                       <div><img src="images/person_4.jpg" alt="Image" class="w-100 img-fluid mb-3 shadow"/></div>
                     </figure>
                     <blockquote class="mb-3">
                       <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                     </blockquote>
                     <p class="text-black"><strong>Roger Spears</strong></p>


                   </div>
                 </div>

                 <div>
                   <div class="testimonial">
                     <figure class="mb-4 d-block align-items-center justify-content-center">
                       <div><img src="images/person_1.jpg" alt="Image" class="w-100 img-fluid mb-3 shadow"/></div>
                     </figure>
                     <blockquote class="mb-3">
                       <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                     </blockquote>
                     <p class="text-black"><strong>Kyle McDonald</strong></p>


                   </div>

                 </div>
               </div>
               <div>
                  <p style={{textAlign:"center"}}><a href="#" class="btn btn-primary">All Candidates</a></p>
               </div>
           </div>

           <div class="site-section" id="blog-section">
             <div class="container">
               <div class="row mb-5">
                 <div class="col-12 text-center">
                   <h2 class="section-title mb-3">Blog Posts</h2>
                 </div>
               </div>

               <div class="row">
                 <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                   <div class="h-entry">
                     <img src="images/img_1.jpg" alt="Image" class="img-fluid"/>
                     <h2><a href="#">Create interactive prototypes</a></h2>
                     <div class="meta mb-4">Ham Brook <span class="mx-2">&bullet;</span> Jan 18, 2019<span class="mx-2">&bullet;</span> <a href="#">News</a></div>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                     <p><a href="#">Continue Reading...</a></p>
                   </div>
                 </div>
                 <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                   <div class="h-entry">
                     <img src="images/img_2.jpg" alt="Image" class="img-fluid"/>
                     <h2><a href="#">Create interactive prototypes</a></h2>
                     <div class="meta mb-4">James Phelps <span class="mx-2">&bullet;</span> Jan 18, 2019<span class="mx-2">&bullet;</span> <a href="#">News</a></div>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                     <p><a href="#">Continue Reading...</a></p>
                   </div>
                 </div>
                 <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                   <div class="h-entry">
                     <img src="images/img_3.jpg" alt="Image" class="img-fluid"/>
                     <h2><a href="#">Create interactive prototypes</a></h2>
                     <div class="meta mb-4">James Phelps <span class="mx-2">&bullet;</span> Jan 18, 2019<span class="mx-2">&bullet;</span> <a href="#">News</a></div>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                     <p><a href="#">Continue Reading...</a></p>
                   </div>
                 </div>

               </div>
             </div>
           </div>

           <div class="site-section bg-light" id="Questions">
             <div class="container">
               <div class="row mb-5">
                 <div class="col-12 text-center">
                   <h2 class="section-title mb-3">Get In Touch</h2>
                 </div>
               </div>
               <div class="row justify-content-center">
                 <div class="col-lg-7 mb-5">



                   <form action="#" class="p-5 bg-white">

                     <h2 class="h4 text-black mb-5">Contact Form</h2>

                     <div class="row form-group">
                       <div class="col-md-6 mb-3 mb-md-0">
                         <label class="text-black" for="fname">First Name</label>
                         <input type="text" id="fname" class="form-control rounded-0" />
                       </div>
                       <div class="col-md-6">
                         <label class="text-black" for="lname">Last Name</label>
                         <input type="text" id="lname" class="form-control rounded-0" />
                       </div>
                     </div>

                     <div class="row form-group">

                       <div class="col-md-12">
                         <label class="text-black" for="email">Email</label>
                         <input type="email" id="email" class="form-control rounded-0" />
                       </div>
                     </div>

                     <div class="row form-group">

                       <div class="col-md-12">
                         <label class="text-black" for="subject">Subject</label>
                         <input type="subject" id="subject" class="form-control rounded-0" />
                       </div>
                     </div>

                     <div class="row form-group">
                       <div class="col-md-12">
                         <label class="text-black" for="message">Message</label>
                         <textarea name="message" id="message" cols="30" rows="7" class="form-control rounded-0" placeholder="Write your notes or questions here..."></textarea>
                       </div>
                     </div>

                     <div class="row form-group">
                       <div class="col-md-12">
                         <input type="submit" value="Send Message" class="btn btn-primary mr-2 mb-2" />
                       </div>
                     </div>


                   </form>
                 </div>

               </div>

             </div>
           </div>

           <div class="footer py-5 border-top text-center">

               <div class="row">
                 <div class="col-md-12">
                   <p class="mb-0">

                     Copyright All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>

                   </p>
                 </div>
               </div>
             </div>
           </div>


         </body>
      );
   }
}

export default landingPage;
