import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologiesSection from "./components/TechnologiesSection";
import Footer from "./components/Footer";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStack, setSelectedStack] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading technologies:", err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warn(`${tech.name} is already in your stack!`, {
        position: "bottom-right",
      });
      return;
    }
    setSelectedStack([...selectedStack, tech]);
    toast.success(`${tech.name} added to stack!`, { position: "bottom-right" });
  };

  const handleRemoveItem = (id, name) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
    toast.info(`${name} removed from stack.`, { position: "bottom-right" });
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error("Cleared entire stack!", { position: "bottom-right" });
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <ToastContainer />
      <TechnologiesSection
        technologies={technologies}
        loading={loading}
        selectedStack={selectedStack}
        onAddStack={handleAddToStack}
        onRemoveItem={handleRemoveItem}
        onRemoveAll={handleRemoveAll}
      />
      <Footer />
    </div>
  );
}

export default App;
