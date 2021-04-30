import React, { Component } from "react";
import { addStudent } from "../redux/actions/studentActions";
import { connect } from "react-redux";

class NewStudent extends Component {
  state = {
    newName: "",
    newCity: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting...");
    this.props.addStudent(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            onChange={this.handleChange}
            name="newName"
            value={this.state.newName}
          />
          <label>City: </label>
          <input
            type="text"
            onChange={this.handleChange}
            name="newCity"
            value={this.state.newCity}
          />
          <button>Create Student</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addStudent: addStudent })(NewStudent);
