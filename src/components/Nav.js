import React from 'react'

import JimmyLogo from '../img/jimmyheader_4.png'
import JimmyLady from '../img/jimmy_lady.jpg'

class Nav extends React.Component {
  render(){
    return (
      <nav>
        <ul>
          <li><a href="#shows">Shows</a></li>
          <li><a href="#music">Music</a></li>
          <li className="jimmy-logo"><a href="index.html">
            <img
            src={JimmyLogo}
            className="logo"
            alt="Jimmmy Crack Corn Logo"/>
          </a></li>
          <li className="connect-nav"><a href="#connect">Connect</a></li>
          <li><a href="#fun">
            <img
            src={JimmyLady}
            alt="Jimmy Crack Corn Logo"
            className="logo2"/>
          </a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
