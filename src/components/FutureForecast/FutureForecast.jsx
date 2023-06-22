import React from 'react';
import FutureForecastKey from '../FutureForecastKey';
import styles from './FutureForecast.module.css';

// Creates the small tile cards for future weather for the next 5 days
const FutureForecast = ({ days }) => (
    <ul className={`${styles.weekList} d-flex justify-content-between p-0`}>
        {days.map(day => (
            <FutureForecastKey {...day} key={day.weekday} />
        ))}
    </ul>
);

export default FutureForecast;
