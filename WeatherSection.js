function weatherSection() {

    let apiKey = "d60508e0f43c4eeb9c1123333261301";

    let header = document.querySelector('header');
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
        
        // Morning background image :-
        if(date.getHours() >= 6 && date.getHours() < 12){
            header.style.backgroundImage = `url("https://plus.unsplash.com/premium_photo-1661963446332-d2b13bbafb8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
        }
        // Afternoon background image :-
        else if(date.getHours() >= 12 && date.getHours() < 16){
            header.style.backgroundImage = `url("https://images.unsplash.com/photo-1762652847678-9971cfcad54d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
            header.style.backgroundPositionY = '70%';
        }
        // Evening background image :-
        else if(date.getHours() >= 16 && date.getHours() < 19){
            header.style.backgroundImage = `url("https://images.unsplash.com/photo-1574014703905-34ccd5719bdd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
            header.style.backgroundPositionY = '75%';
            // background-position-y: 80%;
        }
        // Night background image :-
        else{
            header.style.backgroundImage = `url("https://images.unsplash.com/photo-1429892494097-cccc61109f58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
            header.style.backgroundPositionY = '75%';
        }
    }

    setInterval(dateAndTime, 1000);
    dateAndTime();

    // INITIAL LOAD
    if (location) {
        weatherApiCall(apiKey, location);
    }
}

export default weatherSection;