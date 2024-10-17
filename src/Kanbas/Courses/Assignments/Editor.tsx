import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { courseId, assignmentId } = useParams();
    const assignment = db.assignments.find(a => a._id === assignmentId);

    const descriptionText = `The assignment is available online\n\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n\n- Your full name and section\n- Links to each of the lab assignments\n- Link to the Kanbas application\n- Links to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page.`;

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
                        defaultValue={assignment ? assignment.title : "Assignment Not Found"}
                        disabled={!assignment} // Disable if assignment not found
                    />
                </div>

                <div className="row mt-5">
                    <textarea
                        id="wd-description"
                        rows={10}
                        className="form-control w-50"
                        defaultValue={descriptionText}
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
                        />
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-2">
                        <label className="form-label float-end" htmlFor="wd-group">Assignment Group</label>
                    </div>
                    <div className="col-4">
                        <select id="wd-group" className="form-select">
                            <option value="assignments" selected>ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-2">
                        <label className="form-label float-end" htmlFor="wd-display-grade-as">Display Grade as</label>
                    </div>
                    <div className="col-4">
                        <select id="wd-display-grade-as">
                            <option value="percentage" selected>Percentage</option>
                        </select>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-2">
                        <label className="form-label float-end" htmlFor="wd-submission-type">Submission Type</label>
                    </div>
                    <div className="col-4">
                        <select id="wd-submission-type" className="form-select">
                            <option value="online" selected>Online</option>
                        </select>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-2">
                        <label className="form-label float-end">Online Entry Options</label>
                    </div>
                    <div className="col-4">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" id="wd-text-entry" /> Text Entry
                        </label><br />
                        <label className="mt-3 form-check-label">
                            <input className="form-check-input" type="checkbox" id="wd-website-url" /> Website URL
                        </label><br />
                        <label className="mt-3 form-check-label">
                            <input className="form-check-input" type="checkbox" id="wd-media-recordings" /> Media Recordings
                        </label><br />
                        <label className="mt-3 form-check-label">
                            <input className="form-check-input" type="checkbox" id="wd-student-annotation" /> Student Annotation
                        </label><br />
                        <label className="mt-3 mb-3 form-check-label">
                            <input className="form-check-input" type="checkbox" id="wd-file-upload" /> File Upload
                        </label>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-2">
                        <label className="form-label float-end">Assign</label>
                    </div>
                    <div className="col-10">
                        <div className="row border border-1" style={{ width: "45%" }}>
                            <div className="col-12">
                                <label className="form-label mt-3">
                                    <h4>Assign to</h4>
                                    <input className="form-control" id="wd-assign-to" value="Everyone" />
                                </label>
                            </div>

                            <div className="col-12">
                                <label className="form-label" htmlFor="wd-due-date">Due</label>
                                <input id="wd-due-date" type="date" className="form-control" />
                            </div>

                            <div className="col-6 pe-0 mt-3">
                                <label className="form-label" htmlFor="wd-available-from">Available from</label>
                                <input id="wd-available-from" type="date" className="form-control" />
                            </div>

                            <div className="col-6 ps-1 mt-3">
                                <label className="form-label" htmlFor="wd-available-until">Until</label>
                                <input id="wd-available-until" type="date" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row mt-2">
                    <div className="col-12">
                        <span className="float-end">
                            <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light me-2">
                                Cancel
                            </Link>
                            <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger">
                                Save
                            </Link>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
}
