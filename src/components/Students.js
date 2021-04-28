import React, { Component } from "react";
import { connect } from "react-redux";

class Students extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.students.map((student) => (
            <div key={student.id}>
              {student.name} - {student.city}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const laJollaStudents = state.students.filter(
    (student) => student.city === "La Jolla"
  );
  return {
    students: laJollaStudents,
  };
};

export default connect(mapStateToProps)(Students);
