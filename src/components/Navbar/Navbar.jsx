import React from 'react';
import { Navegacao } from './styles';

export const Navbar = () => {
  return (
    <Navegacao>
      <img src={window.location.origin + '/img/logo.png'} alt="" style={{width: "8rem", height: "2rem"}} />
      <input type="text" name="busca" id="busca" placeholder="Busque por algo" style={{width: "50rem", height: "2rem", paddingLeft: "0.8rem", color: "#FFFFFF", background: "rgba(255, 255, 255, 0.16)", borderRadius: "0.4rem"}}/>
      <div style={{display: "flex", flexDirection: "row", textAlign: "center", alignItems: "flex-start"}} >
        <img src={window.location.origin + '/img/myperson.png'} alt="" style={{width: "2rem", height: "2rem", borderRadius: "1rem"}} />
        <span style={{marginTop: "0.5rem", color: "#FFFFFF"}}>Rodrigo Santiago</span>
      </div>
    </Navegacao>
  );
}