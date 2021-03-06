const { fetchBreedDescription } = require('./breedFetcher');

const cmdArgs = process.argv.splice(2);
const breedName = cmdArgs[0];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});