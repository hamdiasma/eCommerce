import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/ShopLogo.png";
import "./Header.scss"

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img className="logo" src={Logo} alt="" /> <strong> My E-COMMERCE</strong>
      </Link>
      <div className="options">
        <Link className="option" to="/">HOME</Link>
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
      </div>
    </div>
  );
};

export default Header;
