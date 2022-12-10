import clsx from "clsx";
import { motion } from "framer-motion";

export const Hero = () => {
  const name = "Homero";
  const lastname = "Bracamonte";
  // variants

  const titleAnimation = {
    hidden: { opacity: 0 },
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const letters = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };

  const letterAnimation = (title) => {
    return [...title].map((letter, index) => {
      const colorCondition = letter == "H" || letter == "B";

      return (
        <motion.span
          key={index}
          variants={letters}
          className={clsx(
            colorCondition &&
              " animate-bgTranslate bg-[length:400%_400%]  bg-gradient-to-r from-palette-500 to-palette-50 bg-clip-text text-transparent",
            "inline-flex",
          )}
        >
          {letter}
        </motion.span>
      );
    });
  };

  return (
    <motion.section
      data-scroll-section
      variants={titleAnimation}
      initial="initial"
      animate="animate"
      className="max-w-7xl mx-auto px-5 sm:px-10 h-screen xl:h-[700px] grid place-items-center place-content-center "
    >
      <h1
        data-scroll
        data-scroll-speed="1"
        className="uppercase font-bold text-4xl lg:text-8xl transition-all text-center text-palette-50  overflow-hidden  "
      >
        {letterAnimation(name)}
        <br />
        {letterAnimation(lastname)}
      </h1>
    </motion.section>
  );
};
