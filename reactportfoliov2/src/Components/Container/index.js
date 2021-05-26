import React from "react";
import Contact from '../../Pages/Contact';
import Index from '../../Pages/Index';
import Portfolio from '../../Pages/Portfolio';

function Container(props) {
  return (
  <div className="container"> 
  
  <Index />

  <Contact />

  <Portfolio />

  </div>
  );
}

export default Container;
