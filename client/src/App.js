import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="col-3">
            <div className="row">
            What Languages Do You Know?

            Using GitHub data to objectively  visuzlize programming language competency
            </div>
            <div className="row">
            1. Use the GitHub API to get information on a user's commit history.
            2. Count the number of lines of code per file type.
            3. Visualize it !
            </div>
          </div>
          <div className="col">
            <div className="row"></div>
            <div className="row"></div>
          </div>
        <div>
      </div>
    );
  }
}

export default App;
