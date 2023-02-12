import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineMail , AiOutlineInstagram,AiOutlineFacebook} from 'react-icons/ai'
import {BsTelephoneInbound} from 'react-icons/bs'
import {BiMap} from 'react-icons/bi'
import {FaTiktok, FaTelegramPlane, FaWhatsapp} from 'react-icons/fa'
import './footer.scss'

const Footer = () => {
    return (
       <footer>
           <div className="container">
            <nav className="footer__nav">
                <ul>
                    <li>Контактная информация</li>
                    <li><AiOutlineMail className='icons'/><a href="mailto:coderunkg@gmail.com">coderunkg@gmail.com</a></li>
                    <li><BsTelephoneInbound className='icons'/><a href="tel:+996990000935">+996 990-00-09-35</a></li>
                    <li><BiMap className='icons'/>ТЦ Рамазан , Масалиева 38</li>
                </ul>
                <ul>
                    <li>Основные ссылки</li>
                    <li><Link to='/'>Главная</Link></li>
                    <li><Link to='/projects'>Наши проекты</Link></li>
                    <li><Link to='/services'>Наши услуги</Link></li>
                    <li><Link to='/about'>О нас</Link></li>
                    {/* <li><Link to='/contacts'>Контакты</Link></li> */}
                </ul>
                <ul>
                    <li>Социальные сети</li>
                    <li><AiOutlineInstagram className='icons'/><a href="https://www.instagram.com/accounts/onetap/?next=%2F">Instagram</a></li>
                    <li><AiOutlineFacebook className='icons'/><a href="https://www.facebook.com/profile.php?id=100089273524222">Facebook</a></li>
                    <li><FaTiktok className='icons'/><a href="www.tiktok.com/@coderun.kg">Tiktok</a></li>
                    <li><FaTelegramPlane className='icons'/><a href="https://t.me/coderunkg">Telegram</a></li>
                    <li><FaWhatsapp className='icons'/><a href="https://wa.me/+996990000935">WhatsApp</a></li>
                </ul>
            </nav>
            <p>(c) <a href="mailto:coderunkg@gmail.com">coderunkg@gmail.com</a> . Все права защищены.</p>
           </div>
       </footer>
    );
}

export default Footer;
