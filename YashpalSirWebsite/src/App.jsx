import "./App.css";
import Navbar from "./components/Navbar";
import Footbar from "./components/Footbar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Notes from "./components/Notes";
import About from "./components/About";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

import Emn from "./components/Emn";
import Mpl from "./components/Mpl";
import EmnUnit1 from "./components/EmnUnit1";  // Import the new component
import EmnUnit2 from "./components/EmnUnit2";  // Import the new component
import EmnUnit3 from "./components/EmnUnit3";  // Import the new component
import EmnUnit4 from "./components/EmnUnit4";  // Import the new component
import MplUnit1 from "./components/MplUnit1";  // Import the new component
import MplUnit2 from "./components/MplUnit2";  // Import the new component
import MplUnit3 from "./components/MplUnit3";  // Import the new component
import MplUnit4 from "./components/MplUnit4";  // Import the new component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/emn" element={<Emn />} />
            <Route path="/mpl" element={<Mpl />} />
            <Route path="/emn/unit-1" element={<EmnUnit1 />} />  
            <Route path="/emn/unit-2" element={<EmnUnit2 />} />  
            <Route path="/emn/unit-3" element={<EmnUnit3 />} />  
            <Route path="/emn/unit-4" element={<EmnUnit4 />} />  
            <Route path="/mpl/unit-1" element={<MplUnit1 />} />  
            <Route path="/mpl/unit-2" element={<MplUnit2 />} />  
            <Route path="/mpl/unit-3" element={<MplUnit3 />} />  
            <Route path="/mpl/unit-4" element={<MplUnit4 />} />  
          </Routes>
        </main>
        <Footbar />
      </div>
    </Router>
  );
}

export default App;
