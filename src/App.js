import React from "react";
import { Home, Portfolio, About, Skills, Contact } from "./pages";
import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Portfolio />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
