import React from 'react';

import secure from '../assets/secure.jpeg';
import rapide from '../assets/rapid.jpeg';
import phone from '../assets/phone.jpeg';

import '../styles/component/Section.scss';


const Section = () => {
  return (
    <section>
      <div className="container">
 <div className="firstImg">
        
        <h1>Activation Transcash</h1>
      </div>
        <div className="phone">
        <img height="200px"  src={secure} alt="" />
      </div>
      
      <h2>Activation de vos recharges</h2>
      <p >
        Transcash Activation est utilisable en ligne uniquement , il vous permet
        d'effectuer tous vos achats e-commerce en toute sécurité. La fiabilité
        de votre code de recharge est donc importante. Avec le système
        2FS-Security vos recharges sont donc activé enfin qu'elles soient
        utilisables en ligne.
      </p>
      <p>
        Cette étape cruciale d'activation se fait en utilisation de la
        technologie la plus récente connue sur SSL permettant de garantir la
        sécurité et fiabilité de vos recharges en toute légitimité.
      </p>
        <div className="display">
        <div>
          <h3>Rapide</h3>
          <img height={230} src={rapide} alt="" />
        </div>
        <div>
          <h3>Fiable</h3>
          <img height={230} src={phone} alt="" />
        </div>

        <div>
          <h3>Securiser</h3>
          <img height={230} src={secure} alt="" />
        </div>
      </div>
           <p >
        Le module TRANS-CASH ACTIVATION est un moyen d'activation prépayé fiable
        sur internet, avec une recharge, qui vous accompagne au quotidien dans
        vos dépenses. Commander le en ligne ou achetez vos recharges de paiement
        dans un bureau de tabac et profitez de tous ses avantages qui
        simplifieront la vie.
      </p>
      <hr></hr>
        <div id="services" className="siteRecharge">
        <p >
            Le site TRANSCASH-VALIDATION est émis par CARD-coopération sous une licence d'authentification internationale Incorporated.
          
            <p>
 Le service est
          autorisé par la conduite financière autorité en vertu
          des règlements de 2011 sur la monnaie électronique pour l'émission de
          monnaie électronique et fourniture de services électronique et
          fourniture de services de paiement. Siège Social :5ᵉ étage, Langham
          Housse, 302-308 Regent Steet, Londres, W1B 3AT.
            </p> 
        </p>
      </div>
      
      
      </div>
       
   </section>
  );
};

export default Section;