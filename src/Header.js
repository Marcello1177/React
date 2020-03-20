import React, { Component } from "react";
import './Header.css'; 


class Header extends Component {
 
  render() {

    return (
      
        <header>        
            <h4>Develop<e>Me</e>_</h4>
            <nav>
                <ul>
                    <li className="home"> <a href="#"> Learn </a></li >
                    <li className="home"> <a href="#">Hire</a></li>
                    <li className="home"> <a href="#testimonials">Testimonials</a></li>
                    <li className="home"> <a href="#">About</a></li>
                    <li className="home"> <a href="#">News</a></li>
                    <li className="home"> <a href="#">FAQ'S</a></li>
                    <li className="home"> <a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>

    );
  }
}



export default Header;