const path = require("path");
const express = require("express");
const hbs = require("hbs");

const forecast = require("./utils/forecast");

const app = express();
const port = process.env.PORT || 3000;

// Path to public directorey for express config
const publicPath = path.join(__dirname, "../public");

const viewPath = path.join(__dirname, "../components/views");

const partialsPath = path.join(__dirname, "../components/partials");

// Setup handlebars engine and views location
app.set("views", viewPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicPath));

app.get("", (req, res) => {
    res.render("index", {
      title: "Weather App",
      name: "Ferew"
    });
  });

app.get("/weather", (req, res) => {

  if (!req.query.address) {
    return res.send({
      error: "You must provide an address"
    });
  }

    forecast(req.query.address, (error,forecastData)=> {
      if (error) {
        return res.send(error)
      }

      res.send ({
        forecast : forecastData
      })
    });
      
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "Error !!",
    text: "Page Not Found!!"
  });
});

app.listen(port, () => {
  console.log("Server is up on port 3000.");
});
