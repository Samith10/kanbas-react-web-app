import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.webp" width="100%" height={160} alt="React JS" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1234 React JS</h5>
                  <p className="wd-dashboard-course-title card-text">Full Stack Software Developer</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5010/Home">
                <img src="/images/reactjs.webp" width="100%" height={160} alt="Programming Design Patterns" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS5010 Programming Design Patterns</h5>
                  <p className="wd-dashboard-course-title card-text">Software Development Engineer</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/2001/Home">
                <img src="/images/reactjs.webp" width="100%" height={160} alt="JavaScript Fundamentals" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS2001 JavaScript Fundamentals</h5>
                  <p className="wd-dashboard-course-title card-text">Frontend Developer</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/3002/Home">
                <img src="/images/reactjs.webp" width="100%" height={160} alt="Advanced Python" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS3002 Advanced Python</h5>
                  <p className="wd-dashboard-course-title card-text">Data Scientist</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/4003/Home">
                <img src="/images/reactjs.webp" width="100%" height={160} alt="Java Programming" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS4003 Java Programming</h5>
                  <p className="wd-dashboard-course-title card-text">Backend Developer</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5004/Home">
                <img src="/images/reactjs.webp" width="100%" height={160} alt="C# for Beginners" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS5004 C# for Beginners</h5>
                  <p className="wd-dashboard-course-title card-text">.NET Developer</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/6005/Home">
                <img src="/images/reactjs.webp" width="100%" height={160} alt="HTML & CSS Basics" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS6005 HTML & CSS Basics</h5>
                  <p className="wd-dashboard-course-title card-text">Web Designer</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/7006/Home">
                <img src="/images/reactjs.webp" width="100%" height={160} alt="Introduction to AI" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS7006 Introduction to AI</h5>
                  <p className="wd-dashboard-course-title card-text">AI Researcher</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/8007/Home">
                <img src="/images/reactjs.webp" width="100%" height={160} alt="Database Management" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS8007 Database Management</h5>
                  <p className="wd-dashboard-course-title card-text">Database Administrator</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/9008/Home">
                <img src="/images/reactjs.webp" width="100%" height={160} alt="Cloud Computing" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS9008 Cloud Computing</h5>
                  <p className="wd-dashboard-course-title card-text">Cloud Solutions Architect</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/10009/Home">
                <img src="/images/reactjs.webp" width="100%" height={160} alt="Cybersecurity Fundamentals" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS10009 Cybersecurity Fundamentals</h5>
                  <p className="wd-dashboard-course-title card-text">Security Analyst</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/11010/Home">
                <img src="/images/reactjs.webp" width="100%" height={160} alt="DevOps Practices" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS11010 DevOps Practices</h5>
                  <p className="wd-dashboard-course-title card-text">DevOps Engineer</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/12011/Home">
                <img src="/images/reactjs.webp" width="100%" height={160} alt="Machine Learning" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS12011 Machine Learning</h5>
                  <p className="wd-dashboard-course-title card-text">Machine Learning Engineer</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
