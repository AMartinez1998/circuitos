import Circuito from "./circuito_generico";
import abu from "./assets/abu.avif"; 

export default function AbuDhabi() {
  return (
    <Circuito 
      nombre="GP de Abu Dhabi 2025"
      imagen={abu}
      referencias={[
        { curva: 5, frenada: "120m", marcha: "2ª", intensidad: "92%" },
        { curva: 6, frenada: "100m", marcha: "3ª", intensidad: "88%" },
        { curva: 9, frenada: "130m", marcha: "3ª", intensidad: "95%" },
        { curva: 14, frenada: "110m", marcha: "2ª", intensidad: "90%" },
      ]}
      setup={[
        "Alerón delantero: Medio",
        "Alerón trasero: Medio-Alto",
        "Suspensión: Media",
        "Frenos: Altos",
      ]}
      consejos="Circuito de Yas Marina, mezcla de rectas largas con zonas técnicas; cuidado en la frenada fuerte de la recta trasera."
      estrategia="1 parada: iniciar con medios y acabar con duros, aunque blandos al final pueden ser opción."
      neumaticos="Gestión clave en el neumático trasero por tracción en curvas lentas."
      datos={{
        Vueltas: 58,
        Longitud: "5.281 km",
        Récord: "1:26.103 (Verstappen, 2021)"
      }}
    />
  );
}
