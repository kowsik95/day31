import React from "react";
import { useFormik } from "formik";

function StudentEdit() {
  //   let formik = UseFormik();
  return (
    <div className="container">
      <fieldset className="border border-dark mt-3 p-4">
        <legend>Student's Log</legend>

        <form>
          <div className="row">
            <div className="col-lg-6">
              <label className="fw-bolder fs-5">Name</label>
              <input type={"text"} name="name" className="form-control" />
            </div>
            <div className="col-lg-6">
              <label className="fw-bolder fs-5">Class</label>
              <input type={"text"} name="class" className="form-control" />
            </div>
            <div className="col-lg-6">
              <label className="fw-bolder fs-5">Section</label>
              <input type={"text"} name="class" className="form-control" />
            </div>
            <div className="col-lg-6">
              <label className="fw-bolder fs-5">RollNo.</label>
              <input type={"text"} name="class" className="form-control" />
            </div>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default StudentEdit;
