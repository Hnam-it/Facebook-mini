import React, { useState } from 'react';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Đăng ký với ${email} / ${password}`);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Đăng ký tài khoản</h2>
      <form className="login-form" onSubmit={handleRegister}>
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
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
}