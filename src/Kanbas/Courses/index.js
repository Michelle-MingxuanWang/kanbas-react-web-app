import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css";

function Courses(courses) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [empty, kanbas, coursenames, id, screen] = pathname.split("/");
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-auto">
            <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#courseNavigation">
              <div class="menu"></div>
            </button>
          </div>
          <div className="col ps-0">
            <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
              <ol className="breadcrumb pt-3">
                <li className="breadcrumb-item">
                  <a href="#" className="text-danger text-decoration-none">{courseId}</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {`Courses ${course.name} > ${screen}`}
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <hr/>
      </div>

      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "270px",
            top: "60px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
