import React from "react";
import "./Follow.scss";
import Book1 from "./../../../assets/img/logo.svg";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Follow = () => {
  return (
    <div>
      <div id="follow">
        <div className="container">
          <div className="follow">
            <div className="follow--book">
              <img src={Book1} alt="" className="follow--book__book1" />
              <img src={Book1} alt="" className="follow--book__book2" />
            </div>
            <div className="follow--block">
              <div className="follow--block__title">
                <h1>Подпишитесь сейчас за 250,00 $ / год</h1>
                <p>
                  И получи доступ ко всем нашим материалам и начинай развиватся
                  сейчас вместе со всеми
                </p>
              </div>
              <div className="follow--block__buttons">
                <NavLink onClick={() => window.scroll(0, 0)} to={"/buy"}>
                  <button className="follow--block__buttons--followBtn">
                    Подписаться
                  </button>
                </NavLink>
                <NavLink onClick={() => window.scroll(0, 0)} to={"/learn-more"}>
                  <button className="follow--block__buttons--learnBtn">
                    Узнать больше
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow;
