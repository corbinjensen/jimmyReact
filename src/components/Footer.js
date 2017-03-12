import React from 'react'

import JimmyLady from '../img/jimmy_lady.jpg'

import '../css/Footer.css'

class Footer extends React.Component {
  render(){
    return (
      <footer>
        <img
          src={JimmyLady}
          alt="Jimmy Crack Corn Logo"
        />
      </footer>
    )
  }
}

export default Footer
