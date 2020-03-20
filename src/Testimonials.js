import React from "react";
import { Card } from "react-bootstrap";
import Carousel from 'react-images';
import './Testimonials.css';
import jack from '../src/img/Jack.jpg'

const images = [
    { source: jack },
    { source: jack },
];

class Testimonials extends React.Component {
 
  render() {

    return (     
      <div id="testimonials">
              
              <Card className="text-center">
                <Card.Header className="carousel"><h3>Testimonials</h3></Card.Header>
                <Card.Body className="carousel">
                    <p className="testName">Jack</p>
                    <p className="test">Charity Worker to Web Developer</p>
                    <Carousel views={images} />
                    <p>"<q className="test">I would thorougly recommend to anyone to move to this field</q></p>
                </Card.Body>
                <Card.Footer className="carousel"><button className="buttonGrad">Meet our Graduates ></button></Card.Footer>
              </Card>

              <h3>Course reviews</h3>
            
        
      </div>
    );
  }
}

export default Testimonials;