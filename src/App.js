import "./styles/main.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Page from "./pages/Page";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/page/:id" element={<Page />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
