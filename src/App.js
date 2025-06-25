import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm'; 
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<h2>Trang chủ</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
