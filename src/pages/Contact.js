import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contacter</h1>
                    <ul>
                        <li>
                            <i className="fa fa-map-marker-alt"></i>
                            <span>Rouen</span>
                        </li>
                        <li>
                            <i className="fa fa-mobile-alt"></i>
                            <CopyToClipboard text="066225155">
                                <span
                                    className="clickInput" onClick={() => {
                                        alert('Téléphone copié !');
                                    }}> 06 66 22 51 55
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="fa fa-envelope"></i>
                            <CopyToClipboard text="demba.pro.76000@gmail.com">
                                <span
                                    className="clickInput" onClick={() => {
                                        alert('E-mail  copié !');
                                    }}> demba.pro.76000@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>

                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://github.com/" target="_blanck" rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/demba-mbow-43a303201/" target="_blanck" rel="noopener noreferrer">
                            <h4>Linkedin</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}; export default Contact;