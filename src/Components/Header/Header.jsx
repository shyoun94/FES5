import React from 'react';
import logo from '../../img/title.png'
import './HeaderStyle.css'
function Header() {
  return (
    <header className = "header-wrapper">
      <img className = "logo" src={logo} alt="1만시간의법칙 로고"/>
      
    </header>
  );
}

export default Header;