import React, { Component } from "react";
import './Pathway.css'

class Pathway extends Component {
 
  render() {

    return (     
        <div>
          <div>
            <section className="card1">
                <p className="icons">&#128640;</p> 
                <p>Immersive</p>
                <p>Full Time | 12 Weeks</p>
                <p className="description">Accelerate your career change with a full-time course</p>
                <button className="buttonPath1">Coding Bootcamp</button>
            </section>

            <section className="card2">
                <p className="icons">&#128435;</p>
                <p className="immersive">Flexible</p>
                <p className="immersive">Part Time | 6-10 Weeks</p>
                <p className="immersive">Advance your career by adding new skills with these part-time courses</p>
                <button className="buttonPath2">User Experience Design</button>
                <button className="buttonPath3">Front-End Development</button>
            </section>
          </div>
        </div>


    );
  }
}

export default Pathway;