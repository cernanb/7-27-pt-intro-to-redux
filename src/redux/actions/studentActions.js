export const addStudent = (studentData) => {
  console.log("student data", studentData);
  // We are going to make a post request to an external API
  // Once we get the response back from the api, then we will dispatch the action with the data that comes back from the API
  return { type: "ADD_STUDENT", payload: studentData };
};
