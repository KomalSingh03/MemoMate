import React from 'react';
import { BrowserRouter as Router , Routes , Route , Navigate} from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar'; // Your Navbar component
import Home from './pages/Home/Home'
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/dashboard';

const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/home" element={<Home />} />
      <Route path ="/login" exact element={<Login />} />
      <Route path ="/signup" exact element={<SignUp />} />
      <Route path="/dashboard" exact element={<Dashboard />} />
    </Routes>
  </Router>  
  
)

const App = () => {
  return (
    <div>
      {routes}
    </div>
  )
}

export default App