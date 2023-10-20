import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="assignment_container" style={{ marginTop: '80px' }}>
      <h2>Assignment Name</h2>
      <input value={assignment.title}
             className="form-control" />
      <div className = "float-end">
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-light">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger">
          Save
        </button></div>
    </div>
  );
}


export default AssignmentEditor;