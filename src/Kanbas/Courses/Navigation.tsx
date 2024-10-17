import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const location = useLocation();
  const { cid } = useParams();

  // Define the array of link objects with labels and corresponding paths
  const links = [
    { label: "Home", path: "Home" },
    { label: "Modules", path: "Modules" },
    { label: "Piazza", path: "Piazza" },
    { label: "Zoom", path: "Zoom" },
    { label: "Assignments", path: "Assignments" },
    { label: "Quizzes", path: "Quizzes" },
    { label: "Grades", path: "Grades" },
    { label: "People", path: "People" },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map(({ label, path }) => {
        // Construct the path based on the course ID and label
        const to = `/Kanbas/Courses/${cid}/${path}`;
        const isActive = location.pathname === to; // Determine if the link is active
        
        return (
          <Link
            key={`wd-course-${path.toLowerCase()}-link`} // Unique ID for each link
            to={to}
            className={`list-group-item border-0 ${isActive ? 'text-black' : 'text-danger'}`}
            style={isActive ? { position: 'relative' } : {}}
          >
            {isActive && <div className="vertical-line" />} {/* Add vertical line for active link */}
            {label}
          </Link>
        );
      })}
    </div>
  );
}
