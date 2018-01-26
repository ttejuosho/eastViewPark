import React, { Component } from "react";
import '../App.css';
import '../materialize/css/materialize.css';
// import '../materialize/css/materialize.min.css';
// import '../materialize/js/materialize.js';
// import '../materialize/js/materialize.min.js';


class Header extends Component {
    render(){
        return(
            <div>
            <nav>
            <div class="nav-wrapper">
              <a href="" class="brand-logo">EAST VIEW PARK</a>
              <a href="" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
              <ul class="right hide-on-med-and-down">
                <li><a href="">Hyde Park</a></li>
                <li><a href="">Documents</a></li>
                <li><a href="">Advantage Mgt</a></li>
                <li><a href="">Service Request Form</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Log In</a></li>
              </ul>
              <ul class="side-nav" id="mobile-demo">
                <li><a href="">Hyde Park</a></li>
                <li><a href="">Documents</a></li>
                <li><a href="">Service Request</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Log In</a></li>
              </ul>
            </div>
          </nav>
                </div>
        )
    }
}

export default Header;