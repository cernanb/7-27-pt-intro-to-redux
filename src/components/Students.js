import React, { Component } from "react";

export default class Students extends Component {
  state = {
    students: [
      { id: 1, name: "Cernan", city: "San Diego" },
      { id: 2, name: "Daisy", city: "La Jolla" },
      { id: 3, name: "Ashley", city: "Clairemont" },
    ],
  };
  render() {
    return (
      <div>
        <div>
          {this.state.students.map((student) => (
            <div key={student.id}>
              {student.name} - {student.city}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
