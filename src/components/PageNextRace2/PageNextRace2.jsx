import React, { Fragment } from 'react';
import Forecast from '../Forecast';
import useCity from '../../hooks/useCity';
import useForecastFixed from '../../hooks/useForecastFixed';

// Third page that displays the present weather in real time for the city selected from the ongoing F1 2022 schedule that is after the race on PageNextRace1
const PageNextRace2 = () => {
    const {forecast, submitRequest } = useForecastFixed();
    const {getCity} = useCity();
    const city = getCity(19);
    submitRequest(city);

    return (
        <Fragment>
            <br></br>
            {forecast && <Forecast forecast={forecast} />}
        </Fragment>
    );
};

export default PageNextRace2;
