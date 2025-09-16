import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Layout() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Aplicar clase al body
  useEffect(() => {
    document.body.className = theme; // light o dark
  }, [theme]);

  return (
    <div className="layout-container">
      <h2>Circuitos F1 2025</h2>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
      </button>

      <br /><br />

      <select onChange={(e) => navigate(e.target.value)}>
        <option value="/Austria">Austria</option>
        <option value="/Mexico">México</option>
        <option value="/Belgica">Bélgica</option>
      </select>

      <hr />

      <Outlet />
    </div>
  );
}
