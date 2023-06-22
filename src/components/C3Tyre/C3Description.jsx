import React from 'react';
import C3Tyre from "./C3Assets/C3-tyre.png"
import styles from "./C3Description.module.css";

// Description for the C3 Tyre displayed under PageTyre
const C3Description = () => (
    <div className={`${styles.C3} position-relative`}>
        <img src={C3Tyre} alt="C3 Tyres" height={150} width={150}/>
        <br></br>
        <>C3, or Compound 3, strikes a very good balance between performance and durability, with the accent on performance.
            It is a very adaptable tire that can be used as the softest compound at a high-severity track as well
            as the hardest compound at a low-severity track or street circuit.
            It is one of the most commonly used compounds of all.</>
    </div>

);

export default C3Description;