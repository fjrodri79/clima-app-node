const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=ce39221bccbd940be290836b0f5c72f4`);

    return resp.data.main.temp;
}


module.exports = {

    getClima
}