import React from "react";
import { Home, Portfolio, About, Skills, Contact } from "./pages";
import { Navbar, Footer } from "./components";
import { useState, useEffect } from "react";
import { Rings } from "react-loader-spinner";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const pageLoad = () => setIsLoading(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      pageLoad();
    } else {
      window.addEventListener("load", pageLoad);
      return () => window.removeEventListener("load", pageLoad);
    }
  }, []);

  return isLoading ? (
    <div className="loader">
      <Rings height="100" width="100" color="#FE6F27" ariaLabel="loading" />
    </div>
  ) : (
    <>
      <Navbar />
      <Home />
      <Portfolio />
      <About />
      <Skills />
      <Contact />
      <Footer />
      {document.readyState && console.log("ready")}
    </>
  );
};

export default App;
