import React from 'react';
import "./AboutUs.scss"
import Book1 from "./../../assets/img/logo.svg"

const AboutUs = () => {
    return (
        <div id="aboutUs">
            <div className="container">
                <div className="aboutUs">
                    <img src={Book1} alt="" className="aboutUs--bookBg1"/>
                    <h2>SELF DEVELOPING SCHOOL</h2>
                    <img src={Book1} alt="" className="aboutUs--book2"/>
                    <h4>“Само развитие лучше чем школьное обучение”</h4>
                    <p>Наша короная фраза, ведь эта платформа создавалась именно с этой целью. <br/>
                        Так как чтобы быть успешным в жизни не обязательно быть бакалавром, ведь <br/> столько богатых людей которые даже не ходили в университет. <br/>
                        A наш логотип прозрачный так как у нас все легко и понятно.</p>
                    <img src={Book1} alt="" className="aboutUs--bgBook"/>
                </div>
            </div>
            
        </div>
    );
};

export default AboutUs;