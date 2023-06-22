import { useState } from 'react';
import axios from 'axios';

const request_url = 'http://ergast.com/api/f1/current.Json';
const useCity = () => {
    const [city, setCity] = useState(null);

    // Gets the city based on the position of the race on the official F1 race schedule for the current year
    const getCity = race => {
        axios.get(request_url).then(
            (response) => {
                setCity(response.data.MRData.RaceTable.Races[race].Circuit.Location.locality);
            }
        );
        return city;
    };

    return {
        getCity,
    };

};

export default useCity;