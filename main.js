const api = {
    key: "192aea923dbee80c264d8747cf90ef96",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.field__input');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        var anim1 = document.querySelector('.flex-container');
        anim1.classList.add("animate__animatedanimate__fadeIn")
    }
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&lang=it&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather) {
    let city = document.querySelector('.città');
    city.innerText = `${weather.name}`;
    
    // let now = new Date();
    // let date = document.querySelector('.location .date');
    // date.innerText = dateBuilder(now);

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let weather_el = document.querySelector('.ntempo');
    weather_el.innerText = weather.weather[0].main;
    

    const element = document.querySelector('.flex-container');
    element.classList.add('animate__animated', 'animate__fadeIn');
    element.addEventListener('animationend', () => {
        element.classList.remove('animate__animated', 'animate__fadeIn');
      });

    let icon = document.querySelector('.iconContainer');
    if (weather_el.innerText == 'Clouds' || weather_el.innerText == 'Mist' || weather_el.innerText == 'Smoke' ||
        weather_el.innerText == 'Haze' || weather_el.innerText == 'Dust' || weather_el.innerText == 'Fog' ||
        weather_el.innerText == 'Sand' || weather_el.innerText == 'Ash' || weather_el.innerText == 'Tornado') {
        icon.innerHTML = `<div class="icon cloudy animate__animated animate__fadeIn">
    <span class="icon cloud"></span>
    <span class="icon cloudx"></span>
</div>`
       
    } else if (weather_el.innerText == 'Clear') {
        icon.innerHTML = `<div class="icon hot animate__animated animate__fadeIn">
        <span class="icon sun"></span>
        <span class="icon sunx"></span>
    </div>`
    } else if (weather_el.innerText == 'Rain' || weather_el.innerText == 'Thunderstorm' || weather_el.innerText == 'Drizzle') {
        icon.innerHTML = `<div class="icon breezy animate__animated animate__fadeIn">
        <ul> 
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>	
        </ul>
        <span class="icon cloudr"></span>   
    </div>`
    } else if (weather_el.innerText == 'Snow') {
        icon.innerHTML = `<div class="stormy animate__animated animate__fadeIn">
        <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
        <span class="snowe"></span>
        <span class="snowex"></span>
        <span class="stick"></span>
        <span class="stick2"></span>
    </div>`

    }
}

// let hilow = document.querySelector('.hi-low');
// hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;


// //   function dateBuilder (d) {
// //     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// //     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// //     let day = days[d.getDay()];
// //     let date = d.getDate();
// //     let month = months[d.getMonth()];
// //     let year = d.getFullYear();

// //     return `${day} ${date} ${month} ${year}`;
//   }