import React, { Component } from 'react';
import './About.css'
class About extends Component {

  render() {
    return (
      <div className="about-container">
      <div className="about-header">
      FRONT END FOCUSED
WITH FULL STACK EXPERIENCE
      </div>
      <div className="about-content">
      <div id="content-1">
      <div className="content-header">
      MOTIVATED TO PRODUCE RESULTS
      </div>
      <div className="about-desc">
      As a tenacious self-taught programmer, I use continuous iteration to produce results quickly and continuously improve products.
      </div>
      <div className="content-header">
      AN AGILE COLLABORATOR
      </div>
      <div className="about-desc">
      I have contributed to open source projects, worked on engineering teams, and always stay attuned to the newest frameworks.
      </div>
      </div>
      <div id="content-2">
      <div id="icons">
      <img src="javascript.png" alt="JS" className="icon"/>
                        <img src="railsLogo.png" alt="Node" className="icon"/>
                        <img src="react.png" alt="React" className="icon"/>
      </div>
      </div>
      </div>
      </div>
    );
  }

}

export default About;
