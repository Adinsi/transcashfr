import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/component/Navigation.scss';

const Navigation = () => {
    const [show, setShow] = useState(false);
    
  const handleclick = () => {
    setShow(!show);
    };
    const scrolling = () => {
    setShow(false);
  };

  window.addEventListener("scroll", scrolling);

    return (
        <nav>
            <div className="container">
 <div onClick={handleclick}  className="menuBurger">
   <i className={show ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
            </div>
            <div className={show ? "links stick" : "links"}>
                <ul>
                    <li>
<NavLink to='/accueil'>
                    Accueil
                </NavLink> 
                    </li>
                    <li>
<NavLink to='/activation'>
                    Activation
                </NavLink>
                    </li>
                    <li>
 <NavLink to='/mentions'>
                   Mentions
                </NavLink> 
                    </li>
                </ul>
         
                </div>
                <div className="btn">
                    <NavLink  to='/activation'>
                     <button>Activation</button>
                    </NavLink>
            </div>
            </div>
           
       </nav>
    );
};

export default Navigation;