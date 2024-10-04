import { Link, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const location = useLocation();

  const links = [
    { id: 'wd-course-home-link', to: '/Kanbas/Courses/1234/Home', label: 'Home' },
    { id: 'wd-course-modules-link', to: '/Kanbas/Courses/1234/Modules', label: 'Modules' },
    { id: 'wd-course-piazza-link', to: '/Kanbas/Courses/1234/Piazza', label: 'Piazza' },
    { id: 'wd-course-zoom-link', to: '/Kanbas/Courses/1234/Zoom', label: 'Zoom' },
    { id: 'wd-course-assignments-link', to: '/Kanbas/Courses/1234/Assignments', label: 'Assignments' },
    { id: 'wd-course-quizzes-link', to: '/Kanbas/Courses/1234/Quizzes', label: 'Quizzes' },
    { id: 'wd-course-grades-link', to: '/Kanbas/Courses/1234/Grades', label: 'Grades' },
    { id: 'wd-course-people-link', to: '/Kanbas/Courses/1234/People', label: 'People' },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map(link => {
        const isActive = location.pathname === link.to;
        return (
          <Link
            key={link.id}
            id={link.id}
            to={link.to}
            className={`list-group-item border-0 ${isActive ? 'text-black' : 'text-danger'}`}
            style={isActive ? { position: 'relative' } : {}}
          >
            {isActive && <div className="vertical-line" />}
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
