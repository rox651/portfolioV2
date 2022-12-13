import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../../context";
import { urlFor } from "../../lib/sanity";

export const Modal = () => {
  const { projectSelected, setProjectSelected } = useContext(AppContext);

  return (
    <AnimatePresence>
      {projectSelected && (
        <motion.div
          initial={{ backgroundColor: "#1D242B00" }}
          animate={{ backgroundColor: "#1D242B8f" }}
          exit={{ backgroundColor: "#1D242B00" }}
          onClick={() => setProjectSelected(null)}
          className=" fixed inset-0  z-50 grid place-items-center cursor-pointer px-5 overflow-y-scroll"
        >
          <article
            className="w-full max-w-[700px] mx-auto cursor-default  rounded-lg text-palette-900 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              className=" max-h-64  w-full object-cover"
              layoutId={projectSelected["_id"]}
              src={urlFor(projectSelected.image).url()}
            />
            <motion.div
              initial={{ y: 400, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              exit={{ y: 400, opacity: 0 }}
              className="bg-palette-50 text-palette-900 px-5 py-3 lg:py-8 lg:h-52 space-y-2"
            >
              <h2 className="font-bold text-lg lg:text-2xl ">{projectSelected.name}</h2>
              <div className=" flex gap-3">
                <a
                  href=""
                  className=" text-sm lg:text-base font-bold hover:-skew-x-12 transition-all text-palette-500   "
                >
                  Repository
                </a>
                <a
                  href=""
                  className=" text-sm lg:text-base font-bold hover:-skew-x-12 transition-all text-palette-500   "
                >
                  Web page
                </a>
              </div>
              <p className="text-xs lg:text-base font-medium ">{projectSelected?.desc}</p>
            </motion.div>
          </article>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
