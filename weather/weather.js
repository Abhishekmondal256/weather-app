const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
  

    const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data)
}
const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    
    console.log(data);
    weather.innerHTML = `
<div id="city" style="font-size:45px">
${data.name},${data.sys.country}
</div>


      <div id="helo"> 
      
    
    <div >
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        
        </div>
        </div>
        <div id="maxmin">
        ${data.main. temp_max}℃(Max)/${data.main.temp_min}℃(Min)        


        </div>
        <div id="wi">
        Humidity : ${data.main.humidity} %
        </br>
       
        
        Wind : ${data.wind.speed} km/hr
        </div>
        `
}


form.addEventListener(
    "submit",
    function(e) {
        getWeather(search.value)
        e.preventDefault();
    }
)