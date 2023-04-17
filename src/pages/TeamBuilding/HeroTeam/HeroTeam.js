import React from "react";
import "./HeroTeam.scss";
import Book from "./../../../assets/img/logo.svg";
import youTube from "./../../../assets/img/herobir.png";
import { BsFillPlayFill } from "react-icons/bs";
import { useState } from "react";

const HeroTeam = () => {
  const [openVidoe, setOpenVideo] = useState(false);

  return (
    <div id="heroTeam">
      <div className="container">
        <div className="hero">
          <img src={Book} alt="" className="hero--bgBook" />
          <div className="hero--titles">
            <img src={Book} alt="" className="hero--titles__book1" />
            <div className="hero--titles__greatTeam">
              <p className="hero--titles__greatTeam--pTitle">Наши курсы / Курсы по созданию команды</p>
              <h1>Создание команды</h1>
              <p>
                Как правильно строить команду и эффективно ею управлять, чтобы
                достигать все поставленные цели.
              </p>
              <button className="hero--btn">Получить доступ за 500,00 $</button>
            </div>
            <div className="hero--titles__insayt">
              <h3>В курс входит</h3>
              <p>43 материала</p>
              <p>100% эксклюзив</p>
            </div>
          </div>
        </div>
        {openVidoe ? (
          <iframe
            width="100%"
            height="730"
            src="https://www.youtube.com/embed/nn2GdJeiifI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        ) : (
          <div
            className="hero--youTube"
            style={{
              background: `url(${youTube})`,
            }}
          >
            <div className="hero--youTube__play">
              <BsFillPlayFill
                onClick={() => setOpenVideo(true)}
                className="hero--youTube__play--icon"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroTeam;
