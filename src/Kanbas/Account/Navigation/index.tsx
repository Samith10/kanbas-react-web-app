import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const location = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const links = [
    { id: 'wd-account-signin-link', to: '/Kanbas/Account/Signin', label: 'Signin' },
    { id: 'wd-account-signup-link', to: '/Kanbas/Account/Signup', label: 'Signup' },
    { id: 'wd-account-profile-link', to: '/Kanbas/Account/Profile', label: 'Profile' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map(link => {
        return (
          <Link
            key={link.id}
            id={link.id}
            to={link.to}
            className={`list-group-item border-0 ${isActive(link.to) ? 'text-black' : 'text-danger'}`}
            style={isActive(link.to) ? { position: 'relative' } : {}}
          >
            {isActive(link.to) && <div className="vertical-line" />}
            {link.label}
          </Link>
        );
      })}
      
      {currentUser?.role === "ADMIN" && (
        <Link
          to="/Kanbas/Account/Users"
          className={`list-group-item ${isActive('/Kanbas/Account/Users') ? 'text-black' : 'text-danger'}`}
        >
          Users
        </Link>
      )}
    </div>
  );
}
