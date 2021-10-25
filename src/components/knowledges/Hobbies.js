import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>La course</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-basketball-ball"></i>
                    <span>Basket-ball</span>
                </li>
                <li className="hobby">
                 <i className="fas fa-futbol"></i>   
                 <span>FootBall</span>
                </li>
                <li className="hobby">
                 <i className="fas fa-music"></i>   
                 <span>Musique</span>
                </li>
                <li className="hobby">
                 <i className="fas fa-running"></i>   
                 <span>FootBall</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;