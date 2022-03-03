import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { Dashboard } from './Pages/Dashboard';
import { Login } from './Pages/Login';

function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn)
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn) {
      if (pathname === "/login") navigate("/")
      else navigate(pathname)
    } else {
      navigate("/login")
    }
  }, [isUserLoggedIn, pathname])

  return (
    <div className="container">
      <Routes>
        {isUserLoggedIn ?
          (<Route path="/*" element={<Dashboard />} />)
          :
          <Route path='login' element={<Login />} />
        }
      </Routes>
    </div >
  );
}

export default App;
