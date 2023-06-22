import React from 'react';
import C1Tyre from './C1Asset/C1-tyre.png';
import styles from "./TyreDescription.module.css";

// Description for the C1 Tyre displayed under PageTyre
const TyreDescription = () => (
    <div className={`${styles.C} position-relative`}>
        <img src={C1Tyre} alt="C1 Tyres" height={150} width={150}/>
        <br></br>
        <>C1 stands for Compound 1, and it is the hardest tire in the 2021 Pirelli range.
            It is designed for circuits that put the highest energy loadings through the tires,
            which will typically feature fast corners, abrasive surfaces, or high ambient temperatures.
            The compound takes longer to warm up but offers maximum durability and provides low degradation.</>
    </div>

);

export default TyreDescription;