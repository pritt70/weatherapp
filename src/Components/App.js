import React, { Component } from 'react'
import '../App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Weather from './Weather';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Weather'element={<Weather></Weather>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
