import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {" "}
      <Router>
        <div className="min-h-screen font-poppins">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
