import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Students from "./components/Students";
import NewStudent from "./components/NewStudent";
import { connect } from "react-redux";
import { toggleDarkMode } from "./redux/actions/darkModeActions";

class App extends React.Component {
  handleDarkMode = () => {
    console.log("toggling dark mode");
    this.props.toggleDarkMode();
  };
  render() {
    return (
      <div
        style={{
          background: this.props.darkMode ? "black" : "white",
          color: this.props.darkMode ? "white" : "black",
        }}
      >
        <button onClick={this.handleDarkMode}>{`Turn ${
          this.props.darkMode ? "Off" : "On"
        } Dark Mode`}</button>
        <Nav />
        <NewStudent />
        <Students />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps, { toggleDarkMode: toggleDarkMode })(
  App
);
