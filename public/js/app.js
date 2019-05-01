console.log("I'm Working");

const form = document.querySelector("button");
const search = document.querySelector("input");

const city = document.querySelector("#city-name");
const time = document.querySelector("#current-time");
const icon = document.querySelector("#weather-icon");

const temperature = document.querySelector("#temperature");
const temp_max = document.querySelector("#high-temp");
const temp_min = document.querySelector("#low");

const style = document.querySelector("#weather");

form.addEventListener("click", e => {
  e.preventDefault();

  console.log("I'm Clicked");

  const location = search.value;
  //   console.log(location);

  // messageOne.textContent = "Loading...";
  // messagetwo.textContent = "";

  fetch(`http://localhost:3000/weather?address=${location}`).then(response => {
    response.json().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        city.textContent = data.name + ", " + data.sys.country;
        icon.src = `http://openweathermap.org/img/w/${
          data.weather[0].icon
        }.png`;
        style.style.backgroundImage = `linear-gradient(to right bottom, #416b779a, #80bbc48a), url(./img/${
          data.weather[0].icon
        }.png)`;

        temperature.textContent = Math.round(data.main.temp);
        temp_min.textContent = Math.round(data.main.temp_min);
        temo_max.textContent = Math.round(data.main.temp_max);
      }
    });
  });
});
