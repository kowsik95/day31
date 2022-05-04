import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Student from "./Student";
import Teacher from "./Teacher";
import StudentView from "./StudentView";
import StudentEdit from "./StudentEdit";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row bg-dark">
          <div className="text-center col-lg-6">
            <Link
              to="/studentList"
              type={"button"}
              className=" btn btn-primary m-1 p-01"
              data-bs-toggle="button"
              autocomplete="off"
            >
              Student Details
            </Link>
          </div>
          <div className="text-center col-lg-6">
            <Link
              to="/teacherList"
              type={"button"}
              className="btn btn-primary m-1 p-01"
              data-bs-toggle="button"
              autocomplete="off"
            >
              Teacher Details
            </Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/studentList" element={<Student />} />
        <Route path="/teacherList" element={<Teacher />} />
        <Route path="/studentView/:id" element={<StudentView />} />
        <Route path="/studentEdit" element={<StudentEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
