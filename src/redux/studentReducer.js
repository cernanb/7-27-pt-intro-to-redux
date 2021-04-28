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
    default:
      return state;
  }
}

export default studentReducer;
