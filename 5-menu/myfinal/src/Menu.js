import React from 'react';

const Menu = ({ items }) => {
  console.log(items);
  return (
    <div className="section-center">
      {items.map((item) => {
        const {id, price, img, category} = item
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={item.title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4 className="price">${item.price}</h4>
              </header>
              <p className="item-text">{item.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
