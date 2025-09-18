import Circuito from "./circuito_generico";
import emilia from "./assets/emilia.avif"; // asegúrate de tener la imagen en assets

export default function EmiliaRomagna() {
  return (
    <Circuito 
      nombre="GP de Emilia-Romaña 2025"
      imagen={emilia}
      referencias={[
        { curva: 2, frenada: "100m", marcha: "3ª", intensidad: "80%" },
        { curva: 7, frenada: "90m", marcha: "4ª", intensidad: "75%" },
        { curva: 17, frenada: "120m", marcha: "2ª", intensidad: "85%" },
      ]}
      setup={[
        "Alerón delantero: Alto",
        "Alerón trasero: Medio",
        "Suspensión: Dura",
        "Frenos: Altos",
      ]}
      consejos="Circuito técnico y estrecho, muy difícil adelantar. Importa mucho la tracción en la salida de Rivazza."
      estrategia="1 parada: iniciar con medios y terminar con duros."
      neumaticos="Gestionar bien en el segundo sector (Acque Minerali y Variante Alta)."
      datos={{
        Vueltas: 63,
        Longitud: "4.909 km",
        Récord: "1:15.484 (Hamilton, 2020)"
      }}
    />
  );
}
