import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/ShopLogo.png";
import "./Header.scss";
import { auth } from "../../firebase/farbase";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../carddropdown/CartDropDown";

const Header = ({ currentUser }) => {
  //photoURL
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
          <div className="option option-sign" onClick={() => auth.signOut()}>
            SignOut{" "}
          </div>
        ) : (
          <Link className="option option-sign" to="/signin">
            SignIn
          </Link>
        )}
        <CartIcon className="carticon" />
      </div>
      <CartDropDown/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
