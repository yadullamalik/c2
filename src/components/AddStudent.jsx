import axios from "axios";
import { useEffect, useState } from "react";
import "./Student.css";

export const AddStudent = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    age: "",
    tenth_score: "",
    twelth_score: "",
    preferred_branch: "",
  });

  const handleChange = (e) => {
    let { name, value, radio, type } = e.target;
    value = type === "radio" ? radio : value;
    setData({ ...data, [name]: value });
  };

  const postData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/students", data);
  };
  const firstnameSubmit = () => {
    return data.first_name.length <= 0 ? "Please Enter First name" : null;
  };
  const lastnameSubmit = () => {
    return data.last_name.length <= 0 ? "Please Enter Last name" : null;
  };
  const emailSubmit = () => {
    return data.email.length <= 0 ? "Please Enter email" : null;
  };
  const ageSubmit = () => {
    return data.age > 50 ? "Please Enter Correct Age" : null;
  };
  const tenthSubmit = () => {
    return data.tenth_score > 100 ? "Please Enter Correct Marks" : null;
  };
  const twelthSubmit = () => {
    return data.twelth_score > 100 ? "Please Enter Correct Marks" : null;
  };
  // console.log("data:", data);
  return (
    <form className="addstudent" onSubmit={postData}>
      <div>
        Firstname:{" "}
        <input
          value={data.first_name}
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          value={data.last_name}
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          value={data.email}
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
          onChange={handleChange}
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            type="radio"
            value={"male"}
            onChange={handleChange}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          onChange={handleChange}
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          onChange={handleChange}
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          onChange={handleChange}
        />{" "}
      </div>
      <div>
        <select
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
          onChange={handleChange}
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
      {/* {firstnameSubmit()}
      {lastnameSubmit()}
      {emailSubmit()}
      {ageSubmit()}
      {tenthSubmit()}
      {twelthSubmit()} */}
    </form>
  );
};
