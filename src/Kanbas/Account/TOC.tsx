import { Link } from "react-router-dom"; 
export default function TOC() {
    return (
      <ul>
        <li><Link to="/Signin">Sign in</Link></li>
        <li><Link to="/Signup">Sign up</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
      </ul>
    );
  }