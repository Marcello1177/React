import React, { Component } from "react";
import './Hero.css'; 
import hero from '../src/img/code.jpg'


class Hero extends Component {
 
  render() {

    return (

      <div>
          
        <picture>
            <img src={ hero } alt="hero"/>
        </picture>
          

        <div className="FindOut">
              <h2>We are a tech career accelerator - with a vision to educate the workforce that reflects the full diversity of society. </h2>

            <button className="ButtonFind"> Find out more > </button> 
        </div>

        <h3>Choose your pathway</h3>
        <p>&#x25BD; </p>

      </div>


    );
  }
}

export default Hero;