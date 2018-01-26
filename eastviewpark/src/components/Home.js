import React, { Component } from "react";
import '../App.css';
import '../materialize/css/materialize.css';
import Gate from '../images/evp0.jpg';


class Home extends Component {
    render(){
        return(
            <div>
                <section>
                <img className='homeImg' src={Gate} alt='EastViewPark'/>
                </section>
            </div>
        )
    }
}

export default Home;