import React from "react";
import "./Main.css";
import imgpizza from "../IMG/pizza.png";
import imghamburger from "../IMG/hamburger.png";
import maskgr from "../IMG/Mask Group.png";
import man from "../IMG/man.png";
import stakan from "../IMG/stakan.png"
import coffe from "../IMG/coffe.png"
import soup1 from "../IMG/soup.png"
import cheff1 from "../IMG/cheff1.png"
import cheff2 from "../IMG/cheff2.png"
import cheff3 from "../IMG/cheff3.png"
import footbg from "../IMG/footer bg.png"

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
                <p>Максимально толстый слой мяса</p>
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
                <p>Максимально толстый слой мяса</p>
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
                <p>Максимально толстый слой мяса</p>
                <button>ЗАКАЗАТЬ</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* comments */}
      <div className="main-comment">
        <div className="comment">
          <p className="p1">
            Я надолго запомню мой День рождения, проведённый в этом ресторане!
            Кусочек родной Армении!!! Отдельное спасибо за комплепент в виде
            фруктовой тарелки. Будем рекомендовать этот ресторан своим друзьям и
            родственникам также за рубежом, путешествующих в Санкт-Петербург!!!
          </p>
          <img src={man} alt="" />
          <p className="p2">Посетитель</p>
          <p className="p3">Николай</p>
          <div className="btngr">
            <button className="btn"></button>
            <button className="btn"></button>
            <button className="btn"></button>
          </div>
        </div>
      </div>

      {/* our gallery */}
      <div className="gallery">
        <h1>
          Галерея <span> Блюд</span>
        </h1>
        <div className="main-img">
          <div className="red1"></div>
          <div className="soup-gr">
            <div className="soup1">
              <img src={stakan} alt="" />
              <div className="img1">
                <img src={soup1} alt="" />
                <img src={coffe} alt="" />
              </div>
            </div>
            <div className="soup1">
              <div className="img1">
                <img src={coffe} alt="" />
                <img src={soup1} alt="" />
              </div>
              <img src={stakan} alt="" />
            </div>
          </div>
          <div className="red1"></div>
        </div>
      </div>

      {/* chef */}
      <div className="chef">
        <h1>
          Наши <span>Повара</span>
        </h1>
        <div className="img-blok">
          <img src={cheff1} alt="" />
          <img src={cheff2} alt="" />
          <img src={cheff3} alt="" />
        </div>
      </div>
      <div className="footer">
        <img src={footbg} alt="" />
      </div>
    </div>
  );
}

export default Main;
