import React from 'react';
import '../styles/component/Footer.scss';
import card  from '../assets/visa.jpeg'
import { NavLink } from 'react-router-dom';




const Footer = () => {
    return (
      <footer>
        <div className="container">
          <div className="containerFirst">
<div className="visacardElement">
          <img src={card}   alt='' />
            </div>
           
              <hr></hr>
          </div>

        
          
          <div className="containerSecond">
            <div className="aide">
              <h3>Besoin d'aide ?</h3>
              <p><NavLink to="/mentions">
                Centre d'aide
              </NavLink></p>
              <p><NavLink to="/mentions">
               Historique d'activation
              </NavLink></p>
              <p><NavLink to="/mentions">
                Politique de confidenlité
              </NavLink></p>
              <p><NavLink to="/mentions">
                Politique de cookie
              </NavLink></p>
            </div>
            <div className="savoirplus">
              <h3>En savoir plus</h3>
              <p><NavLink to="/mentions">
              Mentions légales
              </NavLink></p>
              <p><NavLink to="/mentions">
              A propos de transcash
              </NavLink></p>
              <p><NavLink to="/mentions">
                Magazine transcash
              </NavLink></p>
            </div>
            <div className="media">
              <h3>Restez  avec nous !</h3>
              <p><i className="fab fa-twitter"></i><NavLink to="/mentions">
        Twitter
              </NavLink></p>
              <p>  <i className="fab fa-linkedin"></i><NavLink to="/mentions">
               Instagram
              </NavLink></p>
            </div>
          </div>
        </div>
        <h4>Nous utilisons des cookies pour vous offir une meilleure expérience de navigation. Pour en savoir plus consultez notre politique de cookies</h4>


      </footer>
    );
};

export default Footer;