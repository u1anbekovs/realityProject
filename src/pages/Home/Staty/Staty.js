import React, { useState } from "react";
import aboutBook from "./../../../assets/img/aboutBook.png";
import bookStuty from "./../../../assets/img/bookStuty.png";
import book from "./../../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import { HomeBook } from "../../../fakeBackEnd/FakeHomeBook/Index";

const Staty = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  let  blockX = HomeBook.filter(
    (el) => selectedTab === el.id && el.block.slice(0, 3).map((t) => t)
  );
  const blockY = HomeBook.filter(
    (el) => selectedTab === el.id && el.block.slice(0, 2).map((t) => t)
  );
  const blockOne = HomeBook.filter(
    (el) => selectedTab === el.id && el.block.slice(0, 1).map((t) => t)
  );

  const btn = HomeBook.map((el) => el);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  blockX.map(el => el.block)

  

  return (
    <div id="books">
      <div className="container">
        <div className="books">
          <img src={book} className="books--img1" alt="" />
          <img src={book} className="books--img2" alt="" />
          <img src={book} className="books--img3" alt="" />
          <img src={book} className="books--img4" alt="" />
          <div className="books--tabs">
            {btn.map((el) => (
              <div
                onClick={() => {
                  handleTabClick(el.id);
                }}
                style={{
                  background: selectedTab === el.id ? "while" : ""
                }}
                className={
                  selectedTab === el.id ? "books--tabs__btnActive" : "books--tabs__btn"
                }
              >
                {el.title}
              </div>
            ))}
          </div>

          <div className="books--block">
            {blockX.map((el) =>
              el.block.slice(0,3).map((t) => (
                <div className="books--block__aboutBook">
                  <h2>{t.title}</h2>
                  <div className="books--block__aboutBook--start">
                    <h4>{t.name}</h4>
                    {t.buttons.map((button) => (
                      <button>{button.title}</button>
                    ))}
                  </div>
                  <img src={t.image} alt="" />
                  <div className="books--block__aboutBook--line" />
                  <div className="books--block__aboutBook--end">
                    <h3>{t.user}</h3>
                    <h3>{t.date}</h3>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="books--startBlock">
            <div className="books--startBlock__firstBlock">
              {blockY.map((el) =>
                el.block.slice(0,2).map((el) => (
                  <div className="books--startBlock__firstBlock--aboutBook">
                    <h2>{el.title}</h2>
                    <div className="books--startBlock__firstBlock--aboutBook__start">
                      <h4>{el.name}</h4>
                      {el.buttons.map((btn) => {
                        <button>{btn.title}</button>;
                      })}
                    </div>
                    <img src={el.image} alt="" />
                    <div className="books--startBlock__firstBlock--aboutBook__line" />
                    <div className="books--startBlock__firstBlock--aboutBook__end">
                      <h3>{el.user}</h3>
                      <h3>{el.date}</h3>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="firstBlockTrue">
              <div className="books--startBlock__centerBooks">
                {blockOne.map((el) =>
                  el.block.slice(0,1).map((el) => (
                    <div className="books--startBlock__centerBooks--aboutBook">
                      <h2>{el.title}</h2>
                      <div className="books--startBlock__centerBooks--aboutBook__start">
                        <h4>{el.name}</h4>
                        {el.buttons.map((btn) => (
                          <button>{btn.title}</button>
                        ))}
                      </div>
                      <img src={el.image} alt="" />
                      <img
                        src={el.imageTwo}
                        className="books--startBlock__centerBooks--aboutBook__img"
                        alt=""
                      />
                      <div className="books--startBlock__centerBooks--aboutBook__line" />
                      <div className="books--startBlock__centerBooks--aboutBook__end">
                        <h3>{el.user}</h3>
                        <h3>{el.date}</h3>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="books--startBlock__firstBlock">
              {blockY.map((el) =>
                el.block.slice(0,2).map((el) => (
                  <div className="books--startBlock__firstBlock--aboutBook">
                    <h2>{el.title}</h2>
                    <div className="books--startBlock__firstBlock--aboutBook__start">
                      <h4>{el.name}</h4>
                      {el.buttons.map((btn) => {
                        <button>{btn.title}</button>;
                      })}
                    </div>
                    <img src={el.image} alt="" />
                    <div className="books--startBlock__firstBlock--aboutBook__line" />
                    <div className="books--startBlock__firstBlock--aboutBook__end">
                      <h3>{el.user}</h3>
                      <h3>{el.date}</h3>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="secondBlockFalse">
            <div className="books--startBlock__centerBooks">
              {blockOne.map((el) =>
                el.block.slice(0,1).map((el) => (
                  <div className="books--startBlock__centerBooks--aboutBook">
                    <h2>{el.title}</h2>
                    <div className="books--startBlock__centerBooks--aboutBook__start">
                      <h4>{el.name}</h4>
                      {el.buttons.map((el) => (
                        <button>{el.title}</button>
                      ))}
                    </div>
                    <img src={el.image} alt="" />
                    <img
                      src={el.imageTwo}
                      className="books--startBlock__centerBooks--aboutBook__img"
                      alt=""
                    />
                    <div className="books--startBlock__centerBooks--aboutBook__line" />
                    <div className="books--startBlock__centerBooks--aboutBook__end">
                      <h3>{el.user}</h3>
                      <h3>{el.date}</h3>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <NavLink to={"/books"}>
            <button className="books--btn">Показать болшье</button>
          </NavLink>
          <div className="books--"></div>
        </div>
      </div>
    </div>
  );
};

export default Staty;
