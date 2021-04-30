function studentReducer(
  state = [
    { id: 1, name: "Cernan", city: "San Diego" },
    { id: 2, name: "Daisy", city: "La Jolla" },
    { id: 3, name: "Ashley", city: "La Jolla" },
    { id: 4, name: "John", city: "Chula Vista" },
    { id: 5, name: "Denise", city: "San Diego" },
  ],
  action
) {
  switch (action.type) {
    case "ADD_STUDENT":
      const formattedStudent = {
        id: state.length + 1,
        name: action.payload.newName,
        city: action.payload.newCity,
      };
      // return [...state, formattedStudent];
      return state.concat(formattedStudent);
    default:
      return state;
  }
}

export default studentReducer;
