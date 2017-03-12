import React, { Component } from 'react';
import Nav from './components/Nav'
import Header from './components/Header'
import Connect from './components/Connect'
import Shows from './components/Shows'
import Music from './components/Music'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

// main css
import './css/style.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Connect />
        <Shows />
        <Music />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default App;
