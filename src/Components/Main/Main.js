import React from "react";
import "./Main.css"
import imgpizza from "../IMG/pizza.png"
import imghamburger from "../IMG/hamburger.png";
import maskgr from "../IMG/Mask Group.png"
function Main() {
  return (
    <div className="main">
      {/* Asadbek aka */}

      {/* Behruzbek */}
      <div className="blyud">
        <h1>
          Наши <span>Блюда</span>
        </h1>
        <div className="blyud-price">
          <div className="img">
            <img className="pizza" src={imgpizza} alt="" />
            <div className="blyud-xamburger">
              <img className="hamburger" src={imghamburger} alt="" />
              <img className="hamburger" src={imghamburger} alt="" />
              <img className="hamburger" src={imghamburger} alt="" />
            </div>
          </div>
          <div className="blyud-text">
            <p>Гамбургер мини ------------------------ 220 ₽</p>
            <p>Гамбургер мини ------------------------ 220 ₽</p>
            <p>Гамбургер мини ------------------------ 220 ₽</p>
          </div>
        </div>
      </div>

      <div className="main-menu">
        <div className="menu">
          <h1>Наше меню</h1>
          <div className="burger-blok">
              <div className="burger-box">
                <div className="img">
                  <img src={maskgr} alt="" />
                <div className="price">
                  <p>420</p>
                </div>
                  
                </div>
                <div className="text">
                  <h3>Гамбургер макси</h3>
                  <p>Максимально толстый 
слой мяса</p>
                  <button>ЗАКАЗАТЬ</button>
                </div>
              </div>

              <div className="burger-box">
                <div className="img">
                  <img src={maskgr} alt="" />
                <div className="price">
                  <p>420</p>
                </div>
                  
                </div>
                <div className="text">
                  <h3>Гамбургер макси</h3>
                  <p>Максимально толстый 
слой мяса</p>
                  <button>ЗАКАЗАТЬ</button>
                </div>
              </div>

              <div className="burger-box">
                <div className="img">
                  <img src={maskgr} alt="" />
                <div className="price">
                  <p>420</p>
                </div>
                  
                </div>
                <div className="text">
                  <h3>Гамбургер макси</h3>
                  <p>Максимально толстый 
слой мяса</p>
                  <button>ЗАКАЗАТЬ</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
