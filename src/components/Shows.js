import React from 'react'


class Shows extends React.Component {
  render(){
    return (
      <article id="shows">
        <h2>Upcoming Shows</h2>
        <div className="wrapper">
          <ul className="upcoming-shows">
            <li>
              <h4>Lethbridge</h4>
              <p>9</p>
              <p>Example pub</p>
            </li>
            <li>
              <h4>Lac La Biche</h4>
              <p>10</p>
              <p>Lucy's</p>
            </li>
            <li>
              <h4>Leduc</h4>
              <p>11</p>
              <p>The Spinsters Hall</p>
            </li>
          </ul>
          <div className="shows-photo">
          </div>
        </div>
      </article>

    )
  }
}

export default Shows
