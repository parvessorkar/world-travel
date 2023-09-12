import React, { useEffect, useState } from 'react';
import Countrie from '../Countrie/Countrie';
import './countries.css'
const Countries = () => {
  const [countries, setcountries] = useState([]);

  const [markbtn, setmarkbtn] = useState([]);
  const Markhandel = (countrie) => {
    console.log(countrie)
    const newmark = [...markbtn, countrie];
    setmarkbtn(newmark)
  }

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=>setcountries(data))
  }, [])
  
  return (
    <div>
      <h2>country: {countries.length}</h2>
      <div>
        <h3>visited country: {markbtn.length}</h3>
        <ul>
          {
            markbtn.map(countrie => <li key={countrie.ccn3}>{countrie.name.common}</li>)
          }
        </ul>
      </div>
      
      <div className='countrys-container'>
          {
        countries.map(countrie=><Countrie Markhandel={Markhandel} key={countrie.ccn3} countrie={countrie}></Countrie>)
      }
      </div>
    </div>
  );
};

export default Countries;