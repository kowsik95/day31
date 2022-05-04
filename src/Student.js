import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Student() {
  const [students, setStudents] = useState([]);
  useEffect(async () => {
    try {
      let student = await axios.get(
        "https://62466c1f739ac845918e4c16.mockapi.io/react/students"
      );
      console.log(student);
      setStudents(student.data);
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <div>
      <h1 className="text-center mt-2">Student List</h1>
      <div className="card-body">
        <div className="container">
          <table className="table table-success table-striped " cellSpacing="0">
            <thead>
              <tr className="text-center">
                <th>SNo.</th>
                <th>Name</th>
                <th>Class</th>
                <th>Section</th>
                <th>RollNo.</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                return (
                  <tr className="justify-content-center text-center">
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.class}</td>
                    <td>{student.section}</td>
                    <td>{student.rollno}</td>
                    <td>
                      <Link
                        to={`/studentView/${student.id}`}
                        className="btn btn-sm btn-primary m-1"
                      >
                        View
                      </Link>
                      <Link
                        to={`/studentEdit`}
                        className="btn btn-sm btn-warning m-1"
                      >
                        Edit
                      </Link>
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

export default Student;
