import LandingPages from "./pages/LandingPages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailCar from "./pages/DetailCar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/detail/:id" element={<DetailCar />} />
        // <Route path="" element={<LandingPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
