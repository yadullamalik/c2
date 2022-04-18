import { useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button
      id="btn"
        className="togglebtn"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "go to students list" : "Add a new student"}
      </button>
      {show ? <AddStudent /> : <ShowStudents />}
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
