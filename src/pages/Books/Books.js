import bookImg from "./../../assets/img/aboutBook.png";
import { IoIosArrowForward } from "react-icons/io";
import { HomeBook } from "./../../fakeBackEnd/FakeHomeBook/Index";
import { useState } from "react";

const Books = () => {

const [selectedTab, setSelectedTab] = useState(1);

  const block = HomeBook.filter(
    (el) => selectedTab === el.id && el.block.map((t) => t)
  );


  console.log(block);

  const btn = HomeBook.map((el) => el);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const [book, setBook] = useState([1, 2, 3, 4]);

  const [book2, setBook2] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <div id="allBooks">
      <div className="container">
        <div className="allBooks">
          <span className="allBooks--span">Наши курсы</span>
          <h1 className="allBooks--title">Статьи</h1>
          <div className="allBooks--tabs">
            {btn.map((el) => (
              <button 
                onClick={() => {
                  handleTabClick(el.id);
                }}
                className={
                  selectedTab === el.id ? "allBooks--tabs__btnActive": "allBooks--tabs__btn"
                }
              >
                {el.title}
              </button>
            ))}
          </div>
          <div className="allBooks--block">
            <div className="allBooks--block__first">
              {block.map((el) =>
                el.block.map((el) => (
                  <div className="allBooks--block__first--aboutBooks">
                    <div className="allBooks--block__first--aboutBooks__title">
                      <h1>{el.title}</h1>
                      <button>Новое</button>
                    </div>
                    <div className="allBooks--block__first--aboutBooks__tabs">
                      <h3>{el.name}</h3>
                      {el.buttons.map((btn) => (
                        <button>{btn.title}</button>
                      ))}
                    </div>
                    <img src={el.image} alt="" />
                    <div className="allBooks--block__first--aboutBooks__line" />
                    <div className="allBooks--block__first--aboutBooks__date">
                      <h3>{el.user}</h3>
                      <h3>{el.date}</h3>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="allBooks--block__two">
              {block.map((el) =>
                el.block.map((el) => (
                  <div className="allBooks--block__two--aboutBooks">
                    <h1 className="allBooks--block__two--aboutBooks__title">
                      {el.title}
                    </h1>
                    <div className="allBooks--block__two--aboutBooks__tabs">
                      <h3>{el.name}</h3>
                      {el.buttons.map((btn) => (
                        <button>{btn.title}</button>
                      ))}
                    </div>
                    <img src={el.image} alt="" />
                    <div className="allBooks--block__two--aboutBooks__line" />
                    <div className="allBooks--block__two--aboutBooks__date">
                      <h3>{el.user}</h3>
                      <h3>{el.date}</h3>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="allBooks--block__two">
              {block.map((el) =>
                el.block.map((el) => (
                  <div className="allBooks--block__two--aboutBooks">
                    <h1 className="allBooks--block__two--aboutBooks__title">
                      {el.title}
                    </h1>
                    <div className="allBooks--block__two--aboutBooks__tabs">
                      <h3>{el.name}</h3>
                      {el.buttons.map((btn) => (
                        <button>{btn.title}</button>
                      ))}
                    </div>
                    <img src={el.image} alt="" />
                    <div className="allBooks--block__two--aboutBooks__line" />
                    <div className="allBooks--block__two--aboutBooks__date">
                      <h3>{el.user}</h3>
                      <h3>{el.date}</h3>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="allBooks--nav">
            {book2.map((el) => (
              <div className="allBooks--nav__numbers">{el}</div>
            ))}
            {book.map((el) => (
              <div className="allBooks--nav__numbers2">{el}</div>
            ))}
            <div className="allBooks--nav__next">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
