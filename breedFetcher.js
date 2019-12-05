const request = require('request');
const _ = require('lodash');

const fetchBreedDescription = function(breedName, callback) {

  if (_.isEmpty(breedName)) {
    console.log('You\'ve entered an empty string');
  } else {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
      let desc;
      if (!error) {
        const data = JSON.parse(body);
        desc = data.length > 0 ? data[0].description.trim() : `Search result yielded no answers`;
        callback(error, desc);
      } else {
        callback(error, desc);
      }
    });
  }
};

module.exports = { fetchBreedDescription };