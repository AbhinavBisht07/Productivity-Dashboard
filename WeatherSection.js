function weatherSection() {
    // site :- weatherapi.com (https://www.weatherapi.com)
    let apiKey = "2b0933b21c1c42b8b7f84623261101";

    let data = null;

    let header1Time = document.querySelector('.header1 h2');
    let header1Date = document.querySelector('.header1 h4');
    let header1Location = document.querySelector('.header1 h3');

    let header2Temperature = document.querySelector('.header2 h2');
    let header2Condition = document.querySelector('.header2 h3');
    let precipitation = document.querySelector('.header2 .precipitation');
    let humidity = document.querySelector('.header2 .humidity');
    let wind = document.querySelector('.header2 .wind');

    async function weatherApiCall(apiKey, city) {
        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        let data = await response.json();
        // console.log(data);

        header1Location.innerHTML = `${data.location.name} (${data.location.region})`;

        header2Temperature.innerHTML = `${data.current.temp_c}°C`;
        header2Condition.innerHTML = `${data.current.condition.text}`;
        precipitation.innerHTML = `Precipitation: ${data.current.precip_mm}mm`;
        humidity.innerHTML = `Humidity: ${data.current.humidity}%`;
        wind.innerHTML = `Wind: ${data.current.wind_kph} km/h`;
    }
    weatherApiCall(apiKey, "Dehradun");


    let date = null;

    const totalDaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    function dateAndTime() {
        date = new Date(); //Date() is an inbuilt method that gives us Date & Time.
        // console.log(date);
        let day = totalDaysOfWeek[date.getDay()];
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let datee = date.getDate();
        let month = months[date.getMonth()];
        let year = date.getFullYear();
        // console.log(day);

        header1Date.innerHTML = `${datee} ${month}, ${year}`;

        header1Time.innerHTML = `${day}, ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${hours < 12 ? "am" : "pm"}`
    }

    //to update time every one second :-
    setInterval(() => {
        dateAndTime();
    }, 1000);
}

export default weatherSection;