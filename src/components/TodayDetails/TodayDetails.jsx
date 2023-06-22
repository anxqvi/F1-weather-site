import React from 'react';
import TodayDetailsKey from '../TodayDetailsKey';

// Displays detailed weather information for the present day formatted by TodayDetailsKey
const TodayDetails = ({ forecast }) => (
    <div className="mt-4 mt-md-2">
        <div className="d-flex flex-column mb-2">
            {forecast.map(item => (
                <TodayDetailsKey {...item} key={item.name} />
            ))}
        </div>
    </div>
);

export default TodayDetails;
