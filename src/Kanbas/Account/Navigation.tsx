import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const location = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const links = currentUser
    ? [
        { id: 'wd-account-profile-link', to: '/Kanbas/Account/Profile', label: 'Profile' },
      ]
    : [
        { id: 'wd-account-signin-link', to: '/Kanbas/Account/Signin', label: 'Signin' },
        { id: 'wd-account-signup-link', to: '/Kanbas/Account/Signup', label: 'Signup' },
      ];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map(link => {
        const isActive = location.pathname === link.to;
        return (
          <Link
            key={link.id}
            id={link.id}
            to={link.to}
            className={`list-group-item border-0 ${isActive ? 'text-black' : 'text-danger'}`}
            style={isActive ? { position: 'relative' } : {}}
          >
            {isActive && <div className="vertical-line" />}
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
