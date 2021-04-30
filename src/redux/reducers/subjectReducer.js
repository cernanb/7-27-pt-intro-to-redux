function subjectReducer(
  state = [
    { id: 1, name: "React" },
    { id: 2, name: "Ruby" },
    { id: 3, name: "Javascript" },
  ],
  action
) {
  switch (action.type) {
    case "ADD_SUBJECT":
    // this will add a new subject to the state array
    default:
      return state;
  }
}

export default subjectReducer;
