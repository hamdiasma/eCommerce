import React from "react";
import "./MenueItem.scss";
const MenueItem = ({ size, title, imageUrl }) => {
  return (
    <div className={`${size} menu-item`}>
      <div className="background-image" style={{ backgroundImage: `url('${imageUrl}')` }} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenueItem;
