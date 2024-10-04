
import { FaGripVertical, FaCaretDown, FaPlus, FaEllipsisVertical, FaFilePen, FaCircleCheck } from "react-icons/fa6";
import {FaSearch} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Assignments() {
  const courseAssignments = [
    { _id: "1", title: "A1", week: "Week 1", dueDate: "May 13", points: 100 },
    { _id: "2", title: "A2", week: "Week 2", dueDate: "May 20", points: 100 },
    { _id: "3", title: "A3", week: "Week 3", dueDate: "May 27", points: 100 },
  ];
  const courseId = "1234"; 

  return (
    <div id="wd-assignments" className="container">
      <div className="d-flex gap-1 mt-3">
        <div className="input-group w-25 me-auto">
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search..." 
            aria-label="Search for Assignment" 
          />
        </div>
        <button type="button" className="btn btn-secondary">
          <FaPlus className="me-1" /> Group
        </button>
        <button type="button" className="btn btn-danger">
          <FaPlus className="me-1" /> Assignment
        </button>
      </div>

      <ul className="list-group square-list-group mb-3 mt-4">
        <li className="list-group-item list-group-item-secondary">
          <div className="d-flex justify-content-start align-items-center">
            <FaGripVertical className="me-2" />
            <FaCaretDown className="me-2" />
            <div className="assignment-title flex-grow-1">Assignments</div>
            <small className="border border-black rounded-pill p-1 me-3">40% of Total</small>
            <FaPlus className="me-3" />
            <FaEllipsisVertical className="me-3" />
          </div>
        </li>
        {courseAssignments.map((assignment, index) => (
          <li className="list-group-item assignment-border" key={index}>
            <div className="d-flex justify-content-start align-items-center">
              <div className="border-start border-3 border-success me-3"></div>
              <FaGripVertical className="me-2" />
              <FaFilePen className="assignment-item-icon fa-lg me-3" />
              <div className="assignment-item flex-grow-1">
                <div className="d-flex flex-column">
                  <div className="assignment-item">
                    <Link
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                      className="assignment-link"
                    >
                      {assignment.title}
                    </Link>
                  </div>
                  <small className="text-body-secondary">{assignment.week}</small>
                  <small className="text-body-secondary">
                    <b>Due</b> {assignment.dueDate} | {assignment.points} pts
                  </small>
                </div>
              </div>
              <FaCircleCheck className="fa-lg me-3" style={{ color: 'green' }} />
              <FaEllipsisVertical className="me-3" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
