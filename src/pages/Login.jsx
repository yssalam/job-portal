import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, login, logout } from "../api/auth";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const isLogin = isAuthenticated();

  const handleLogin = () => {
    login();
    navigate("/admin");
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(form.username, form.password);

    if (success) {
      navigate("/admin");
    } else {
      setError("Username / password salah");
    }
  };

  return (
    <div className="login-page">
      <form className="login-container" onSubmit={handleSubmit}>
        <h1>Admin Login</h1>

        {error && <p className="Login-error">{error}</p>}

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="admin"
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn save">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
