import { UI } from "./ui.js";
import { Weather } from "./weather";
import { Storage } from "./storage";

import "../css/style.css";

const ui = new UI();
const storage = new Storage();

//get stored data
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);

//weather.changelocation("Miami");
document.addEventListener("DOMContentLoaded", getWeather);

//Change location event
document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("w-city").value;
  weather.changeLocation(city);
  // Set location in LS
  storage.setLocationData(city);
  // get and display weather
  getWeather();
  //close the modal
  $("#locModal").modal("hide");
  window.location.reload();
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      // const [mainWeather] = results;
      // console.log(results);
      if (results.message == "city not found") {
        ui.showAlert(results);
      } else {
        ui.paint(results);
      }
    })
    .catch(err => console.log(err.message));
}
