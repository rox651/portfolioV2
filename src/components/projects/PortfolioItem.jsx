import clsx from "clsx";
import { LayoutGroup, motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../../context";
import { urlFor } from "../../lib/sanity";

export const PortfolioItem = ({ project, index }) => {
  const { setProjectSelected } = useContext(AppContext);

  const id = project["_id"];
  const { name, image } = project;

  const gridCondition = (index + 1) % 5 === 0;
  return (
    <motion.article
      initial={{ scale: 1, rotate: 0, zIndex: 0 }}
      exit={{ scale: 0 }}
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: !gridCondition ? 0.9 : 1, zIndex: 20, rotate: !gridCondition ? -10 : 0 }}
      className={clsx(gridCondition && "col-span-full", " h-[250px] lg:h-[350px] cursor-pointer  relative")}
      onClick={() => setProjectSelected(project)}
      layoutId={id}
    >
      <img src={urlFor(image).url()} className="bg-slate-500 rounded-lg w-full h-[90%] object-cover" />
      <h3 className="text-palette-50 text-xl  mt-5">{name}</h3>
      <span className="text-palette-50 lg:text-3xl absolute bottom-2 lg:bottom-0 lg:-right-3 bg-palette-500 w-10 h-10 lg:w-16 lg:h-16 grid place-items-center rounded-md">
        {index + 1}
      </span>
    </motion.article>
  );
};
