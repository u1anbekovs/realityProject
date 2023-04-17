import React from 'react';
import "./FollowCourse.scss"
import Book from "./../../../assets/img/logo.svg"
const FollowCourse = () => {
    return (
        <div id="followInfo">
            <div className="container">
                <div className="followIn">
                    <div className="followIn--titles">
                        <div className="followIn--titles__line"></div>
                        <h1>Регистрируйтесь на курс, стройте эффективные команды и пусть удача сопутствует вам на этом пути!</h1>
                    </div>
                    <ul className="followIn--ul">
                        <li>* - материалы включают уроки и задания. И в конце чтобы получить сертификат вам потребуется список заданий которые вы выполнили и тест с коуч-тренером который вы пройдете в зуме для получения сертификата. Получить к ним доступ можно только при обучении с коуч-тренером.</li>
                    </ul>
                    <img src={Book} alt="No image" className="followIn--img1"/>
                    <img src={Book} alt="No image" className="followIn--img2"/>
                </div>
            </div>

        </div>
    );
};

export default FollowCourse;