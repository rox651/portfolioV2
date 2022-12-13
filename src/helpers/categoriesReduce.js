export const categoriesReduce = (arr = []) => {
  return arr.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"],
  );
};
