import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./Pie"; 

export default function Layout() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  
  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  return (
    <div className="layout-container">
      <h2>Circuitos F1 2025</h2>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
      </button>

      <br /><br />

      <select onChange={(e) => navigate(e.target.value)} defaultValue="/Seleccionar">
        <option value="/Seleccionar" disabled>
          Seleccionar
        </option>
        <option value="/Austria">Austria</option>
        <option value="/China">China</option>
        <option value="/Mexico">Mexico</option>
        <option value="/Belgica">Bélgica</option>
        <option value="/Japon">Japón</option>
        <option value="/Barein">Baréin</option>
        <option value="/Arabia">Arabia Saudí</option>
        <option value="/Miami">Miami</option>
        <option value="/Emilia">Emilia-Romagna</option>
        <option value="/Monaco">Mónaco</option>
        <option value="/Canada">Canadá</option>
        <option value="/Spain">España</option>
        <option value="/Inglaterra">Gran Bretaña</option>
        <option value="/Hungria">Hungría</option>
        <option value="/Holanda">Países Bajos</option>
        <option value="/Monza">Monza</option>
        <option value="/Baku">Azerbaiyán</option>
        <option value="/Singapour">Singapur</option>
        <option value="/Texas">Estados Unidos (Austin)</option>
        <option value="/Brasil">Brasil</option>
        <option value="/Las_Vegas">Estados Unidos (Las Vegas)</option>
        <option value="/Catar">Catar</option>
        <option value="/Abu_Dhabi">Abu Dhabi</option>
      </select>

      <hr />

      
      <Outlet />

      
      <Footer />
    </div>
  );
}

