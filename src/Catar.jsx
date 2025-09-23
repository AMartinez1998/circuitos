import Circuito from "./circuito_generico";
import catar from "./assets/catar.avif"; 

export default function Qatar() {
  return (
    <Circuito 
      nombre="GP de Qatar 2025"
      imagen={catar}
      referencias={[
        { curva: 1, frenada: "120m", marcha: "3ª", intensidad: "90%" },
        { curva: 6, frenada: "80m", marcha: "4ª", intensidad: "85%" },
        { curva: 10, frenada: "100m", marcha: "3ª", intensidad: "95%" },
        { curva: 16, frenada: "110m", marcha: "4ª", intensidad: "88%" },
      ]}
      setup={[
        "Alerón delantero: Medio",
        "Alerón trasero: Bajo",
        "Suspensión: Media-Dura",
        "Frenos: Medios",
      ]}
      consejos="Circuito de Lusail muy fluido, con curvas rápidas que exigen buena carga aerodinámica y gestión del desgaste en las gomas delanteras."
      estrategia="2 paradas: iniciar con blandos, pasar a medios y acabar en blandos si la degradación lo permite."
      neumaticos="Gran desgaste en el tren delantero por las curvas rápidas, atención al sobrecalentamiento."
      datos={{
        Vueltas: 57,
        Longitud: "5.419 km",
        Récord: "1:24.319 (Verstappen, 2021)"
      }}
    />
  );
}
