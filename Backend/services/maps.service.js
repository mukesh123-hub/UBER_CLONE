
const axios = require('axios');
const captainModel = require('../models/captain.model');

module.exports.getAddressCoordinates = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.status !== 'OK') {
            throw new Error('Invalid response from Google Maps API');
        }

        const location = data.results[0].geometry.location;
        return location;
    } catch (err) {
        console.error("Google Maps API error:", err.response?.data || err.message);
        throw err;
    }
};


module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error('Origin and destination are required');
  }

  const apiKey = process.env.GOOGLE_MAPS_API;

 const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;
    

  try {
    const response = await axios.get(url);

    if (response.data.status !== 'OK') {
      throw new Error('Unable to fetch distance and timing');
    }

    const element = response.data.rows[0].elements[0];

    if (element.status === 'ZERO_RESULTS') {
      throw new Error('No routes found between origin and destination');
    }

    return {
      distance: element.distance.value,
      duration: element.duration.value,
    };
  } catch (err) {
    console.error('Error in getDistanceTime:', err.message);
    throw err;
  }
};



module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('Input is required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;

    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);

        if (response.data.status === 'OK') {
            return response.data.predictions;
        } else {
            throw new Error(`Google API Error: ${response.data.status}`);
        }
    } catch (err) {
        console.error("Google Maps Autocomplete error:", err.response?.data || err.message);
        throw err;
    }
};
module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {

    // radius in km


    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [ [ ltd, lng ], radius / 6371 ]
            }
        }
    });

    return captains;
  }
