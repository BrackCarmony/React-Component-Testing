import React, { Component } from 'react';
import Blog from './components/blog';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Blog title="This is my title" blog = "This is my blog" warning="warning message"/>
      </div>
    );
  }
}

export default App;
