import React from 'react';
import './homerequest.scss'

const HomeRequest = () => {
    return (
        <div className="homerequest">
            <div className="container">
               <div className="form">
               <form>
                    <h5>Оставьте заявку, и мы с вами свяжемся</h5>
                    <p>Оставьте контактные данные</p>
                    <input className="d-block; "  type="text" placeholder='Имя' /> <br/>
                    <input className="d-block; "  type="phone" placeholder='Телефон номер' /><br/>
                    <textarea  className="d-block; " placeholder='Cообщения' cols="22" rows="0"></textarea><br/>
                    <button className="btn d-block mx-auto">Отправить</button>
                </form>
               </div>
            </div>
        </div>
    );
}

export default HomeRequest;
