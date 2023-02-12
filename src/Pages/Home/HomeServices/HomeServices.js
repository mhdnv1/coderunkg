import React from 'react';
import './homeservices.scss'
import { MdPhoneAndroid , MdPerson , MdOutlineSettingsSystemDaydream} from 'react-icons/md';
import { AiFillChrome } from 'react-icons/ai';


const HomeServices = () => {
    return (
        <div className="homeservices">
            <div className="container">
                <h1>
                    <MdPhoneAndroid className='icons' />
                    Мы создаем мобильные приложения <br />
                    для крупных корпораций
                </h1>
                <p>Разработка приложений для мобильных устройств — это процесс, при котором приложения разрабатываются для небольших портативных устройств, таких, как КПК, смартфоны или сотовые телефоны.</p>
                <div className="services__cards">
                    <div className="card">
                       
                        <h4> <AiFillChrome className='icons' />Создание сайтов</h4>
                        <p>Веб-разработка — процесс создания веб-сайта или веб-приложения. Основными этапами процесса являются веб-дизайн, вёрстка страниц, программирование на стороне клиента и сервера, а также конфигурирование веб-сервера.
                        </p>
                    </div>
                    <div className="card">
                        <h4><MdOutlineSettingsSystemDaydream className='icons' />CRM-система</h4>
                        <p>CRM - это управление взаимоотношениями с клиентами. Проще говоря, это инструмент для коммуникаций в бизнесе, их организации и оптимизации. С помощью СРМ компании стимулируют продажи, повышают лояльность клиентов, обеспечивают привлечение новых клиентов.
                        </p>
                    </div>
                    <div className="card">
                        <h4><MdPerson className='icons' />Индивидуальный обучения IT </h4>
                        <p>
                        Индивидуальное обучение – форма, модель организации учебного процесса, при которой: учитель взаимодействует лишь с одним учеником; один учащийся взаимодействует лишь со средствами обучения (книги, компьютер и т. п.).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeServices;
