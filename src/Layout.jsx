import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./Footer"; // Asegúrate de importar tu componente Footer

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
        <option value="/Arabia_Saudí">Arabia Saudí</option>
        <option value="/Miami">Miami</option>
        <option value="/Emilia-Romagna">Emilia-Romagna</option>
        <option value="/Mónaco">Mónaco</option>
        <option value="/Canadá">Canadá</option>
        <option value="/España">España</option>
        <option value="/Gran_Bretaña">Gran Bretaña</option>
        <option value="/Hungría">Hungría</option>
        <option value="/Países_Bajos">Países Bajos</option>
        <option value="/Monza">Monza</option>
        <option value="/Azerbaiyán">Azerbaiyán</option>
        <option value="/Singapur">Singapur</option>
        <option value="/Austin">Estados Unidos (Austin)</option>
        <option value="/Brasil">Brasil</option>
        <option value="/Las_Vegas">Estados Unidos (Las Vegas)</option>
        <option value="/Catar">Catar</option>
        <option value="/Abu_Dhabi">Abu Dhabi</option>
      </select>

      <hr />

      {/* Aquí se renderizan los circuitos */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
  );
}

