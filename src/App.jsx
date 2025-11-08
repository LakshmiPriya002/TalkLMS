import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/About";
import KeyFeatures from "./components/KeyFeatures";
import WhyChooseUs from "./components/WhyChoose";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import DemoRequest from "./components/DemoRequest";
import KeyBenefits from "./components/KeyBenefits";
import AdditionalBenefits from "./components/AdditionalFeatures";
import UseCases from "./components/UseCases"; // Correct import (remove angle brackets)
import Universities from "./components/Universities";
import Colleges from "./components/Colleges";
import Institutions from "./components/Institutions";
import Login from "./components/Login";

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
                <AdditionalBenefits />
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
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/features" element={<Features />} /> */}

          {/* Benefits / Use Cases routes */}
          <Route path="/benefits" element={<UseCases />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/institutions" element={<Institutions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
