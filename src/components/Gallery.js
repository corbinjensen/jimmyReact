import React from 'react'

import RaceCar from '../img/jimmy_racer.jpg'
import WhoopAss from '../img/can-of.jpg'


class Gallery extends React.Component {
  render(){
    return (
      <article id="fun">

          <h2>Photos & Fun</h2>

          <img src={RaceCar} alt=""/>

          <img src={WhoopAss} alt=""/>

      </article>
    )
  }
}

export default Gallery
