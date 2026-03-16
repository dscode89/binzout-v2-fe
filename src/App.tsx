import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { NavBar } from "./components/Navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import { Redirect } from "./components/Navbar/Redirect";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Redirect />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
