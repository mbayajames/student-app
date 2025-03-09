import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import Login from './components/Login';
import Logout from './components/Logout';
import StudentList from './components/StudentList';
import './App.css';



const App = () => {

    const [students, setStudents] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const hanleAddStudent = (name) => {
        setStudents([...students, name]);
    }

    const handleLogin = (username, password) => {
        // Simple authentication logic
        if (username === 'admin' && password === 'password') {
          setIsLoggedIn(true);
        } else {
          alert('Invalid credentials');
        }
      };
    
      const handleLogout = () => {
        setIsLoggedIn(false);
      };
  return (
    <Router>
      <div>
        <h1>Student App</h1>
        {isLoggedIn ? (
          <>
            <Logout onLogout={handleLogout} />
            <AddStudent onAddStudent={handleAddStudent} />
            <StudentList students={students} />
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </div>
    </Router>

  );
};

export default App;
