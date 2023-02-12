import React from 'react';
import './standarts.scss'
import { Link } from 'react-router-dom';

const Standarts = () => {
    return (
        <div className="standarts">
            <div className="container">
                <div className="cards">
                    <div className="standart__card">
                        <h3>Высокие стандарты <br/>
                            разработки</h3>
                        <p>Высокие стандарты личной безопасности, доступность услуг образования и здравоохранения требуемого качества, необходимый уровень обеспеченности жильем, доступ к культурным благам и обеспечение экологической безопасности.</p>
                        <Link to='/contacts'>Подробнее о компании</Link>
                    </div>
                    <div className="standart__card">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Standarts;
