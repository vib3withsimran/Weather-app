const Base_URL = `http://api.weatherapi.com/v1/current.json?key=948cd1d01cfe487c970180206251207&q`;
let submit = document.querySelector(".submit");

let image = document.querySelector(".img");
let Condition = document.querySelector(".weather");
let note = document.querySelector(".note");

const Onsubmit = async () => {
    let city = document.querySelector("input");
    let cityValue = city.value;
    console.log(cityValue);

    const URL = `${Base_URL}=${cityValue.toLowerCase()}&aqi=yes`;
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    Condition.innerHTML = `<p>${data.current.condition.text}</p> <p>${data.current.temp_c}°C</p>`;
    if(data.current.temp_c < 15){
        image.style.backgroundImage = 'url(stormy.webp)';
    }
    else{
        image.style.backgroundImage = 'url(cloudy.jpg)';
    }
    note.innerHTML = `<p>Weather in ${data.location.name}, ${data.location.country} is currently ${data.current.condition.text} with a temperature of ${data.current.temp_c} °C. The forcast of next few days is also ${data.current.condition.text}.</p>`
}

submit.addEventListener("click", Onsubmit);