import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../../assets/img/logo.svg";
import { CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const modal = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const local = () => {
    let log = JSON.parse(localStorage.getItem("login")) || [];
    dispatch({ type: "OPEN_LOGIN", payload: log });
    localStorage.setItem("login", JSON.stringify(true));
  };

  return (
    <div
      style={{
        display: !modal ? "block" : "none",
      }}
      id="header"
    >
      <div className="container">
        <div className="header--child">
          <div className="header">
            <div className="header--logo">
              <img
                src={Logo}
                alt="logo"
                style={{
                  width: menu ? "30%" : "88%",
                }}
              />
              <span
                style={{
                  display: menu ? "block" : "none",
                }}
              >
                SELF DEVELOPING SCHOOL
              </span>
            </div>
            <nav className="header--navbar">
              <NavLink
                onClick={() => {
                  window.scroll(0, 0);
                }}
                to={"/"}
              >
                Главная
              </NavLink>
              <NavLink
                onClick={() => {
                  window.scroll(0, 0);
                }}
                to={"/our-course"}
              >
                Наши курсы
              </NavLink>
              <NavLink
                onClick={() => {
                  window.scroll(0, 0);
                }}
                to={"/about-us"}
              >
                О нас
              </NavLink>
            </nav>
            <NavLink to={"/login"}>
              <div onClick={local} className="header--login">
                <button className="header--login__btn">
                  <CiUser className="header--login__btn--icon" />
                  Войти
                </button>
              </div>
            </NavLink>
            <div onClick={() => setMenu(!menu)} className="header--menu">
              <div className="header--menu__parentMenu">
                <div className={menu ? "header--menu__parentMenu--one" : ""} />
                <div className={menu ? "header--menu__parentMenu--tow" : ""} />
                <div
                  className={menu ? "header--menu__parentMenu--three" : ""}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              display: menu ? "block" : "none",
            }}
          >
            <div className="header--nav">
              <NavLink
                onClick={() => {
                  setMenu(false);
                  window.scroll(0,0)
                }}
                to={"/"}
              >
                Главная
              </NavLink>
              <NavLink
                onClick={() => {
                  setMenu(false);
                  window.scroll(0,0)
                }}
                to={"/our-course"}
              >
                Наши курсы
              </NavLink>
              <NavLink
                onClick={() => {
                  setMenu(false);
                  window.scroll(0,0)
                }}
                to={"/about-us"}
              >
                О нас
              </NavLink>
              <NavLink
                onClick={() => {
                  setMenu(false);
                  window.scroll(0,0)
                }}
                to={"/login"}
              >
                <button className="header--towBtn">
                  <CiUser className="header--towBtn__icon" />
                  Войти
                </button>
              </NavLink>
            </div>
          </div>
          <div className="header--menu">
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
