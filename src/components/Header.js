import React, { Component } from 'react';
import './Header.css'

class Header extends Component {

  render() {
    return (
      <div className="header">
      <div className="title-container">
      <div className="title">Miguel Morales</div>
      <div className="sub-title">FRONT END ENGINEER</div>
      <button className="projects-button">SEE PROJECTS</button>
      </div>
      </div>
    );
  }

}

export default Header;
