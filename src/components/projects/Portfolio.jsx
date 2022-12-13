import { LayoutGroup, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BiCategory } from "react-icons/bi";

import { useCategories, useFetch } from "../../hooks";

import { PortfolioItem } from "./PortfolioItem";
import { CategoryItem } from "./CategoryItem";

export const Portfolio = () => {
  //sanity data
  const { data: projects, isLoading } = useFetch('*[_type == "project"]');

  //translation hook
  const { t } = useTranslation();

  //categories states
  const { categoryState, isOpenCategories, setCategoryState, toggleCategories, categoriesItems, filteredItems } =
    useCategories(projects, isLoading);

  return (
    <section data-scroll-section className="max-w-7xl py-10 mx-auto px-5 sm:px-10 min-h-[700px] overflow-hidden">
      <aside className="flex gap-3 flex-col lg:flex-row justify-between text-palette-50">
        <h1 className="text-4xl lg:text-6xl font-bold  uppercase">{t("Portfolio")}</h1>
        <span className="flex items-center gap-3  text-xl  relative">
          {t("Categories")}
          <BiCategory className="cursor-pointer bg-palette-500 w-8 h-7 rounded-sm" onClick={toggleCategories} />
          <motion.ul
            initial={{ scale: 0 }}
            animate={{ scale: isOpenCategories ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="  shadow-lg left-0 lg:right-0 absolute rounded-lg z-30 overflow-hidden   top-12 bg-palette-500   text-palette-50 "
          >
            {categoriesItems.map((category) => (
              <CategoryItem
                key={category}
                category={category}
                setCategoryState={setCategoryState}
                toggleCategories={toggleCategories}
                categoryState={categoryState}
              />
            ))}
          </motion.ul>
        </span>
      </aside>

      <motion.div data-scroll data-scroll-speed="-1" className="grid lg:grid-cols-2 gap-10 pt-10 h-[90%] ">
        {!isLoading &&
          filteredItems.map((project, index) => <PortfolioItem key={index} project={project} index={index} />)}
      </motion.div>
    </section>
  );
};
