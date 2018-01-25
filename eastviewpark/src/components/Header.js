import React, { Component } from "react";
import '../App.css';
import './materialize/css/materialize.css';
import './materialize/css/materialize.min.css';
import './materialize/js/materialize.js';
import './materialize/js/materialize.min.js';


class Header extends Component {
    render(){
        return(
            <div>
                <nav class="nav-extended">
                    <div class="nav-wrapper">
                    <a href="#!" class="brand-logo">Logo</a>
                    <ul class="right hide-on-med-and-down">
                        <li><a>A link</a></li>
                        <li><a>A second link</a></li>
                        <li><a>A third link</a></li>
                    </ul>
                    </div>
                    <div class="nav-content">
                    <span class="nav-title">Title</span>
                    <a class="btn-floating btn-large halfway-fab waves-effect waves-light teal">
                        <i class="material-icons">add</i>
                    </a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;