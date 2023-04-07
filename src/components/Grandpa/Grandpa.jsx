import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';
export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);
const Grandpa = () => {
  const [money, setMoney] = useState(0);

  const ring = "diamond";
  return (
    <div className='grandpa'>
      <h2>Grandpa</h2>
      <p>Has Money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
      <RingContext.Provider value='golden Ring'>
     <section className='flex'>
        <Father ring = {ring}></Father>
        <Uncle></Uncle>
        <Aunty ring={ring}></Aunty>
      </section>
     </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * 1. Create a context.
 * 2. Crate a Provider and pass a Value
 * 3. UseContext to receive the value
*/