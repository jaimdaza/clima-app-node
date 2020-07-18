/**
 * Api consumo de estado del tiempo
 * 'df28b8945435572c457b7b98e7ac21eb'
 * */
const axios = require('axios');




const apiKey;

const getWeather = async(city) => {
    const loc = encodeURI(city);
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}&units=metric`);
    if (respuesta.data.cod !== 200) {
        throw new Error(`No hay resultados para ${city}`);
    }
    const direccion = respuesta.data.name;
    const tempActual = respuesta.data.main.temp;
    const tempMin = respuesta.data.main.temp_min;
    const tempMax = respuesta.data.main.temp_max;

    return {
        direccion,
        tempActual,
        tempMin,
        tempMax
    }

};

module.exports = {
    getWeather
}