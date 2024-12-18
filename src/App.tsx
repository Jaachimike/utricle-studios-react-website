import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      {" "}
      <Router>
        <div className="min-h-screen font-poppins">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/services" element={<Services />} />
             */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
