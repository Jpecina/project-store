import React, { Component } from 'react';
import axios from 'axios'

import logo from './logo.svg';
import './App.css';
import Routes from './Routes';

class App extends Component {
  ComponentDidMount(){
    axios.get('/api/test').then(response=>{
      console.log(response);
    }).catch(console.log)
  }
  render() {
    return (
      <div className="App">
        {Routes}
      </div>
    );
  }
}

export default App;
