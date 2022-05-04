import React from "react";
import { useParams } from "react-router-dom";

function StudentView() {
  let params = useParams();
  return (
    <div className="container">
      StudentView
      <h1>{params.id}</h1>
      {/* <h1>{params.name}</h1> */}
    </div>
  );
}

export default StudentView;
