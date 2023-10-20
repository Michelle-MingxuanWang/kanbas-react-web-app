import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = [
    "Home", "Modules", "Piazza", "ZoomMeetings", "Assignments", "Quizzes",
    "Grades", "PanoptoVideo", "Discussions", "Announcements", "Pages", "Settings",
    "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus"
  ];

  const { courseId } = useParams();
  const { pathname } = useLocation();

  return (
    <div className="wd-course-navigation list-group">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname === `/Kanbas/Courses/${courseId}/${link}` ? "active" : ""}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
