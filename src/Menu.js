import React from "react";
import './Menu.css'

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, price } = item;
        return (
          <div key={id} className="menu-item">
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">₹{price}</h4>
              </header>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
