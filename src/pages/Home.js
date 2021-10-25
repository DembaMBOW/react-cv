import React from 'react';
import Navigation from '../components/Navigation';
 

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                  <h1>Demba Mbow</h1>
                  <h2>Developpeur web </h2>
                  <div className="pdf">
                     <a href="./media/CV-alternance.pdf" target="_blank">Télécharger CV</a>
                  </div>
                 </div>
            </div>
        </div>
    );
};

export default Home;