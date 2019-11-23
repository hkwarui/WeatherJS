class Weather {
  constructor(city) {
    this.apikey = "f6ba66d997fd43625aa0834e48936b2d";
    this.city = city;
    // this.state = state;
  }
  // fetch weather from api
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}`
    );
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
    //this.state = state;
  }
}

export { Weather };
