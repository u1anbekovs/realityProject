import React, { useEffect, useState } from 'react';
import { BsCheckLg } from "react-icons/bs"
import "./LearnMore.scss"
import { BsCheck2 } from "react-icons/bs"
import { MdClose } from "react-icons/md"
import BookBg from "./../../../../assets/img/logo.svg"
import Accardeon from "./../../Accardeon/Accardeon"
import { NavLink } from 'react-router-dom';


const LearnMore = () => {
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(true)
    const [active3, setActive3] = useState(true)
    const [active4, setActive4] = useState(true)

    const getActive1 = () => {
        setActive1(!active1)
        setActive2(true)
    }
    const getActive2 = () => {
        setActive2(!active2)
        setActive1(false)
    }


    return (
        <div id="learnMore">
            <div className="container">
                <div className="learnMore">
                    <p className="learnMore--p">Пакеты / Подробнее о пакетах</p>
                    <h1 className="learnMore--titleh1">ВЫБЕРИТЕ СВОЙ ПАКЕТ УЧАСТИЯ</h1>
                    <p className="learnMore--titleP">Присоединяйтесь к нам и начните свой путь к успеху.</p>
                    <div className="learnMore--cards">
                        <div className="learnMore--cards__card1" style={{
                                transition: ".4s",
                                transform: active1 ? "scale(1.1)" : "",
                            }} onClick={getActive1}>
                            <h1>Обычный</h1>
                            <div className="learnMore--cards__card1--inputMonth">
                                <input onClick={()=> {
                                    getActive1()
                                      setActive3(true)
                                }} type="radio" id="radioMonth" name='qestion' />
                                <label htmlFor="radioMonth">Ежемесячно</label>
                            </div>
                            <div className="learnMore--cards__card1--inputYear">
                                <input onClick={()=> {
                                    setActive3(false)
                                }} type="radio" id="radioYear" name='qestion' />
                                <label htmlFor="radioYear">Ежегодно</label>
                            </div>
                            <div className="learnMore--cards__card1--icons">
                                <h2><BsCheckLg /></h2>
                                <p>Все новые статьи</p>
                            </div>
                            <div className="learnMore--cards__card1--icons">
                                <h2><BsCheckLg /></h2>
                                <p>Все мастер классы по саморозвитию</p>
                            </div>
                            <h2 className="learnMore--cards__card1--prace">Цена: <b style={{
                                display: active3===false ? "none": "block"
                            }}>225$</b> <span  style={{
                                display: active3===true ? "none": "block"
                            }}>65$</span> </h2>
                            <NavLink to={"/buy"}>
                            <button className="learnMore--cards__card1--btnFollow">Подписаться</button>
                            </NavLink>
                        </div>

                        <div style={{
                            transition: ".4s",
                            transform: active2 ? "" : "scale(1.1)"
                        }}
                            className="learnMore--cards__card1"
                            onClick={getActive2}>
                            <h1>Интенсив</h1>
                            <div className="learnMore--cards__card1--inputMonth">
                                <input onClick={()=> {
                                    setActive4(true)
                                }} type="radio" id="radioMonth" name='qestion2' />
                                <label htmlFor="radioMonth">Ежемесячно</label>
                            </div>
                            <div className="learnMore--cards__card1--inputYear">
                                <input onClick={()=> {
                                    setActive4(false)
                                }}  type="radio" id="radioYear" name='qestion2' />
                                <label htmlFor="radioYear">Ежегодно</label>
                            </div>
                            <div className="learnMore--cards__card1--icons">
                                <h2><BsCheckLg /></h2>
                                <p>Все новые статьи</p>
                            </div>
                            <div className="learnMore--cards__card1--icons">
                                <h2><BsCheckLg /></h2>
                                <p>Все мастер классы по саморозвитию</p>
                            </div>
                            <div className="learnMore--cards__card1--icons">
                                <h2><BsCheckLg /></h2>
                                <p>Курс по чтению языка тела</p>
                            </div>
                            <div className="learnMore--cards__card1--icons">
                                <h2><BsCheckLg /></h2>
                                <p>Курс по накоплению средств с выполотой долгов</p>
                            </div>
                            <div className="learnMore--cards__card1--icons">
                                <h2><BsCheckLg /></h2>
                                <p>Курс по быстрому карьерному росту</p>
                            </div>
                            <div className="learnMore--cards__card1--icons">
                                <h2><BsCheckLg /></h2>
                                <p>Курс по одолеванию страха потери</p>
                            </div>
                            <h2 className="learnMore--cards__card1--prace2">Цена: <b style={{
                                display: active4 === true ? "none":"block"
                            }}>62$</b> <span style={{
                                display: active4 === true ? "block" : "none"
                            }}>750$</span></h2>
                            <NavLink to={"/buy"}>
                            <button className="learnMore--cards__card1--btnFollow">Подписаться</button>
                            </NavLink>
                        </div>

                    </div>
                </div>
                <div className="learnMore--info">
                    <p>В <b>“Обычный”</b> пакет участия для само-развития включает в себя: </p>
                    <div className="learnMore--info__fraces">
                        <div className="learnMore--info__fraces--icon">
                            <h2><BsCheck2 /></h2>
                            <p>Все новые статьи</p>
                        </div>
                        <div className="learnMore--info__fraces--icon">
                            <h2><BsCheck2 /></h2>
                            <p>Все мастер классы по саморозвитию</p>
                        </div>
                        <div className="learnMore--info__fraces--icon">
                            <h2>{active2 ? <MdClose /> : <BsCheck2 />}</h2>
                            <p>Курс по чтению языка тела</p>
                        </div>
                        <div className="learnMore--info__fraces--icon">
                            <h2>{active2 ? <MdClose /> : <BsCheck2 />}</h2>
                            <p>Курс по накоплению средств с выполотой долгов</p>
                        </div>
                        <div className="learnMore--info__fraces--icon">
                            <h2>{active2 ? <MdClose /> : <BsCheck2 />}</h2>
                            <p>Курс по быстрому карьерному росту</p>
                        </div>
                        <div className="learnMore--info__fraces--icon">
                            <h2>{active2 ? <MdClose /> : <BsCheck2 />}</h2>
                            <p>Курс по одолеванию страха потери</p>
                        </div>
                    </div>
                </div>
                <div className="learnMore--plusPackag">
                    <h3>Плюсы пакета</h3>
                    <p>Выбрав этот пакет вы получаете возможность получать неогранниченное количество самых
                        эксклюзивных мастер классов, а также очень много наиполезнейших статей от самых
                        разных успешных людей чтобы получать ежедневные уроки чтобы улучшить жизнь и не
                        только</p>
                </div>
            </div>

            <Accardeon/>

        </div>);
};

export default LearnMore;