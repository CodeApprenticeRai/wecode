import React, { Component } from 'react';
import Fetch from './Components/FetchData';
import search from './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: '',
    }
  }

  eventHandler(event){
    this.setState({
      data:event.target.value
    })
  }

  render() {
    return (
      <div className="App">

        <h3>Search for a school</h3>
        <div id={search['search-input']}>
            <input type="text" onChange={this.eventHandler.bind(this)}/>
            <p>{this.state.data}</p>
        </div>
        <Fetch/>
      </div>
    );
  }
}

export default App;