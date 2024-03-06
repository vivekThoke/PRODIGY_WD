const key = `3c00a63b596aa3d0ccd146b1c0613787`;
const url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`

let submitButton = document.querySelector(".submit");
let inputValue = document.querySelector(".input");


async function weahterApi(city){
    try {
        const response = await fetch(url + city + `&appid=${key}`)
        let data = await response.json()
    
        // console.log(data)
    
        document.querySelector(".name").innerHTML = "City Name- " +  data.name + " |";
        document.querySelector(".tempearture").innerHTML = "Tempearature- " +   Math.round(data.main.temp) + "°C |";
        document.querySelector(".humidity").innerHTML = "Humidity- " + data.main.humidity + "% |";
        document.querySelector(".windspeed").innerHTML = "Windspeed-  " + data.wind.speed + "  Km/hr |";
    } catch (error) {
        document.querySelector('.error').innerHTML = "city not found";
    }
  

}

submitButton.addEventListener("click", function(){
    weahterApi(inputValue.value)
})
