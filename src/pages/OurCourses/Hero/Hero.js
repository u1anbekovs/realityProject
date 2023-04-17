import React from "react";
import "../Hero/Hero.scss";
import coffee from "../../../assets/img/coffe.png";
import Book from "./../../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div id="heroOur">
      <div className="container">
        <div className="heroOur">
          <img src={Book} alt="" className="heroOur--book1" />
          <img src={Book} alt="" className="heroOur--book2" />
          <img src={Book} alt="" className="heroOur--book3" />
          <div className="heroOur--block">
            <div className="heroOur--block__title">
              <h1>Наши курсы</h1>
              <p className="heroOur--block__title--info">
                Получайте новые знания, навыки и возможности для эффективной
                жизни.
              </p>
              <div className="heroOur--block__title--btns">
                <NavLink to={"/learn-more"}>
                  <button className="heroOur--block__title--btns__b1">
                    Подобрать пакет
                  </button>
                </NavLink>
                <button className="heroOur--block__title--btns__b2">
                  Войти
                </button>
              </div>
            </div>
            <img src={coffee} alt="img" />
          </div>
        </div>
        <img src={Book} alt="" className="book4" />
      </div>
    </div>
  );
};

export default Hero;
