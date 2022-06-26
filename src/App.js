import React from "react";
import { Home, Portfolio, About, Skills, Contact } from "./pages";
import { Navbar, Footer } from "./components";
import { useState, useEffect } from "react";
import { Rings } from "react-loader-spinner";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);
  return !isLoading ? (
    <>
      <Navbar />
      <Home />
      <Portfolio />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  ) : (
    <div className="loader">
      <Rings height="100" width="100" color="#FE6F27" ariaLabel="loading" />
    </div>
  );
};

export default App;
