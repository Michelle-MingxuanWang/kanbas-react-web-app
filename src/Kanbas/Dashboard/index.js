import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse } ) { 
  
  /*const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };


  const addNewCourse = () => {
    setCourses([...courses,
              { ...course,
                _id: new Date().getTime() }]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  
 */
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <h5>Course</h5>
      <input value={course.name} className="form-control" 
        onChange={(e) => setCourse({ ...course, name: e.target.value }) }
      />
      <input value={course.number} className="form-control" 
      onChange={(e) => setCourse({ ...course, number: e.target.value }) }
      />
      <input value={course.startDate} className="form-control" type="date" 
      onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }
      />
      <input value={course.endDate} className="form-control" type="date" 
      onChange={(e) => setCourse({ ...course, endDate: e.target.value }) }
      />
      <button type="button" className="btn btn-success" style = {{padding: "5px 10px"}} onClick={addNewCourse} >
        Add
      </button>
      <button type="button" className="btn btn-primary" style = {{padding: "5px 10px"}} onClick={updateCourse} >
        Update
      </button>
      <div className="list-group">
        {courses.map((course) => (
          <Link key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="list-group-item">
          {course.name}
          <button type="button" className="btn btn-danger float-end" style = {{padding: "5px 10px"}}
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>

          <button type="button" className="btn btn-warning float-end" style = {{padding: "5px 10px"}}
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

          </Link>
        ))}
      </div>
      
      <hr />
      
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



/*import {React, useState} from "react";
import { Link } from "react-router-dom";
import "./index.css";
import db from "../Database";

function Dashboard() {
  const [courses, setCourses] = useState(db.courses);

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

*/