import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputForm from "./InputForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <InputForm />
      </div>
    );
  }
}

export default App;
