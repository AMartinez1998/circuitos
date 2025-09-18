import Circuito from "./circuito_generico";
import inglaterra from "./assets/inglaterra.avif"; 

export default function GranBretana() {
  return (
    <Circuito 
      nombre="GP de Gran Bretaña 2025"
      imagen={inglaterra}
      referencias={[
        { curva: 1, frenada: "90m", marcha: "3ª", intensidad: "80%" },
        { curva: 6, frenada: "100m", marcha: "4ª", intensidad: "85%" },
        { curva: 12, frenada: "110m", marcha: "2ª", intensidad: "90%" },
      ]}
      setup={[
        "Alerón delantero: Medio",
        "Alerón trasero: Medio",
        "Suspensión: Dura",
        "Frenos: Altos",
      ]}
      consejos="Circuito rápido con varias curvas históricas; cuidado en Copse y Maggotts-Becketts donde se exige mucha precisión."
      estrategia="1 parada: iniciar con medios y terminar con duros."
      neumaticos="Gestionar los neumáticos delanteros y traseros en las curvas rápidas del primer y segundo sector."
      datos={{
        Vueltas: 52,
        Longitud: "5.891 km",
        Récord: "1:27.097 (Hamilton, 2020)"
      }}
    />
  );
}
