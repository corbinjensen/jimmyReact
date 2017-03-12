import React from 'react'

import JimmyLady from '../img/jimmy_lady.jpg'

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
