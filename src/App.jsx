import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router
import Navbar from "./components/Navbar";
import Home from "./components/Home"; // Home component (hero section)
import Footer from "./components/Footer";
import AboutUs from "./components/About";
import KeyFeatures from "./components/KeyFeatures"; // Import KeyBenefits
import WhyChooseUs from "./components/WhyChoose"; // Import WhyChooseUs
import Contact from "./components/Contact"; // Import Contact component
import Signup from "./components/Signup";
import DemoRequest from "./components/DemoRequest";
import KeyBenefits from "./components/KeyBenefits";
import AdditionalBenefits from "./components/AdditionalFeatures";
import UseCases from "./components/UseCases";
import Universities from "./components/Universities";
import Colleges from "./components/Colleges";
import Institutions from "./components/Institutions"; 

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
                <AdditionalBenefits/>
                <KeyFeatures />
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
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/institutions" element={<Institutions />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;