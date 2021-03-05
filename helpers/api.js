const axios = require('axios');

const CovidNews = ()=> {
    return axios
    .get('http://newsapi.org/v2/everything?q=covid&from=2021-03-04&to=2021-03-04&sortBy=popularity&apiKey=1a59ee3dcc8843718c9f4b3226d9f95e')
    .then(response =>{
        const covidNews = response.data
        return covidNews 
    })
    .catch(err =>{
        return(err);
    })
}


const Country = () =>{
    return axios
    .get('https://corona.lmao.ninja/v2/countries?yesterday=&sort=')
    .then(response =>{
        const covidNews = response.data
        return covidNews 
    })
    .catch(err =>{
        return(err);
    })
}

const CovidTravel = () =>{
    return axios
    .get('https://www.trackcorona.live/api/travel')
    .then(response =>{
        const covidNews = response.data.data
        return covidNews 
    })
    .catch(err =>{
        return(err);
    })
}

module.exports = {
    CovidNews,
    Country,
    CovidTravel
}
