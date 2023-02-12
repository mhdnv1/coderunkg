import React from 'react';
import Header from './Hedaer/Header';
import Footer from './Footer/Footer';
import {Routes , Route} from 'react-router-dom'
import Home from '../Pages/Home/Home';
import Projects from '../Pages/Projects/Projects';
import Services from '../Pages/Services/Services';
import About from '../Pages/About/About';
import Contacts from '../Pages/Contacts/Contacts';

const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <main>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/projects' element={<Projects/>} />
                    <Route path='/services' element={<Services/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/contacts' element={<Contacts/>} />
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;
