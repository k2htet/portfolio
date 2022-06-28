import React, { useState, useEffect } from "react";
import { Home, Portfolio, About, Skills, Contact } from "./pages";
import { Navbar } from "./components";
import { Rings } from "react-loader-spinner";
import { IoIosArrowUp } from "react-icons/io";
import { motion, useViewportScroll } from "framer-motion";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { scrollY } = useViewportScroll();

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

      <motion.a
        href="#home"
        className="contact-arrow"
        style={{ opacity: scrollY }}
      >
        <IoIosArrowUp
          size={23}
          style={{
            borderRadius: "50%",

            color: "#FE6F27",
          }}
        />
      </motion.a>
    </>
  );
};

export default App;
