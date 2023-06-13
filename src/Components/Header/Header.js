
import React from "react";
import "./Header.css"
// import  from "../IMG/LOGO.png";
import {FiShoppingCart,FiPhoneCall} from "react-icons/fi"

function Header() {
  return (
    <header>
      <div className="navbar">
        <div className="navbar-logo">
          <img src="" alt="bu yerda logo joylashgan" />
        </div>
        <div className="navbar-link">
          <a href="#">ГЛАВНАЯ</a>
          <a href="#">МЕНЮ</a>
          <a href="#">О НАС</a>
          <a href="#">БРОНЬ</a>
          <FiShoppingCart />
        </div>
        <div className="navbar-order">
          <div className="phone">
            <div className="navbar-phone-number">
              <FiPhoneCall/>
              <a href="">+999-888-76-54</a>
            </div>
            <p className="navbar-order-paragrph">Свяжитесь с нами для бронирования</p>
          </div>
          <button className="btn">ЗАКАЗ СТОЛИКА</button>
        </div>
      </div>
    </header>
  );
  
}
export default Header;