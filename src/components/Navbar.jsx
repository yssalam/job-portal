import { Link, useNavigate, useLocation } from "react-router-dom";
import { isAuthenticated, logout } from "../api/auth";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(isAuthenticated());
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLogin(isAuthenticated());
  }, [location]);

  const handleLogout = () => {
    logout();
    setIsLogin(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2>Job Portal</h2>

      <div>
        <Link to="/">Home</Link>

        {isLogin ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
