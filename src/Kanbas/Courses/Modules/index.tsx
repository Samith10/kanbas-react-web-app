import {setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect, useCallback } from "react";
import { FaGripVertical, FaCaretDown, FaPlus, FaEllipsisVertical, FaCircleCheck } from 'react-icons/fa6';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useParams } from "react-router";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import * as coursesClient from "./client";
import * as modulesClient from "./client";
const dispatch = useDispatch();


export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
const fetchModules = useCallback(async () => {
  const modules = await coursesClient.findModulesForCourse(cid as string);
  dispatch(setModules(modules));
}, [cid, dispatch]);  // Memoize `fetchModules` with dependencies like `cid` and `dispatch`

useEffect(() => {
  fetchModules();
}, [fetchModules]); 

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };
  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };
  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };




  return (
    <div id="wd-modules" className="container">
      <ModulesControls 
        moduleName={moduleName} 
        setModuleName={setModuleName}
        addModule={createModuleForCourse} 
      />
      {/* <div className="d-flex gap-1 mt-3">
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
      </div> */}

      <ul className="list-group rounded-0">
        {modules
          .map((module: any) => (
            <li className="list-group-item list-group-item-secondary" key={module._id}>
              <div className="d-flex justify-content-start align-items-center">
                <FaGripVertical className="me-2" />
                {module.editing ? (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(updateModule({ ...module, name: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule({ ...module, editing: false });                      }
                    }}
                    defaultValue={module.name}
                  />
                ) : (
                  <>
                    <span className="module-title flex-grow-1">{module.name}</span>
                    <ModuleControlButtons
                      moduleId={module._id}
                      deleteModule={(moduleId) => removeModule(moduleId)}
                      editModule={(moduleId) => dispatch(editModule(moduleId))}
                    />
                  </>
                )}
                <FaCircleCheck className="me-2" style={{ color: "green" }} />
                <FaCaretDown className="me-2" />
                <FaPlus className="me-3" />
                <FaEllipsisVertical />
              </div>
              {module.lessons && module.lessons.map((lesson: { name: string; }, subIndex: React.Key | null | undefined) => (
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
            </li>
          ))}
      </ul>
    </div>
  );
}
