import React, { useState } from 'react';
import './Login.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login with ${email} / ${password}`);
  };

  const handleRegister = () => {
    // Chuyển hướng sang trang đăng ký, ví dụ: /register
    window.location.href = '/register';
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Facebook</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email hoặc SĐT"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Đăng nhập</button>
        <button
          type="button"
          className="register-btn"
          onClick={handleRegister}
        >
          Chưa có tài khoản? Đăng ký
        </button>
      </form>
    </div>
  );
}