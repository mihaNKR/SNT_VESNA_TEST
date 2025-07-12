import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Главная</Link>
      <Link to="/news" style={styles.link}>Новости</Link>
      <Link to="/ads" style={styles.link}>Объявления</Link>
      <Link to="/chat" style={styles.link}>Чат</Link>
      <Link to="/profile" style={styles.link}>Профиль</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    borderBottom: "1px solid #ccc"
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold"
  }
};
