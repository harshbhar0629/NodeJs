const axios = require('axios').default;
// console.log(axios);
axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=dec4ad0e')
    .then((res) => {
        console.log(res);
    });