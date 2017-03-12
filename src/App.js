import React, { Component } from 'react';
import Nav from './components/Nav'
import Header from './components/Header'
import Connect from './components/Connect'
import Shows from './components/Shows'
import Music from './components/Music'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Connect />
        <Shows />
        <Music />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default App;
