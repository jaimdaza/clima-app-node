const lugar = require('./openWeather/openWeather');
const argv = require('./config/yargs').argv;





const loc = argv.direccion;

lugar.getWeather(loc).then(data => {
    console.log(`El clima actual de ${argv.direccion} es de ${data.tempActual}°, la temperatura MIN de: ${data.tempMin}°, y MAX de: ${data.tempMax}°`);
}).catch(e => {
    console.log(e);
});