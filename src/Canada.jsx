import Circuito from "./circuito_generico";
import canada from "./assets/canada.png"; // asegúrate de tener la imagen en assets

export default function Canada() {
  return (
    <Circuito 
      nombre="GP de Canadá 2025"
      imagen={canada}
      referencias={[
        { curva: 1, frenada: "80m", marcha: "3ª", intensidad: "75%" },
        { curva: 10, frenada: "100m", marcha: "4ª", intensidad: "80%" },
        { curva: 14, frenada: "90m", marcha: "2ª", intensidad: "85%" },
      ]}
      setup={[
        "Alerón delantero: Medio",
        "Alerón trasero: Medio",
        "Suspensión: Media",
        "Frenos: Altos",
      ]}
      consejos="Circuito rápido con largas rectas; cuidado con los muros de la curva 10 y el muro de Senna."
      estrategia="1 parada: iniciar con blandos y cambiar a medios o duros según desgaste."
      neumaticos="Controlar especialmente los neumáticos traseros en la chicane del sector final."
      datos={{
        Vueltas: 70,
        Longitud: "4.361 km",
        Récord: "1:13.078 (Vettel, 2019)"
      }}
    />
  );
}
