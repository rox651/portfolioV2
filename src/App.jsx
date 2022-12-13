import { useRef } from "react";
import { motion } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "locomotive-scroll/dist/locomotive-scroll.min.css";

import { Hero, Portfolio, Header, Modal } from "./components/";
import { LanguageModal } from "./languages";

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
        <Modal />
        <LanguageModal/>
      </motion.main>
    </LocomotiveScrollProvider>
  );
}

export default App;
