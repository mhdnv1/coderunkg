import React from 'react';
import img from '../../../Asets/Home/projects/1.png'
import './homeprojects.scss'

const HomeProjects = () => {
    return (
        <div className="homeprojects">
            <div className="container">
                <h3>Наши проекты</h3>
                <p>Мы здесь, чтобы помочь каждому вашему бизнесу</p>
                <p>Мы ориентируемся на ИТ-решения, чтобы вы могли сосредоточиться на своем бизнесе. Посмотрите, что мы можем сделать для вас сегодня!</p>
                <div className="cards">
                    <div className="homeprojects__card">
                        <img src={img} alt="" />
                        <h5><a href='https://sarymogol.com'>Sarymogol</a></h5>               
                    </div>
                    <div className="homeprojects__card">
                        <img src={img} alt="" />
                        <h5><a href='https://sarymogol.com'>Sarymogol</a></h5>               
                    </div>
                    <div className="homeprojects__card">
                        <img src={img} alt="" />
                        <h5><a href='https://sarymogol.com'>Sarymogol</a></h5>               

                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeProjects;
