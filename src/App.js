import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Folder from "./Folder";
import "./App.css";

class App extends React.Component {
  state = {
    folders: [],
    notes: []
  };
  render() {
    return (
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <main />
        <section />
      </div>
    );
  }
}

export default App;
