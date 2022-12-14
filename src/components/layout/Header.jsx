import { motion } from "framer-motion";

import { headerData } from "../../data";
import {  Link } from "./";
import Logo from "../../assets/img/logo.webp";

export const Header = () => {

  const header = {
    initial: {
      opacity: 0,
      y: "-100%",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <motion.header
      variants={header}
      initial="initial"
      animate="animate"
      className="h-20 left-0 z-20   px-5 sm:px-10 flex absolute w-full top-0 bg-palette-900   py-5"
    >
      <a href="/" className="flex-1">
        <img className=" h-full" src={Logo} alt="logo-page" />
      </a>
      <ul className=" flex items-center gap-5 text-sm">
        {headerData.map((link) => (
          <Link link={link} key={link.name} />
        ))}

       
      </ul>
    </motion.header>
  );
};
