import React from "react";
import "./Main.css"
import imgpizza from "../IMG/pizza.png"
import imghamburger from "../IMG/hamburger.png";

function Main() {
  return (
    <div className="main">
      {/* Asadbek aka */}

      {/* Behruzbek */}
      <div className="blyud">
        <h1>
          Наши <span>Блюда</span>
        </h1>
        <div className="price">
          <div className="img">
            <img src={imgpizza} alt="" />
            <div className="xamburger">
              <img src={imghamburger} alt="" />
              <img src={imghamburger} alt="" />
              <img src={imghamburger} alt="" />
            </div>
          </div>
          <div className="text">
            <p>Гамбургер мини ---------- 220 ₽</p>
            <p>Гамбургер мини ---------- 220 ₽</p>
            <p>Гамбургер мини ---------- 220 ₽</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
