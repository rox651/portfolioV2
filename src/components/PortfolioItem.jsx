import clsx from "clsx";
import { motion } from "framer-motion";

export const PortfolioItem = ({ project, index }) => {
  const { name, category } = project;
  const gridCondition = (index + 1) % 5 === 0;
  return (
    <motion.article
      initial={{ scale: 1, rotate: 0, zIndex: 0 }}
      whileHover={{ scale: 0.9, zIndex: 20, rotate: !gridCondition ? -10 : 0 }}
      className={clsx(gridCondition && "col-span-full", " h-[350px]  relative")}
    >
      <div className="bg-slate-500 rounded-lg w-full h-[90%] object-cover"></div>
      <h3 className="text-palette-50 text-xl mt-4">{name}</h3>
      <span className="text-palette-50 text-3xl absolute bottom-0 -right-3 bg-palette-500 w-16 h-16 grid place-items-center rounded-md">
        {index + 1}
      </span>
    </motion.article>
  );
};
