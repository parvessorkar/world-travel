import React, { useState } from 'react';
import './countrie.css'

const Countrie = ({countrie,Markhandel,ClikForflag,Areahandel}) => {
  const {name,flags,area,population,cca3} = countrie;
  // console.log(Markhandel)
  const [visite, setvisite] = useState(false);
  const ClickHandaler = () => {
    setvisite(!visite)
  }
  return (
    <div className={`country ${visite &&'change'}`}>
      <img src={flags.png} alt="" />
      <h4>name: {name?.common}</h4>
      <p>population: {population}</p>
      <p>area: {area}</p>
      <p>code: {cca3}</p>
      <button onClick={ClickHandaler}>{visite?'visited':'going'}</button>
      {visite ? 'you have visited' : 'i want to visit'}
      <button onClick={() => Markhandel(countrie)}>mark</button>
      <br />
      <button onClick={() => ClikForflag(countrie)}>add flag</button>
      <button onClick={()=>Areahandel(countrie)}>are</button>
    </div>
  );
};

export default Countrie;