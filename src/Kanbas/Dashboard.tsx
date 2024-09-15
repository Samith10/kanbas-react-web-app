import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
            <img src="/images/reactjs.webp" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
                CS1234 React JS
                </Link>
                <p className="wd-dashboard-course-title">
                Full Stack software developer
                </p>
                <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course"> 
            <img src="/images/reactjs.webp" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5010/Home">
                CS5010 Programming Design Patterns
                </Link>
                <p className="wd-dashboard-course-title">
                Software development engineer
                </p>
                <Link to="/Kanbas/Courses/5010/Home"> Go </Link>
            </div>
        </div>

        <div className="wd-dashboard-course">
            <img src="/images/reactjs.webp" width={200} />
            <div>
                <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/2001/Home">
                    CS2001 JavaScript Fundamentals
                </Link>
                <p className="wd-dashboard-course-title">
                    Frontend Developer
                </p>
                <Link to="/Kanbas/Courses/2001/Home"> Go </Link>
            </div>
        </div>

        <div className="wd-dashboard-course">
            <img src="/images/reactjs.webp" width={200} />
            <div>
                <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/3002/Home">
                    CS3002 Advanced Python
                </Link>
                <p className="wd-dashboard-course-title">
                    Data Scientist
                </p>
                <Link to="/Kanbas/Courses/3002/Home"> Go </Link>
            </div>
        </div>

        <div className="wd-dashboard-course">
            <img src="/images/reactjs.webp" width={200} />
            <div>
                <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/4003/Home">
                    CS4003 Java Programming
                </Link>
                <p className="wd-dashboard-course-title">
                    Backend Developer
                </p>
                <Link to="/Kanbas/Courses/4003/Home"> Go </Link>
            </div>
        </div>

        <div className="wd-dashboard-course">
            <img src="/images/reactjs.webp" width={200} />
            <div>
                <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5004/Home">
                    CS5004 C# for Beginners
                </Link>
                <p className="wd-dashboard-course-title">
                    .NET Developer
                </p>
                <Link to="/Kanbas/Courses/5004/Home"> Go </Link>
            </div>
        </div>

        <div className="wd-dashboard-course">
            <img src="/images/reactjs.webp" width={200} />
            <div>
                <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/6005/Home">
                    CS6005 HTML & CSS Basics
                </Link>
                <p className="wd-dashboard-course-title">
                    Web Designer
                </p>
                <Link to="/Kanbas/Courses/6005/Home"> Go </Link>
            </div>
        </div>

        <div className="wd-dashboard-course">
            <img src="/images/reactjs.webp" width={200} />
            <div>
                <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/7006/Home">
                    CS7006 Introduction to AI
                </Link>
                <p className="wd-dashboard-course-title">
                    AI Researcher
                </p>
                <Link to="/Kanbas/Courses/7006/Home"> Go </Link>
            </div>
        </div>

        <div className="wd-dashboard-course">
            <img src="/images/reactjs.webp" width={200} />
            <div>
                <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/8007/Home">
                    CS8007 Database Management
                </Link>
                <p className="wd-dashboard-course-title">
                    Database Administrator
                </p>
                <Link to="/Kanbas/Courses/8007/Home"> Go </Link>
            </div>
        </div>

        <div className="wd-dashboard-course">
            <img src="/images/reactjs.webp" width={200} />
            <div>
                <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/9008/Home">
                    CS9008 Cloud Computing
                </Link>
                <p className="wd-dashboard-course-title">
                    Cloud Solutions Architect
                </p>
                <Link to="/Kanbas/Courses/9008/Home"> Go </Link>
            </div>
        </div>

        <div className="wd-dashboard-course">
            <img src="/images/reactjs.webp" width={200} />
            <div>
                <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/10009/Home">
                    CS10009 Cybersecurity Fundamentals
                </Link>
                <p className="wd-dashboard-course-title">
                    Security Analyst
                </p>
                <Link to="/Kanbas/Courses/10009/Home"> Go </Link>
            </div>
        </div>

        <div className="wd-dashboard-course">
            <img src="/images/reactjs.webp" width={200} />
            <div>
                <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/11010/Home">
                    CS11010 DevOps Practices
                </Link>
                <p className="wd-dashboard-course-title">
                    DevOps Engineer
                </p>
                <Link to="/Kanbas/Courses/11010/Home"> Go </Link>
            </div>
        </div>

        <div className="wd-dashboard-course">
            <img src="/images/reactjs.webp" width={200} />
            <div>
                <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/12011/Home">
                    CS12011 Machine Learning
                </Link>
                <p className="wd-dashboard-course-title">
                    Machine Learning Engineer
                </p>
                <Link to="/Kanbas/Courses/12011/Home"> Go </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
