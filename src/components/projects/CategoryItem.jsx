import clsx from "clsx";

export const CategoryItem = ({ category, categoryState, setCategoryState, toggleCategories }) => {
  const categoryLower = category.toLowerCase();
  return (
    <li
      onClick={() => {
        setCategoryState(categoryLower);
      }}
      className={clsx(
        categoryState === categoryLower && "bg-palette-50 text-palette-900",
        "cursor-pointer capitalize  px-5 py-2",
      )}
    >
      {category}
    </li>
  );
};
