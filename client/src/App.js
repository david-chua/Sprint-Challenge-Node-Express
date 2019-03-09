// Used Allow-Control-Allow-Origin chrome extension for CORS issue

import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import ProjectList from './Components/ProjectList';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      projects: [],
    };
  };

  componentDidMount(){
    axios
      .get(`http://localhost:9090/api/projects`)
      .then(response =>{
        this.setState({projects: response.data})
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    console.log(this.state.projects)
    return (
      <div className="App">
        <ProjectList projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
