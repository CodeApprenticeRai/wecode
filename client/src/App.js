import React, { Component } from 'react';

import './App.css';
import FetchData from './Components/FetchData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchData/>
      </div>
    );
  }
}

export default App;
