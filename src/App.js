import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./Data";

// const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// const categories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  // const [categories, setCategories] = useState(allCategories);
  // const categories = allCategories;
  const categories = ["all", ...new Set(items.map((item) => item.category))];

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <React.Fragment>
      <main>
        <section>
          <div>
            <h1>Our Menu</h1>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
    </React.Fragment>
  );
};

export default App;
