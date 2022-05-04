import axios from "axios";
import React, { useEffect, useState } from "react";

function Teacher() {
  const [teacher, setTeacher] = useState([]);
  useEffect(async () => {
    try {
      let teachers = await axios.get(
        "https://62466c1f739ac845918e4c16.mockapi.io/react/teachers"
      );
      setTeacher(teachers.data);
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <div>
      <h1 className="text-center mt-2">Teacher List</h1>
      <div className="card-body">
        <div className="container">
          <table className="table table-success table-striped " cellSpacing="0">
            <thead>
              <tr className="text-center">
                <th>SNo.</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Class</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {teacher.map((teacher) => {
                return (
                  <tr className="justify-content-center text-center">
                    <td>{teacher.id}</td>
                    <td>{teacher.name}</td>
                    <td>{teacher.subject}</td>
                    <td>{teacher.class}</td>
                    <td>{teacher.gender}</td>
                    <td>
                      <button className="btn btn-sm btn-primary m-1">
                        View
                      </button>
                      <button className="btn btn-sm btn-warning m-1">
                        Edit
                      </button>
                      <button className="btn btn-sm btn-danger ">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
