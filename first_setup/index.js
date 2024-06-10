const axios = require('axios').default;
// console.log(axios);
// axios.get('https://www.omdbapi.com/?t=harry&apikey=dec4ad0e')
//     .then((res) => {
//         console.log(res.data);
//     });

async function fetch() {
    const response = await axios.get(
        "https://www.omdbapi.com/?t=harry&apikey=dec4ad0e"
    );

    console.log(response.data)
}
fetch();
