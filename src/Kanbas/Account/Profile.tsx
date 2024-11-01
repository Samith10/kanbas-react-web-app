import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchProfile = useCallback(() => {
    if (!currentUser) return navigate("/Kanbas/Account/Signin");
    setProfile(currentUser);
  }, [currentUser, navigate]);

  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]); // Using fetchProfile as a dependency

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <input
            id="wd-username"
            className="form-control mb-2"
            defaultValue={profile.username}
            placeholder="Username"
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          />
          <input
            id="wd-password"
            className="form-control mb-2"
            defaultValue={profile.password}
            placeholder="Password"
            type="password"
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          />
          <input
            id="wd-firstname"
            className="form-control mb-2"
            defaultValue={profile.firstName}
            placeholder="First Name"
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          />
          <input
            id="wd-lastname"
            className="form-control mb-2"
            defaultValue={profile.lastName}
            placeholder="Last Name"
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          />
          <input
            id="wd-dob"
            className="form-control mb-2"
            defaultValue={profile.dob}
            type="date"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <input
            id="wd-email"
            className="form-control mb-2"
            defaultValue={profile.email}
            type="email"
            placeholder="Email"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <select
            id="wd-role"
            className="form-select mb-2"
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            defaultValue={profile.role}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={signout} className="btn btn-danger w-100 mb-2" id="wd-signout-btn">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
