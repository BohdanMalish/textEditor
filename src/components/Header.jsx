import React from 'react';
import '../components/Header.css';
import Cart from './Cart';
const Header = () => {
 
    return (
       <div className="headerContainer">
           <div className="lineContainer">
           <div className="headerElement Home">Home</div>
           <div className="headerElement">Products</div>
           <div className="headerElement">Discounts</div></div>
           <div><Cart></Cart></div>
       </div>
    );
}
export default Header;