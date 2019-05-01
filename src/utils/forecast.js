const request = require("request");

const forecast = (address, callback) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&APPID=30c55c739fa6787f35f27530e496c731&units=Imperial`;

  request({ url, json: true }, (error, { body }) => {

    if (error) {
        
      callback("Unable to connect to the weather service!!", undefined);

    } else if (body.error === "404") {
      callback("Unable to find location!!");
    } else {
      callback(body);
    }
  });
};

module.exports = forecast;


