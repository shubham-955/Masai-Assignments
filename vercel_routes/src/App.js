import { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import { AuthContext } from "./contexts/AuthContext";
import { Dashboard } from "./components/Dashboard/Dashboard"
import { Login } from "./components/Login";

function App() {
  const { isLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard")
    }
    else {
      navigate("/login")
    }
  }, [isLoggedIn])

  return (
    <div className="container">
      <Routes>
        {isLoggedIn ?
          (<Route path="dashboard/*" element={<Dashboard />} />)
          :
          (<Route path="login" element={<Login />} />)
        }
      </Routes>
    </div>
  );
}

export default App;
