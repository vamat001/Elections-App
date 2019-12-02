import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavHeader extends Component {
  render() {
    return (
      <header
        class="site-navbar py-md-4 js-sticky-header site-navbar-target"
        role="banner"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-10 main-menu sticky-top">
              <nav class="site-navigation text-right" role="navigation">
                <ol
                  class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block"
                  style={{ paddingRight: "4%" }}
                >
                  <li>
                    <Link to="/" class="nav-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/positions" class="nav-link">
                      Positions
                    </Link>
                  </li>
                  <li>
                    <Link to="/candidates" class="nav-link">
                      Candidates
                    </Link>
                  </li>
                  <li>
                    <Link to="/referendums" class="nav-link">
                      Referendums
                    </Link>
                  </li>
                  <li>
                    <Link to="/forms" class="nav-link">
                      Forms
                    </Link>
                  </li>
                  <li>
                    <a href="#" class="nav-link" onClick={this.goToLogin}>
                      Vote
                    </a>
                  </li>
                  <li>
                    <Link to="/adminLogin" class="nav-link">
                      Admin
                    </Link>
                  </li>
                </ol>
              </nav>
            </div>

            <div class="col-6 col-md-6 d-inline-block d-lg-none ml-md-0">
              <a
                href="#"
                class="site-menu-toggle js-menu-toggle text-black float-right"
              >
                <span class="icon-menu h3"></span>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default NavHeader;
