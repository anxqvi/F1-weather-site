import React from 'react';

// Template for the detailed weather information that is displayed on the card
const TodayDetailsKey = ({ name, value, unit }) => (
    <div className="d-flex justify-content-between">
        <p className="mb-0 font-weight-bolder text-uppercase">{name}</p>
        <p className="mb-0">
            {value} {unit}
        </p>
    </div>
);

export default TodayDetailsKey;
