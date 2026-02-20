import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroShowcase from "@/components/HeroShowcase";
import About from "@/components/About";
import Collections from "@/components/Collections";
import Products from "@/components/Products";
import Commission from "@/components/Commission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Collections />
        <Products />
        <Commission />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

// Demo page to showcase hero options
const HeroDemo = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroShowcase />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero-options" element={<HeroDemo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
