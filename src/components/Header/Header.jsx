import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/ShopLogo.png";
import { auth } from "../../firebase/firebase";
import "./Header.scss";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img className="logo" src={Logo} alt="" />{" "}
        <strong> My E-COMMERCE</strong>
      </Link>
      <div className="options">
        <Link className="option" to="/">
          HOME
        </Link>
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SignOut <img className="user-img" src={currentUser.photoURL} alt=""/>
          </div>
        ) : (
          <Link className="option" to="signin">
            SignIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
