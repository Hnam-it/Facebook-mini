// src/components/LoginForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // Giả lập đăng nhập thành công
    if (email === "admin@example.com" && password === "123456") {
      alert("Đăng nhập thành công!");
      navigate("/home");
    } else {
      alert("Sai email hoặc mật khẩu!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "50px auto" }}>
      <h2>Đăng nhập</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />
      <button type="submit" style={{ padding: 10, width: "100%" }}>
        Đăng nhập
      </button>
    </form>
  );
}
