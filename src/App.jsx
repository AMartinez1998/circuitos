import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Austria from "./Austria";
import Mexico from "./Mexico";
import Belgica from "./Bélgica";
import China from "./China";
import Japon from "./Japon";
import Barein from "./Barein";
import Arabia from "./Arabia";
import Miami from "./Miami";
import Emilia from "./Emilia";
import Monaco from "./Monaco";
import Canada from "./Canada";
import Spain from "./Spain";
import Inglaterra from "./Inglaterra";
import Hungria from "./Hungria";
import Holanda from "./Holanda";
import Monza from "./Monza";
import Baku from "./Baku";
import Singapour from "./Singapour";
import Texas from "./Texas";
import Brasil from "./Brasil";
import Vegas from "./Vegas";
import Catar from "./Catar";
import Abu from "./Abu";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Austria" element={<Austria />} />
          <Route path="China" element={<China />} />
          <Route path="Mexico" element={<Mexico />} />
          <Route path="Belgica" element={<Belgica />} />
          <Route path="Japon" element={<Japon />} />
          <Route path="Barein" element={<Barein />} />
          <Route path="Arabia" element={<Arabia />} />
          <Route path="Miami" element={<Miami />} />
          <Route path="Emilia" element={<Emilia />} />
          <Route path="Monaco" element={<Monaco />} />
          <Route path="Canada" element={<Canada/>} />
          <Route path="Spain" element={<Spain/>} />
          <Route path="Inglaterra" element={<Inglaterra/>} />
          <Route path="Hungria" element={<Hungria/>} />
          <Route path="Holanda" element={<Holanda/>} />.
          <Route path="Monza" element={<Monza/>} />
          <Route path="Baku" element={<Baku/>} />
          <Route path="Singapour" element={<Singapour/>} />
          <Route path="Texas" element={<Texas/>} />
          <Route path="Brasil" element={<Brasil/>} />
          <Route path="Vegas" element={<Vegas/>} />
          <Route path="Catar" element={<Catar/>} />
          <Route path="Abu" element={<Abu/>} />
        </Route>
      </Routes>
    </Router>
  );
}
