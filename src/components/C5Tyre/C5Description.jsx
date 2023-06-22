import React from 'react';
import C5Tyre from './C5Asset/C5-tyre.png';
import styles from "./C5Description.module.css";

// Description for the C5 Tyre displayed under PageTyre
const C5Description = () => (
    <div className={`${styles.C5} position-relative`}>
        <img src={C5Tyre} alt="C5 Tyres" height={150} width={150}/>
        <br></br>
        <>C5, which stands for Compound 5, is the heir to the universally-popular hyper-soft: the fastest compound that
            Pirelli has ever made. This tire is suitable for all circuits that demand high levels of mechanical grip,
            but the trade-off for this extra speed and adhesion is a considerably shorter lifespan than the other tires
            in the range. It is not a qualifying tire, but it comes closest.</>
    </div>

);

export default C5Description;