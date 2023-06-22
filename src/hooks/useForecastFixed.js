import { useState } from 'react';
import axios from 'axios';
import getTodayForecast from '../helpers/getTodayForecast';
import getTodayDetailedForecast from '../helpers/getTodayDetailedForecast';
import getFutureForecast from '../helpers/getFutureForecast';

const api_url = 'https://www.metaweather.com/api/location';
const cors_url = 'https://f1-weather-app.herokuapp.com';
const request_url = `${cors_url}/${api_url}`;

const useForecastFixed = () => {
    const [forecast, setForecast] = useState(null);

    // Gets the 'Where On Earth' ID for the specified location which is used to request the weather data from the API
    const getWoeid = async location => {
        const { data } = await axios(`${request_url}/search`, { params: { query: location } });

        return data[0];
    };

    // Gets the weather data for the specified 'Where On Earth' ID found by the getWoeid method
    const getForecastData = async woeid => {
        const { data } = await axios(`${request_url}/${woeid}`);

        return data;
    };

    // 'consolidated_weather' contains all available weather information through the API for a specific day.
    // The methods extract and store the speciified relevant data from 'consolidated_weather' into constants.
    // These constants are then stored into the forecast constant created earlier in the useState.
    const gatherForecastData = data => {
        const today = getTodayForecast(data.consolidated_weather[0], data.title);
        const todayDetails = getTodayDetailedForecast(data.consolidated_weather[0]);
        const future = getFutureForecast(data.consolidated_weather);

        setForecast({ today, todayDetails, future });
    };

    // Gets weather data for a specified location
    const submitRequest = async location => {
        const response = await getWoeid(location);
        if (!response?.woeid) return;

        const data = await getForecastData(response.woeid);
        if (!data) return;

        gatherForecastData(data);
    };

    return {
        forecast,
        submitRequest,
    };
};

export default useForecastFixed;
