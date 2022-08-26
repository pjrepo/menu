import React from "react";

const Menu = (props) => {
  const { items } = props;

  return (
    <React.Fragment>
      {items.map((menuItems) => {
        const { id, title, price, img, desc } = menuItems;
        return (
          <article key={id}>
            <img src={img} alt={title} />
            <div>
              <header>
                <h4>{title}</h4>
                <h4>${price}</h4>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </React.Fragment>
  );
};

export default Menu;
