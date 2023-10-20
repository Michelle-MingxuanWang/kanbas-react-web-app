import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import db from "../Database";

function Dashboard() {
  const courses = db.courses;

  return (
    <div className="wd-dashboard-container">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div className="row d-flex justify-content-start flex-wrap">
        {courses.map((course, index) => (
          
          <div key={course._id} className="col-auto ms-5 mt-4 mb-4" style={{ width: "260px" }}>
            <div className="card h-100">
              <div style={{ backgroundColor: "2981C9", height: "150px" }}>
                <i className="fa-solid fa-ellipsis-vertical float-end me-4 pt-4 text-white fa-lg"></i>
              </div>
              <div className="card-body">
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="no_underline_link"
                >
                  {course.name}
                </Link>

                <p className="card-text">{course.number}<br />
                    <small>{course.startDate}</small> - <small>{course.endDate}</small><br />
                      
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

