import React from 'react'

import '../css/Connect.css'

class Connect extends React.Component {
  render(){
    return (
      <article id="connect">
          <h2>Connect</h2>
          <ul>
            <li><a href="https://twitter.com/cornjc"><i className="fa fa-twitter" aria-hidden="true"></i>  Twitter</a></li>
            <li><a href="#"><i className="fa fa-facebook " aria-hidden="true"></i>  Facebook</a></li>
            <li><i className="fa fa-envelope" aria-hidden="true"></i>  Email</li>
          </ul>
      </article>
    )
  }
}

export default Connect
