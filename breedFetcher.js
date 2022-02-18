const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`;

  request(URL, (error, response, body) => {
    // console.log('error:', error);
    // console.log('statusCode:', response && response.statusCode);
    // console.log('body:', body);
    const data = JSON.parse(body);
    if (error === undefined) {
      callback(error, null);
      return;
    }
    if (!data[0]) {
      callback(null, "Breed not found.");
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };


