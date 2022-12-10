import { useRef } from "react";
import { motion } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Header } from "./layout/";

function App() {
  const containerRef = useRef(null);

  const options = {
    smooth: true,
    // ... all available Locomotive Scroll instance options
  };
  return (
    <LocomotiveScrollProvider options={options} watch={[]} containerRef={containerRef}>
      <motion.main
        data-scroll-container
        ref={containerRef}
        className="relative h-full overflow-x-hidden bg-palette-900 "
      >
        <Header />
        <Hero />
        <Portfolio />
      </motion.main>
    </LocomotiveScrollProvider>
  );
}

export default App;
