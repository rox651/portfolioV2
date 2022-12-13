import { useMemo, useState } from "react";
import { categoriesReduce } from "../helpers";

export const useCategories = (projects, isLoading) => {
  const [categoryState, setCategoryState] = useState("all");
  const [isOpenCategories, setisOpenCategories] = useState(false);

  const toggleCategories = () => {
    setisOpenCategories(!isOpenCategories);
  };

  const categoriesItems = useMemo(() => categoriesReduce(projects), [isLoading]);
  const filteredItems = useMemo(() =>
    projects.filter(
      (project) => {
        const categoryFilter = categoryState == "all" ? "" : categoryState;
        return project.category.toLowerCase().includes(categoryFilter);
      },
      [categoryState],
    ),
  );
  return {
    categoryState,
    isOpenCategories,
    setCategoryState,
    toggleCategories,
    categoriesItems,
    filteredItems,
  };
};
