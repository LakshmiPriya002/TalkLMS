import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router
import Navbar from "./components/Navbar";
import Home from "./components/Home"; // Home component (hero section)
import Footer from "./components/Footer";
import AboutUs from "./components/About";
import KeyBenefits from "./components/KeyBenefits"; // Import KeyBenefits
import WhyChooseUs from "./components/WhyChoose"; // Import WhyChooseUs
import Contact from "./components/Contact"; // Import Contact component
import Signup from "./components/Signup";
import DemoRequest from "./components/DemoRequest";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          {/* Home page route */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <KeyBenefits />
                <WhyChooseUs />
                <Footer />
              </>
            }
          />
          {/* About page route */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/demo-request" element={<DemoRequest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;