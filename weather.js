class Weather {
    constructor(city, state) {
        this.apiKey = "059d0085afdbbb54";
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`)
        const responseData = await response.json();
        return responseData.current_observation;
    }
    // Change location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}