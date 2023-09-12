import React, { useEffect, useState } from 'react';
import Countrie from '../Countrie/Countrie';
import './countries.css'
const Countries = () => {
  const [countries, setcountries] = useState([]);

  const [markbtn, setmarkbtn] = useState([]);
  const Markhandel = (countrie) => {
    // console.log(countrie)
    const newmark = [...markbtn, countrie];
    setmarkbtn(newmark)
  }
  const [flag, setflag] = useState([]);
  const ClikForflag = countrie => {
    const newvalu=[...flag,countrie]
    // console.log(countrie)
    setflag(newvalu)
  }
  const [areaa, setareaa] = useState([])
  const Areahandel = (arrr) => {
    const createarr=[...areaa,arrr]
    setareaa(createarr)
  }

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=>setcountries(data))
  }, [])
  
  return (
    <div>
      <h2>country: {countries.length}</h2>
      {
        areaa.map((a, id) => <h3 key={id}>{a?.area}</h3>)
      }
      <div>
        <h3>visited country: {markbtn.length}</h3>
        <ul>
          {
            markbtn.map(countrie => <li key={countrie.ccn3}>{countrie.name.common}</li>)
          }
        </ul>
      </div>
      {
      flag.map((f,id)=><img className='imgsize' key={id} src={f.flags.png} alt="" />)
      }
      
      <div className='countrys-container'>
          {
        countries.map(countrie=><Countrie Areahandel={Areahandel} ClikForflag={ClikForflag} Markhandel={Markhandel} key={countrie.ccn3} countrie={countrie}></Countrie>)
      }
      </div>
    </div>
  );
};

export default Countries;