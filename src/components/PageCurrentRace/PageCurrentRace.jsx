import React, { Fragment } from 'react';
import HeaderCurrentRace from '../HeaderCurrentRace';
import Forecast from '../Forecast';
import useCity from '../../hooks/useCity';
import useForecastFixed from '../../hooks/useForecastFixed';

// First page that displays the present weather in real time for the city selected from the ongoing F1 2022 schedule
const PageCurrentRace = () => {
    const {forecast, submitRequest } = useForecastFixed();
    const {getCity} = useCity();
    const city = getCity(4);
    submitRequest(city);

    return (
        <Fragment>
            <HeaderCurrentRace />
            {forecast && <Forecast forecast={forecast} />}
        </Fragment>
    );
};

export default PageCurrentRace;
