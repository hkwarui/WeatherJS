class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.icon_details = document.getElementById("icon_details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.pressure = document.getElementById("w-pressure");
    this.clouds = document.getElementById("w-clouds");
    this.wind = document.getElementById("w-wind");
    this.flag = document.getElementById("w-flag");
    this.details = document.getElementById("w-details");
  }

  paint(mainweather) {
    //Function to change deg to compass direction
    function degToCompass(num) {
      const val = Math.floor(num / 22.5 + 0.5);
      const arr = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "SSE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW"
      ];
      return arr[val % 16];
    }
    const icon_url = `http://openweathermap.org/img/wn/${mainweather.weather[0].icon}@2x.png`;
    const windDir = degToCompass(mainweather.wind.deg);
    const flag_url = `https://www.countryflags.io/${mainweather.sys.country}/shiny/64.png`;
    const real_temp = Math.round(mainweather.main.temp - 273).toFixed(1);
    this.icon.setAttribute("src", icon_url);
    this.flag.setAttribute("src", flag_url);
    this.humidity.textContent = `Relative humidity: ${mainweather.main.humidity}`;
    this.wind.textContent = `Wind from ${windDir} @  ${mainweather.wind.speed}m/s`;
    this.clouds.textContent = `Clouds : ${mainweather.clouds.all}%`;
    this.pressure.textContent = `Pressure:  ${mainweather.main.pressure} hpa`;
    this.location.textContent = `${mainweather.name},${mainweather.sys.country}`;
    this.desc.textContent = mainweather.weather[0].description;
    this.string.textContent = `${real_temp} °C`;
  }

  showAlert(info) {
    this.location.classList.add("errorClass");
    this.location.textContent = `${info.message.toUpperCase()}`;
    this.icon.setAttribute("src");
    this.flag.setAttribute("src");
    this.humidity.textContent = "";
    this.wind.textContent = "";
    this.clouds.textContent = "";
    this.pressure.textContent = "";
    this.desc.textContent = "";
    this.string.textContent = "";
    this.details.display = "";
    console.log(info.message);
  }
}

export { UI };
