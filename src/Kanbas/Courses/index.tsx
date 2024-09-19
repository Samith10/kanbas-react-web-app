import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes } from "react-router";
export default function Courses() {
    return (
      <div id="wd-courses">
        <h2>Course 1234</h2>
        <hr />
        <table>
            <tr>
            <td valign="top">
                <CoursesNavigation />
            </td>
            <td valign="top">
                <Routes>
                    <Route path="/" element={<Navigate to="1234/Home" />} />
                    <Route path=":a/Home" element={<Home />} />
                    <Route path=":a/Modules" element={<Modules />} />
                    <Route path=":a/Assignments" element={<Assignments />} />
                    <Route path=":a/Assignments/:aid" element={<AssignmentEditor />} />            
                    <Route path=":a/People" element={<h2>People</h2>} />
                    <Route path=":a/Piazza" element={<h2>Piazza</h2>} />
                    <Route path=":a/Zoom" element={<h2>Zoom</h2>} />
                    <Route path=":a/Quizzes" element={<h2>Quizzes</h2>} />
                </Routes>
            </td>
            </tr>
        </table>
      </div>
  );}
  