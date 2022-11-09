import Home from "./pages/Home/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import E404 from "./pages/E_404/E404";
import CryptoBox from "./components/CryptoBox/CryptoBox";
import AboutUs from "./pages/AboutUs/AboutUs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<E404 />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
