import React from 'react'
import cuddle from '../music/Cuddle-Jimmy_Crackcorn_Jasmin.mp3'


class Music extends React.Component {
  render(){
    return (

      <article id="music" className="music">

        <h2>Music</h2>

        <ul>

          <li className="track">

              <div className="info">

                <h3>Cuddle - Jimmy Crackcorn ft Jasmine</h3>

                <audio controls="controls" preload="none">

                  <source src={cuddle} type="audio/wav"/>

                </audio>

              </div>

          </li>

        </ul>

      </article>

    )
  }
}

export default Music
