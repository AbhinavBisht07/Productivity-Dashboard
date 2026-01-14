function weatherSection() {

    let apiKey = "d60508e0f43c4eeb9c1123333261301";

    let header1Time = document.querySelector('.header1 h2');
    let header1Date = document.querySelector('.header1 h4');
    let header1Location = document.querySelector('.header1 h3');

    let header2Temperature = document.querySelector('.header2 h2');
    let header2Condition = document.querySelector('.header2 h3');
    let precipitation = document.querySelector('.header2 .precipitation');
    let humidity = document.querySelector('.header2 .humidity');
    let wind = document.querySelector('.header2 .wind');

    let locationInput = document.querySelector(".locationInput");
    let locationSubmitBtn = document.querySelector(".locationSubmitBtn");

    let location = localStorage.getItem("location") || "";

    // WEATHER API 
    async function weatherApiCall(apiKey, location) {

        if (!location) {
            header1Location.innerHTML = "Enter a location";
            return;
        }

        try {
            let response = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
            );

            let data = await response.json();

            header1Location.innerHTML = `${data.location.name} (${data.location.region})`;
            header2Temperature.innerHTML = `${data.current.temp_c}°C`;
            header2Condition.innerHTML = data.current.condition.text;
            precipitation.innerHTML = `Precipitation: ${data.current.precip_mm} mm`;
            humidity.innerHTML = `Humidity: ${data.current.humidity}%`;
            wind.innerHTML = `Wind: ${data.current.wind_kph} km/h`;

        } catch (error) {
            header1Location.innerHTML = "Location not found ❌";
            console.error(error);
        }
    }

    // BUTTON
    locationSubmitBtn.addEventListener("click", function () {
        location = locationInput.value.trim();
        if (!location) return;

        localStorage.setItem("location", location);
        weatherApiCall(apiKey, location);
        locationInput.value = "";
    });

    //  DATE & TIME 
    const totalDaysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    function dateAndTime() {
        const date = new Date();
        header1Date.innerHTML = `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
        header1Time.innerHTML =
            `${totalDaysOfWeek[date.getDay()]}, ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`;
    }

    setInterval(dateAndTime, 1000);
    dateAndTime();

    // INITIAL LOAD
    if (location) {
        weatherApiCall(apiKey, location);
    }
}

export default weatherSection;