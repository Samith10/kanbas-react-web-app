import { useLocation, Link } from "react-router-dom";

export default function TOC() {
  const { pathname } = useLocation();
  
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link to="/Labs" className="nav-link" id="wd-a">
          Labs
        </Link>
      </li>
      <li className="nav-item">
        <Link 
          to="/Labs/Lab1" 
          className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`} 
          id="wd-a1"
        >
          Lab 1
        </Link>
      </li>
      <li className="nav-item">
        <Link 
          to="/Labs/Lab2" 
          className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`} 
          id="wd-a2"
        >
          Lab 2
        </Link>
      </li>
      <li className="nav-item">
        <Link 
          to="/Labs/Lab3" 
          className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`} 
          id="wd-a3"
        >
          Lab 3
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Kanbas" className="nav-link" id="wd-k">
          Kanbas
        </Link>
      </li>
      <li className="nav-item">
        <a 
          href="https://github.com/Samith10/kanbas-react-web-app" 
          className="nav-link" 
          id="wd-github" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
      </li>
    </ul>
  );
}
