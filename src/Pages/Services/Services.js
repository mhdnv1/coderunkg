import React from 'react';
import HomeServices from '../Home/HomeServices/HomeServices';
import {TbSettingsAutomation} from 'react-icons/tb'
import {BiLoader, BiBot} from 'react-icons/bi'
import './services.scss'
import '../Home/HomeServices/homeservices.scss'

const Services = () => {
    return (
        <div className="services">
             <div className="services__banner">
                <div className="banner">
                    <p>Передовая IT студия</p>
                    <h1>Наши IT-услуги</h1>
                </div>
            </div> 
            <HomeServices/>
            <div className="container">
            <div className="services__cards">
                    <div className="card">
                       
                        <h4> <BiLoader className='icons' />SEO оптимизация</h4>
                        <p>К работам по SEO-оптимизации (поисковому продвижению) относят: анализ алгоритмов ранжирования поисковых систем, для выявления ключевых факторов ранжирования, отслеживание нововведений поисковиков; анализ текущего спроса (статистики поисковых запросов, заходов на сайты в тематике);

                        </p>
                    </div>
                    <div className="card">
                        <h4><BiBot className='icons' />Telegram bot</h4>
                        <p>Само слово «бот» представляет собой сокращение от привычного «робот». По большому счету, именно телеграм-бот как раз им и является. Эти специальные аккаунты, которые создаются автоматически, дают пользователям возможность выполнять разные задачи посредством мессенджера
                        </p>
                    </div>
                    <div className="card">
                        <h4><TbSettingsAutomation className='icons' />Автоматизация </h4>
                        <p>
                        Автоматизация — применение технических средств, экономико-математических методов и систем управления, освобождающих человека частично или полностью от непосредственного участия в процессах получения, преобразования, передачи и использования энергии, материалов или информации.
                        </p>
                    </div>
                </div>
            </div>
        </div>
       
    );
}

export default Services;
