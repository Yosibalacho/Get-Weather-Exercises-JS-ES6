// async function getWeather() {
//   try {
//     return await fetch(
//       "https://api.openweathermap.org/data/2.5/weather?q=lod&appid=1b81bcb879b1ca0705d519e51d8aef2f"
//     ).then((res) => res.json());
//   } catch (err) {
//   } finally {
//   }
// }
// function printWeather() {
//   getWeather().then((result) => console.log(result));
// }
const API_KEY = "1b81bcb879b1ca0705d519e51d8aef2f";
const BASIC_API = "https://api.openweathermap.org/data/2.5/";
// const cityFromUser =document.getElementById("select_city") ;

async function getWeather(cityName){
  try {
    return await fetch(`${BASIC_API}weather?q=${cityName}&appid=${API_KEY}`)
      .then(res => res.json())}
  catch (err){}
  finally {}
}

function printWeather() {
  getWeather(document.getElementById("select_city").value).then(res => {
    for (let key in res) {
      for (let item in res[key]) {
        myP.innerText += `${key} : ${item}`;
      }
      myP.innerText += `\n`;
    }});
}
