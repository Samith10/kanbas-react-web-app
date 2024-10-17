import { FaGripVertical, FaCaretDown, FaPlus, FaEllipsisVertical, FaCircleCheck } from 'react-icons/fa6';
import { AiOutlineStop } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Modules() {
  // const { cid } = useParams();
  const modules = db.modules;

  return (
    <div id="wd-modules" className="container">
      <div className="d-flex gap-1 mt-3">
        <div className="input-group w-25 me-auto">
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search..." 
            aria-label="Search for Module" 
          />
        </div>
        <button type="button" className="btn btn-secondary">Collapse All</button>
        <button type="button" className="btn btn-secondary">View Progress</button>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FaCircleCheck className="me-2" style={{ color: 'lightgreen' }} />
            Publish All
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/dummy-publish-all">
                <FaCircleCheck className="me-2" style={{ color: 'green' }} />
                Publish all modules and items
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/dummy-publish-modules">
                <FaCircleCheck className="me-2" style={{ color: 'green' }} />
                Publish modules only
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/dummy-unpublish-all">
                <AiOutlineStop className="me-2" style={{ color: 'gray' }} />
                Unpublish all modules and items
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/dummy-unpublish-modules">
                <AiOutlineStop className="me-2" style={{ color: 'gray' }} />
                Unpublish modules only
              </a>
            </li>
          </ul>
        </div>
        <button type="button" className="btn btn-danger">
          <FaPlus className="me-1" /> Module
        </button>
      </div>

      {modules.map((module, index) => (
        <ul className="list-group square-list-group mb-3 mt-4" key={index}>
          <li className="list-group-item list-group-item-secondary">
            <div className="d-flex justify-content-start align-items-center">
              <FaGripVertical className="me-2" />
              <FaPlus className="me-2" />
              <div className="module-title flex-grow-1">{module.name}</div>
              <FaCircleCheck className="me-2" style={{ color: "green" }} />
              <FaCaretDown className="me-2" />
              <FaPlus className="me-3" />
              <FaEllipsisVertical />
            </div>
          </li>
          {module.lessons && module.lessons.map((lesson, subIndex) => (
            <li className="list-group-item module-border" key={subIndex}>
              <div className="d-flex justify-content-start align-items-center">
                <FaGripVertical className="me-2" />
                <div className="module-subtitle flex-grow-1">
                  {lesson.name.toUpperCase()}
                </div>
                <FaCircleCheck className="me-3" style={{ color: "green" }} />
                <FaEllipsisVertical />
              </div>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
