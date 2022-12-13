import { motion } from "framer-motion";

import { languagesData } from "../data";
import { LanguageButton } from "./";
export const LanguageModal = () => {

  return (
    <div className="fixed bottom-5 right-5 lg:bottom-10 lg:right-10 ">
      <motion.ul
        initial={{ scale: 0 }}
        animate={{ scale: 1  }}
        transition={{ duration: 0.3 }}
        className="bg-palette shadow-lg rounded-lg  overflow-hidden w-12 lg:w-24 "
      >
        {Object.keys(languagesData).map((lng) => (
          <LanguageButton key={lng} keyLng={lng} lng={languagesData[lng]} />
        ))}
      </motion.ul>
    </div>
  );
};
