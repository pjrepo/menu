import React from "react";

const Categories = (props) => {
  const { categories, filterItems } = props;

  // const categoryHandler = (category) => filterItems(category);

  return (
    <React.Fragment>
      {categories.map((category, index) => {
        return (
          <button key={index} onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
    </React.Fragment>
  );
};

export default Categories;
