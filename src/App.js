import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Students from "./components/Students";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Students />
      </div>
    );
  }
}

export default App;
