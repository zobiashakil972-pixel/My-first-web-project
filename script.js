  async function getWeather() {
    const location = document.getElementById("Input").value.trim();
    if (location === "") {
      alert("Please enter a Location!");
      return;
    }
  
  const apiKey = "b9b26ea5ec0c468492044204251407";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;


  fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error("Oops! Location not found!");
      
      }
      return response.json();
    })
    
    .then(data => {
    
      document.getElementById("location").innerHTML = `${data.location.name}, ${data.location.country}`;
      document.getElementById("icon").innerHTML = `<img src= "https:${data.current.condition.icon}" alt="icon" width="80">`;
      document.getElementById("condition").innerHTML =`${data.current.condition.text}`;
      document.getElementById("temp").innerHTML = `${data.current.temp_c}°C`;
      document.getElementById("humidity").innerHTML = ` ${data.current.humidity}%`;
      document.getElementById("wind").innerHTML = ` ${data.current.wind_kph} km/h`;
    })
    .catch(error => {
      document.getElementById("location").innerHTML = "";
      document.getElementById("icon").innerHTML= "";
      document.getElementById("condition").innerHTML = "";
      document.getElementById("temp").innerHTML = "";
      document.getElementById("humidity").innerHTML = "";
      document.getElementById("wind").innerHTML = "";
      alert(error.message);
    })
    }
    
    document.getElementById("btn").addEventListener("click", getWeather);
