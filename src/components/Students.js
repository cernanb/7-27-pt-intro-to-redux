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
  return {
    students: state.students,
  };
};

export default connect(mapStateToProps)(Students);
