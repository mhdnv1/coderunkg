import Example from '../Modal/Modal';
import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <nav className="header__nav">
                        <div className="logo">
                            <h1>code<span>run</span></h1>
                            <p>development</p>
                        </div>
                        <ul className="header__menu">
                            <li><Link to='/'>Главная</Link></li>
                            <li><Link to='/projects'>Наши проекты</Link></li>
                            <li><Link to='/services'>Услуги</Link></li>
                            <li><Link to='/about'>О нас</Link></li>
                           
                        </ul>
                        <Example/>
                        <div className="burger__menu">
                            <span></span>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Header;
