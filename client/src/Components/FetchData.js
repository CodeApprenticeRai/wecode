import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import fetch from './FetchData.css';

class FetchData extends Component {

  state = {
    loading: true,
    user: null
  };

  // async componentDidMount() {
  //   const url = "https://api.github.com/orgs/google/repos";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.setState({
  //     user: parseInt(data[0]),
  //     loading: false
  //   });
  //   console.log(data[0]);
  // }

  render() {

    let java = 1040;
    let cpp = 2048;
    let python = 4440;
    let swift = 728;


    let total = java + cpp + python + swift;

    java = (java/total) * 100;
    cpp = (cpp/total) * 100;
    python = (python/total) * 100;
    swift = (swift/total) * 100;


    return (
      <div className="App">
        {this.state.loading || !this.state.user ? (<div>Loading</div>) : (<div>{this.state.user.id}</div>)}
        
        <Table striped bordered hover className='table'>
          <tbody>
            <tr>
              <td>Java</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>C++</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>Python</td>
              <td>40%</td>
            </tr>
          </tbody>
        </Table>;
      </div>
    );
  }
  
}

export default FetchData;
