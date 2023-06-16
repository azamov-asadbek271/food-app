
import React from "react";
import "./Header.css"
import {FiShoppingCart,FiPhoneCall} from "react-icons/fi"
import logo from "../IMG/LOGO.png"
import line from "../IMG/Rectangle 27.png"

function Header() {
  return (
    <header>
      <div className="navbar">
        <div className="navbar-logo">
          <img className="navbar-logo" src={logo} alt="bu yerda logo joylashgan" />
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
              <FiPhoneCall />
              <a href="">+999-888-76-54</a>
            </div>
            <p className="navbar-order-paragrph">
              Свяжитесь с нами для бронирования
            </p>
          </div>
          <button className="btn">ЗАКАЗ СТОЛИКА</button>
        </div>
      </div>
      <div className="header-left-box">
        <h2 className="welcome">Добро пожаловать в</h2>
        <h1 className="kitchen">Наш ресторан</h1>
        <div className="header-left-box-dom">
          <img className="header-line" src={line} alt="" />
          <p className="header-home">ДОМ ЛУЧШЕЙ ЕДЫ</p> 
          <img className="header-line" src={line} alt="" />
        </div>
        <button className="header-menu">VIEW MENU</button>
      </div>
    </header>
  );
  
}
export default Header;