const request = require('request');

// let getCat = (breed) => {
//   fetchBreedDescription(breed)
// };

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    let data;
    if (!JSON.parse(body)[0]) error += " missing breed";
    else {
      data = JSON.parse(body)[0].description;
    }
    callback(error, data);
  });
};

// const cmdArgs = process.argv.splice(2);
// const breed = cmdArgs[0];
// getCat(breed);

module.exports = { fetchBreedDescription };