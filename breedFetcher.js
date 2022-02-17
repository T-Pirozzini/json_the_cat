const breedName = process.argv[2];
const request = require("request");

const URL = `https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`;

request(URL, (error, response, body) => {
  //console.log('error:', error);
  //console.log('statusCode:', response && response.statusCode);
  //console.log('body:', body);
  const data = JSON.parse(body);
  //console.log(data);
  //console.log(typeof data);
  if (error === undefined) {
    console.log('error:', error);
    return;
  }
  if (!data[0]) {
    console.log("Breed not found.");
  } else {
    console.log(data[0].description);
  }
});

