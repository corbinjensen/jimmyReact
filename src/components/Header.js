import React from 'react'

import JimmyHero1 from '../img/jimmy-rocking-out.jpg'
import JimmyHero2 from '../img/jimmyspecs.jpg'

import '../css/Header.css'

class Header extends React.Component {
  render(){
    return (
      <header>

        <img
            src={JimmyHero1}
            alt="Jimmy Crackcorn Rocking Out on Country Guitar"
          />

          <img
            src={JimmyHero2}
            className="hero2"
            alt=""
          />

      </header>
    )
  }
}

export default Header
