// Specifies the details to be displayed as part of the detailed weather information section used by TodayDetails
const todayForecast = data => [
    {
        name: 'predictability',
        value: data.predictability,
        unit: '%',
    },
    {
        name: 'humidity',
        value: data.humidity,
        unit: '%',
    },
    {
        name: 'wind',
        value: Math.round(data.wind_speed),
        unit: 'km/h',
    },
    {
        name: 'wind direction',
        value: data.wind_direction_compass,
        unit: 'Compass Point',
    },
    {
        name: 'air pressure',
        value: data.air_pressure,
        unit: 'mb',
    },
    {
        name: 'max temp',
        value: Math.round(data.max_temp),
        unit: '°C',
    },
    {
        name: 'min temp',
        value: Math.round(data.min_temp),
        unit: '°C',
    },
    {
        name: 'track temp',
        value: Math.round(data.the_temp + data.wind_direction % 2),
        unit: '°C',
    },
];

export default todayForecast;
