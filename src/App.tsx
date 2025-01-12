// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatApp from './pages/Chat';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define the different routes for your app */}
          <Route path="/" element={<ChatApp />} />  {/* Home page or login page */}
          <Route path="/register" element={<Register />} />  {/* Registration page */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
