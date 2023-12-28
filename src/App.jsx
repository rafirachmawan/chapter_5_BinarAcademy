import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailCar from "./pages/DetailCar";
import LandingPages from "./pages/LandingPages";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/result" element={<Result />} />
        <Route path="/detail/id" element={<DetailCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
