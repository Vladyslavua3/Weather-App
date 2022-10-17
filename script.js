
const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "3625f8e32b34ce988b53c0c308bb9f70"
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&appid=${param.appid}`)
        .then(function (resp) {
            return resp.json()
        })
        .then(showWeather);

}

function init() {
    let newSelector = document.createElement('select');

    newSelector.id = 'city';

    let cities = {
        686762 : "Ivano-Frankove",
        686967 : "Zhytomyr",
        702550 : "Lviv",
        698740 : "Odessa",
        692194 : "Sumy",
    };

    for (let key in cities) {
        let option = document.createElement('option');
        option.value = key;
        option.text = cities[key];
        newSelector.append(option);
    }

document.querySelector('.out').appendChild(newSelector);

document.querySelector('#city').onchange = getWeather;
}

function showWeather(data) {
    console.log(data);
    document.querySelector('.name').textContent = data.name;
    document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.weather-description').textContent = data.weather[0]['description'];
    document.querySelector('.wind-direction').innerHTML = `wind direction:  ${data.wind.deg}&deg`;
    document.querySelector('.wind-speed').innerHTML = `wind speed: ${data.wind.speed}`;
    document.querySelector('.pressure').innerHTML = `pressure: ${data.main.pressure}`;
}
init();
getWeather();

