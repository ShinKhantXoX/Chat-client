// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatApp from './pages/Chat';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define the different routes for your app */}
          <Route path="/" element={<ChatApp />} />  {/* Home page or login page */}
          <Route path="/register" element={<Register />} />  {/* Registration page */}
          <Route path="/login" element={<Login />} />  {/* Login page */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
