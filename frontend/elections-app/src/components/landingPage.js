import React, { Component } from "react";
import "./landingPage.css";

class landingPage extends Component {

   goToLogin = () => {
      this.props.history.push('/login');
   }


   render(){
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
                   <nav class="site-navigation position-relative text-right" role="navigation">

                     <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                       <li><a href="#Home" class="nav-link">Home</a></li>
                       <li><a href="#Referendums" class="nav-link">Referendums</a></li>
                       <li><a href="#testimonials-section" class="nav-link">Candidates</a></li>
                       <li><a href="#" class="nav-link">Positions</a></li>
                       <li><a href="#" class="nav-link">Vote</a></li>
                       <li><a href="#Questions" class="nav-link">Contact Us</a></li>
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


                   </div>

                 </div>
               </div>
             </div>
           </div>

          {/*Referendums*/}
           <div class="site-section bg-light" id="Referendums">
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


           <div class="site-section testimonial-wrap" id="testimonials-section">
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
