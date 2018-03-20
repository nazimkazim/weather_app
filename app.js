
// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init UI object
const ui = new UI();
//weather.changeLocation('Miami', 'FL');

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // Change location
    weather.changeLocation(city, state);

    // Set location in LS
    storage.setLocationData(city, state);

    // Get and display weather
    getWeather();

    // Close the modal
    $('#locModal').modal('hide');
})


document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}
