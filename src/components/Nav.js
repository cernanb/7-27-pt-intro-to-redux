import React from "react";
import { connect } from "react-redux";

function Nav({ studentNum, subjectNum }) {
  return (
    <div>
      <ul>
        <li>
          <p>Home</p>
        </li>
        <li>
          <p>Students - ({studentNum})</p>
        </li>
        <li>
          <p>Subjects - ({subjectNum})</p>
        </li>
        <li>
          <p>New Student</p>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    studentNum: state.students.length,
    subjectNum: state.subjects.length,
  };
};

export default connect(mapStateToProps)(Nav);
