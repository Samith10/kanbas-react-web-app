import { FaGripVertical, FaCaretDown, FaPlus, FaEllipsisVertical, FaCircleCheck } from 'react-icons/fa6';
import { AiOutlineStop } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Modules() {
  const modules = [
    {
      title: "Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda",
      submodules: [
        {
          subtitle: "LEARNING OBJECTIVES",
          items: [
            { title: "Introduction to the course" },
            { title: "Learn what is Web Development" },
          ],
        },
        {
          subtitle: "READING",
          items: [
            { title: "Full Stack Developer - Chapter 1 - Introduction" },
            { title: "Full Stack Developer - Chapter 2 - Creating Us" },
          ],
        },
        {
          subtitle: "SLIDES",
          items: [
            { title: "Introduction to Web Development" },
            { title: "Creating an HTTP server with Node.js" },
            { title: "Creating a React Application" },
          ],
        },
      ],
    },
    {
      title: "Week 1, Lecture 2 - Formatting User Interfaces with HTML",
      submodules: [
        {
          subtitle: "LEARNING OBJECTIVES",
          items: [
            { title: "Learn how to create user interfaces with HTML" },
            { title: "Deploy the assignment to Netlify" },
          ],
        },
        {
          subtitle: "SLIDES",
          items: [
            { title: "Introduction to HTML and the DOM" },
            { title: "Formatting Web content with Headings" },
            { title: "Formatting content with Lists and Tables" },
          ],
        },
      ],
    },
  ];

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
              <a className="dropdown-item" href="#">
                <FaCircleCheck className="me-2" style={{ color: 'green' }} />
                Publish all modules and items
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <FaCircleCheck className="me-2" style={{ color: 'green' }} />
                Publish modules only
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <AiOutlineStop className="me-2" style={{ color: 'gray' }} />
                Unpublish all modules and items
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
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
              <div className="module-title flex-grow-1">{module.title}</div>
              <FaCircleCheck className="me-2" style={{ color: "green" }} />
              <FaCaretDown className="me-2" />
              <FaPlus className="me-3" />
              <FaEllipsisVertical />
            </div>
          </li>
          {module.submodules.map((submodule, subIndex) => (
            <div key={subIndex}>
              <li className="list-group-item module-border">
                <div className="d-flex justify-content-start align-items-center">
                  <FaGripVertical className="me-2" />
                  <div className="module-subtitle flex-grow-1">
                    {submodule.subtitle.toUpperCase()}
                  </div>
                  <FaCircleCheck className="me-3" style={{ color: "green" }} />
                  <FaEllipsisVertical />
                </div>
              </li>
              {submodule.items.length > 0 && submodule.items.map((item, itemIndex) => (
                <li className="list-group-item module-border" key={itemIndex}>
                  <div className="d-flex justify-content-start align-items-center">
                    <FaGripVertical className="me-2" />
                    <span className="module-item flex-grow-1">{item.title}</span>
                    <FaCircleCheck className="me-3" style={{ color: "green" }} />
                    <FaEllipsisVertical />
                  </div>
                </li>
              ))}
            </div>
          ))} 
        </ul>
      ))}
    </div>
  );
}
