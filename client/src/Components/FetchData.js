import React, { Component } from 'react';


class FetchData extends Component {

  state = {
    loading: true,
    user: null
  };

  async componentDidMount() {
    const url = "http://dummy.restapiexample.com/api/v1/employees";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      user: data[0],
      loading: false
    });
    console.log(data[0]);
  }

  render() {
    return (
      <div className="App">
    {this.state.loading || !this.state.user ? (<div>Loading</div>) : (<div>{this.state.user.id}</div>)}
      </div>
    );
  }
  
}

export default FetchData;
