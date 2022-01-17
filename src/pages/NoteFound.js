import React from 'react';
import { NavLink } from 'react-router-dom';


const NoteFound = () => {
    return (
        <div className="NoteFound">
            <div className="notFoundContent">
                <h3>Désoler cette page n'existe pas !</h3>
                <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                    <span> Accueil</span>
                </NavLink>
            </div>
        </div>

    );
};

export default NoteFound;