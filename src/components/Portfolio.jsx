import { motion } from "framer-motion";
import { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { PortfolioItem } from "./PortfolioItem";
export const Portfolio = () => {
  const projects = [
    {
      name: "Project 1",
      category: "new",
    },
    {
      name: "Project 2",
      category: "new",
    },
    {
      name: "Project 3",
      category: "new",
    },
    {
      name: "Project 4",
      category: "new",
    },
    {
      name: "Project 4",
      category: "new",
    },
    {
      name: "Project 4",
      category: "new",
    },
    {
      name: "Project 4",
      category: "new",
    },
  ];

  const [isOpenCategories, setisOpenCategories] = useState(false);

  const toggleCategories = () => {
    setisOpenCategories(!isOpenCategories);
  };

  return (
    <section data-scroll-section className="max-w-7xl py-10 mx-auto px-5 sm:px-10 min-h-[700px] overflow-hidden">
      <aside className="flex gap-3 flex-col lg:flex-row justify-between text-palette-50">
        <h1 className="text-4xl lg:text-6xl font-bold  uppercase">Portfolio</h1>
        <span className="flex items-center gap-3  text-xl  relative">
          Categories
          <BiCategory className="cursor-pointer" onClick={toggleCategories} />
          <motion.ul
            initial={{ scale: 0 }}
            animate={{ scale: isOpenCategories ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className=" right-0 absolute rounded-lg z-30 top-12 bg-palette-500 py-2 px-5 text-palette-50 "
          >
            <li>All</li>
            <li>News</li>
            <li>Old</li>
          </motion.ul>
        </span>
      </aside>
      <motion.div
        data-scroll
        data-scroll-speed="-1"
        initial={{ opacity: 0, y: "200px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid lg:grid-cols-4 gap-10 pt-10 h-[90%] "
      >
        {projects.map((project, index) => (
          <PortfolioItem key={index} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
};
