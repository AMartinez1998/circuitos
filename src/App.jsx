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
        </Route>
      </Routes>
    </Router>
  );
}
