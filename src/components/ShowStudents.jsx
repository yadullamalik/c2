import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Student.css";

export const ShowStudents = () => {
  const [data, setData] = useState([]);
  const sortbyRef = useRef(null);
  const sortorderRef = useRef(null);
  const handlesortbyChange = (e) => {
    sortbyRef.current = e.target;
    sortbyRef.current = data;
  };
  const handlesortorderChange = (e) => {
    sortorderRef.current = e.target;
    sortorderRef.current = data;
  };
  const handleSort = () => {
    let arr = data.sort((a, b) => b - a);
    setData([...arr]);
  };

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios.get("http://localhost:8080/students").then((res) => {
      setData(res.data);
    });
  };
  // console.log('data:', data)
  return (
    <div className="main">
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            onChange={handlesortbyChange}
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            onChange={handlesortorderChange}
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort" onClick={handleSort}>
          sort
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {data.map((e) => {
            return (
              <tr className="row" key={e.id}>
                <td className="first_name">{e.first_name}</td>
                <td className="last_name">{e.last_name}</td>
                <td className="email">{e.email}</td>
                <td className="gender">{e.gender}</td>
                <td className="age">{e.age}</td>
                <td className="tenth_score">{e.tenth_score}</td>
                <td className="twelth_score">{e.twelth_score}</td>
                <td className="preferred_branch">{e.preferred_branch}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
