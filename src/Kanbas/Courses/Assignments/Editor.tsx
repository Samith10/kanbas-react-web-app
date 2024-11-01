import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateAssignment } from "./reducer"; // Update path as necessary
import * as db from "../../Database"; // Update path as necessary

export default function AssignmentEditor() {
    const { courseId, assignmentId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const assignment = db.assignments.find(a => a._id === assignmentId);

    const [name, setName] = useState(assignment ? assignment.title : "");
    const [description, setDescription] = useState(assignment ? assignment.description : "");
    const [points, setPoints] = useState(assignment ? assignment.points : 0);
    const [dueDate, setDueDate] = useState(assignment ? assignment.dueDate : "");
    const [availableFrom, setAvailableFrom] = useState(assignment ? assignment.availableFrom : "");
    const [availableUntil, setAvailableUntil] = useState(assignment ? assignment.availableUntil : "");
    const course = assignment ? assignment.course : ""; // Ensure course is always a string

    const handleSave = () => {
        const updatedAssignment = {
            _id: assignmentId!,
            title: name,
            description,
            points,
            dueDate,
            availableFrom,
            availableUntil,
            course, // This will be a string
        };
        dispatch(updateAssignment(updatedAssignment));
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div className="container" id="wd-assignments-editor">
            <form>
                <div className="row mt-3">
                    <label className="ps-0" htmlFor="wd-name">
                        <h3>Assignment Name</h3>
                    </label>
                    <input
                        id="wd-name"
                        className="form-control w-50"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="row mt-5">
                    <textarea
                        id="wd-description"
                        rows={10}
                        className="form-control w-50"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="row mt-5">
                    <div className="col-2">
                        <label className="form-label float-end" htmlFor="wd-points">Points</label>
                    </div>
                    <div className="col-4">
                        <input
                            id="wd-points"
                            type="number"
                            className="form-control"
                            value={points}
                            onChange={(e) => setPoints(Number(e.target.value))}
                        />
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-2">
                        <label className="form-label float-end">Due Date</label>
                    </div>
                    <div className="col-4">
                        <input
                            id="wd-due-date"
                            type="date"
                            className="form-control"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-2">
                        <label className="form-label float-end">Available From</label>
                    </div>
                    <div className="col-4">
                        <input
                            id="wd-available-from"
                            type="date"
                            className="form-control"
                            value={availableFrom}
                            onChange={(e) => setAvailableFrom(e.target.value)}
                        />
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-2">
                        <label className="form-label float-end">Available Until</label>
                    </div>
                    <div className="col-4">
                        <input
                            id="wd-available-until"
                            type="date"
                            className="form-control"
                            value={availableUntil}
                            onChange={(e) => setAvailableUntil(e.target.value)}
                        />
                    </div>
                </div>

                <hr />
                <div className="row mt-2">
                    <div className="col-12">
                        <span className="float-end">
                            <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light me-2">
                                Cancel
                            </Link>
                            <button type="button" className="btn btn-danger" onClick={handleSave}>
                                Save
                            </button>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
}
