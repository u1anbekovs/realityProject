import React from "react";
import "./MasterClasses.scss";
import Book from "./../../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import { OurApi } from "../../../fakeBackEnd/OurBack";

const MasterClasses = () => {
  return (
    <div id="mk">
      <div className="container">
        <div className="mk">
          <img src={Book} alt="" className="mk--book" />
          <h2 className="mk--title">Мастер классы</h2>
          <div className="mk--cards">
            {OurApi.map((el) => (
              <NavLink to={"/team-building"}>
                <div className="mk--card">
                  <h3>{el.title}</h3>
                  <div className="mk--card__info">
                    <h4>{el.learn}</h4>
                    <div className="mk--card__info--btn">
                      {
                        el.buttons.map(btn => (
                            <button>{btn.title}</button>
                        ))
                      }
                    </div>
                  </div>
                  <img src={el.image} alt="" className="mk--card__imgMk" />
                  <a href="">Подробнее...</a>
                </div>
              </NavLink>
            ))}
          </div>
          <center>
            <button className="mk--btnMain">Смотреть все мастер классы</button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default MasterClasses;
