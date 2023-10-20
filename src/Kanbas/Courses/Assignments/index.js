import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import Button from "./button";
import './index.css';
import { FaBook } from "react-icons/fa";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="assignment_container">
      <Button />
      <h4>Assignments</h4>
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <FaBook className="wd-icon me-2" />
                {assignment.title}
              </div>
              <button type="button" className="btn btn-light">...</button>
            </div>
            
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;