const request = require('request');

let getCat = (breed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      console.log(error);
    }
    const data = JSON.parse(body);

    if (data[0]) {
      console.log(data);
    } else {
      console.log("data not found");
    }
    // console.log(typeof data);

  });
};

const cmdArgs = process.argv.splice(2);
const breed = cmdArgs[0];
getCat(breed);