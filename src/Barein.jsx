import Circuito from "./circuito_generico";
import barein from "./assets/barein.png"; 

export default function Barein() {
  return (
    <Circuito 
      nombre="GP de Baréin 2025"
      imagen={barein}
      referencias={[
        { curva: 1, frenada: "90m", marcha: "2ª", intensidad: "85%" }, 
        { curva: 4, frenada: "100m", marcha: "3ª", intensidad: "80%" }, 
        { curva: 10, frenada: "120m", marcha: "3ª", intensidad: "75%" }, 
        { curva: 14, frenada: "80m", marcha: "2ª", intensidad: "90%" }, 
      ]}
      setup={[
        "Alerón delantero: Medio",
        "Alerón trasero: Medio",
        "Suspensión: Media",
        "Frenos: Altos",
        "Presión neumáticos: 21 psi delanteros / 19 psi traseros"
      ]}
      consejos="Circuito de medio a alto agarre, con varias curvas de media velocidad y rectas largas. Aprovecha la recta principal para adelantar y cuida los neumáticos en curvas lentas."
      estrategia="2 paradas: iniciar con blandos, luego medios y terminar con duros. Ajusta según desgaste y temperatura de pista."
      neumaticos="El calor del desierto degrada mucho los neumáticos traseros; gestiona bien los stint iniciales para evitar sobrecalentamiento."
      datos={{
        Vueltas: 57,
        Longitud: "5.412 km",
        Curvas: 15,
        Récord: "1:28.769 (Pedro de la Rosa, 2005)",
        Altitud: "35 m sobre el nivel del mar"
      }}
    />
  );
}
