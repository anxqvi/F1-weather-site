import React from 'react';
import styles from './FutureForecastKey.module.css';

const imgUrlBase = 'https://www.metaweather.com/static/';

// Template for one small tile card that displays the future weather for one of the next 5 days
const FutureForecastKey = ({ weekday, temperature, imgUrl }) => (
    <li className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}>
        <img className="mb-2" width="30" src={`${imgUrlBase}img/weather/${imgUrl}.svg`} alt="" />
        <span className="mb-2">{weekday}</span>
        <span className="font-weight-bold">{temperature}&deg;</span>
    </li>
);

export default FutureForecastKey;
