import Circuito from "./circuito_generico";
import holanda from "./assets/holanda.png"; // asegúrate de tener la imagen en assets

export default function PaisesBajos() {
  return (
    <Circuito 
      nombre="GP de Países Bajos 2025"
      imagen={holanda}
      referencias={[
        { curva: 3, frenada: "100m", marcha: "3ª", intensidad: "80%" },
        { curva: 7, frenada: "90m", marcha: "4ª", intensidad: "85%" },
        { curva: 14, frenada: "80m", marcha: "2ª", intensidad: "90%" },
      ]}
      setup={[
        "Alerón delantero: Medio",
        "Alerón trasero: Medio",
        "Suspensión: Media",
        "Frenos: Altos",
      ]}
      consejos="Circuito con curvas rápidas y ondulaciones; cuidado con Tarzan y las curvas 11-14 donde se exige mucha precisión."
      estrategia="1 parada: iniciar con blandos y terminar con medios."
      neumaticos="Controlar neumáticos traseros en curvas rápidas y las zonas de subida-bajada para no perder tracción."
      datos={{
        Vueltas: 72,
        Longitud: "4.259 km",
        Récord: "1:11.097 (Verstappen, 2021)"
      }}
    />
  );
}
