const axios = require('axios');

const CovidNews = (req, res, next) =>{
    axios({
        method : 'get',
        url : 'http://newsapi.org/v2/everything?q=covid&from=2021-03-04&to=2021-03-04&sortBy=popularity&apiKey=1a59ee3dcc8843718c9f4b3226d9f95e' 
    })
    .then(response =>{
        console.log(response.data);
    })
    .catch(err =>{
        console.log(err);
    })
}


const Country = (req, res, next) =>{
    axios({
        method : 'get',
        url : 'https://corona.lmao.ninja/v2/countries?yesterday=&sort=' 
    })
    .then(response =>{
        for(let i = 0; i < response.data.length; i++ ){
            console.log(response.data[i]);
            // console.log(response.data[i].country);
            // console.log(response.data[i].cases);
            // console.log(response.data[i].todayCases);
            // console.log(response.data[i].deaths);
            // console.log(response.data[i].todayDeaths);
        }
    })
    .catch(err =>{
        console.log(err);
    })
}




module.exports = {
    CovidNews,
    Country
}