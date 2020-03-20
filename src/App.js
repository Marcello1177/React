import React, { Fragment } from "react";

import {
  // BrowserRouter as Router,
  HashRouter as Router,
} from "react-router-dom";

import Header from "./Header";
import Hero from "./Hero";
import Pathway from "./Pathway";
import Testimonials from "./Testimonials"




const App = () => (
  
  <Router>
    
      <Fragment>
       
        <Header></Header>
        <Hero></Hero>
        <Pathway></Pathway>
        <Testimonials></Testimonials>
       
      </Fragment>
  </Router>  
);

export default App;


