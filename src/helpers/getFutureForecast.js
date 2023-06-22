import moment from 'moment';

const getWeekday = date => moment(date).format('dddd').substring(0, 3);

// Gets the basic information and image icon to be displayed by FutureForecast
const getFutureForecast = data =>
    data.slice(1).map(day => ({
        imgUrl: day.weather_state_abbr,
        temperature: Math.round(day.max_temp),
        weekday: getWeekday(day.applicable_date),
    }));

export default getFutureForecast;
