import React, { Fragment } from 'react';
import HeaderNextRaces from '../HeaderNextRaces';
import Forecast from '../Forecast';
import useCity from '../../hooks/useCity';
import useForecastFixed from '../../hooks/useForecastFixed';

// Second page that displays the present weather in real time for the city selected from the ongoing F1 2022 schedule that is after the race on PageCurrentRace
const PageNextRace1 = () => {
    const {forecast, submitRequest } = useForecastFixed();
    const {getCity} = useCity();
    const city = getCity(18);
    submitRequest(city);

    return (
        <Fragment>
            <HeaderNextRaces />
            {forecast && <Forecast forecast={forecast} />}
        </Fragment>
    );
};



export default PageNextRace1;
