import React from "react";
import "./Courses.scss";
import Book from "../../../assets/img/logo.svg";
import MK from "../../../assets/img/master-klass-img.png";
import { NavLink } from "react-router-dom";
import { OurApi } from "../../../fakeBackEnd/OurBack";

const Courses = () => {
  return (
    <div>
      <div id="courses">
        <div className="container">
          <div className="courses">
            <h2 className="courses--title">Курсы</h2>
            <div className="courses--cards">
              {OurApi.slice(0, 3).map((el) => (
                <NavLink to={"/team-building"}>
                  <div className="courses--card">
                    <h3>{el.title}</h3>
                    <div className="courses--card__info">
                      <h4>{el.learn}</h4>
                      <div className="courses--card__info--btn">
                        {el.buttons.map((btn) => (
                          <button>{btn.title}</button>
                        ))}
                      </div>
                    </div>
                    <img
                      src={el.image}
                      alt=""
                      className="courses--card__imgCourse"
                    />
                    <a href="">Подробнее...</a>
                  </div>
                </NavLink>
              ))}
            </div>
            <img src={Book} alt="" className="courses--book" />
            <center>
              <NavLink to={"/team-building"}>
                <button className="courses--btnMain">Смотреть все курсы</button>
              </NavLink>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
