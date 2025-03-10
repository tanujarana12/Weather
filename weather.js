const apiKey="b97f5e23820c1ce6aba12e95badd503d";
const apiURL="https://api.openweathermap.org/data/2.5/weather?&appid=b97f5e23820c1ce6aba12e95badd503d&units=metric&q=";

async function checkWeather(city){
const response= await fetch (apiURL + city);
console.log(response.status)
console.log(response.statusText)
const data= await response.json();
console.log(data)
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML= Math.round (data.main.temp) + "°C" ;
document.querySelector(".humidity").innerHTML=data.main.humidity + "%" ;
document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
document.querySelector(".weather").style.display = "block";

}


const searchBox= document.querySelector(".search input");
const searchButton=document.querySelector(".search button");

// let appID="b97f5e23820c1ce6aba12e95badd503d"
// let tempString=`https://api.openweathermap.org/data/2.5/weather?&appid=${appID}&units=metric&q=${city}`
// console.log(tempString)


searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})