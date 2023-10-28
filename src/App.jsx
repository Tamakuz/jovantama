import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./pages/Loader";
import Dashboard from "./pages/Dashboard";
import Skills from "./pages/Skills";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Galery from "./pages/Galery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/galerry" element={<Galery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
