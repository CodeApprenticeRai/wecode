import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

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
 
  componentDidMount() {
    const url = "/api/stats/google";
    return axios
      .get(url)
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
  }

/*
  componentDidMount() {
    const url = "/api/stats/google";
    return fetch(url).then(res => console.log(res));
  }*/

  render() {
    let java = 1040;
    let cpp = 2048;
    let python = 4440;
    let swift = 728;

    let total = java + cpp + python + swift;

    java = (java / total) * 100;
    cpp = (cpp / total) * 100;
    python = (python / total) * 100;
    swift = (swift / total) * 100;

    return (
      <div className="App">
       <h3>Indiana University - Perdue University Indianapolis </h3> 
        <Table striped bordered hover className="table">
          <tbody>
            <tr>
              <td>Java</td>
              <td>43%</td>
            </tr>
            <tr>
              <td>C++</td>
              <td>28%</td>
            </tr>
            <tr>
              <td>Python</td>
              <td>18%</td>
            </tr>
            <tr>
            <td>Others</td>
            <td>11%</td>
          </tr>
          </tbody>
        </Table>
        ;
      </div>
    );
  }
}

export default FetchData;
