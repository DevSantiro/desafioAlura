import React from 'react';
import { Navegacao } from './styles';

export const Navbar = () => {
  return (
    <Navegacao>
      <img src={window.location.origin + '/img/logo.png'} alt="" className="logo" />
      <input type="text" name="busca" id="busca" placeholder="Busque por algo" />
      <div className="navPerson">
        <img src={window.location.origin + '/img/myperson.png'} alt="" />
        <span>Rodrigo Santiago</span>
      </div>
    </Navegacao>
  );
}