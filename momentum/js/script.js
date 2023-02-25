const time = document.querySelector(".time");
    const currentDate = document.querySelector(".date")
    const greeting = document.querySelector(".greeting")
    const city = document.querySelector(".city");
    const slideNext = document.querySelector(".slide-next")
    const slidePrev = document.querySelector(".slide-prev")
    const changeQuote = document.querySelector(".change-quote")
    const quote = document.querySelector(".quote")
    const author = document.querySelector(".author")
    const date = new Date();
    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weather-description');
    const max=20;
    const min=1;
    let randomNum = getRandomNum();

    function getRandomNum() {
        let numRandom = Math.floor((Math.random()* (max - min + 1))+min);
        return numRandom;
        
    }
        getRandomNum();
    
    function getSlideNext() {
        if(randomNum>=20) {
            randomNum = 1;
        } else {
        randomNum++;
        }
        setBg(); 
    }   
    slideNext.addEventListener('click', getSlideNext)

    function getSliderPrev() {
        if(randomNum=1) {
            randomNum = 20;
        } else {
        randomNum--;
        }
        setBg();
    }
    slidePrev.addEventListener('click', getSliderPrev)

    function getTimeOfDay(){
        const hours = date.getHours();    
        if (hours>0 && hours<6) {
            return "night";
        } 
        if (hours>=6 && hours<12) {
            return "morning"; 
        }
        if (hours>=12 && hours<18) {
            return "afternoon";
        } else {
            return "evening";
        }
        
    }
    
function showTime() {
    const date = new Date();
    const hours = date.getHours();
    let name = document.querySelector('input.name');
    
    time.textContent = date.toLocaleTimeString(); 
    setTimeout(showTime, 1000); 
        function showDate() {
            const options = {weekday: 'long', month: 'long', day: 'numeric'};
            currentDate.textContent = date.toLocaleDateString('en-Us', options);   
        }
        showDate(); 
        
            
        function showGreeting() {
            const timeOfDay = getTimeOfDay();
            const greetingText = `Good ${timeOfDay}`;
            const cityText = ``;
            greeting.textContent = greetingText
            city.textContent = cityText
            function setLocalStorage() {
                
                localStorage.setItem('name', name.value);
                localStorage.setItem('city', city.value);
              }
              window.addEventListener('beforeunload', setLocalStorage)
              
              function getLocalStorage() {
                if(localStorage.getItem('name')) {
                    
                  name.value = localStorage.getItem('name');
                }
                if(localStorage.getItem('city')) {
                    
                    city.value = localStorage.getItem('city');
                  } else {
                    city.value = Batumi
                  }
                  getWeather();
              }
              window.addEventListener('load', getLocalStorage)
              
            }
        showGreeting()     
        
}
  showTime();
  
    function setBg() {
        const timeOfDay = getTimeOfDay();
        const bgNum = String(getRandomNum()).padStart(2, '0');
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
        img.onload = () => {      
            document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
        }; 
      }
      setBg();

      async function getWeather() {  
        city.addEventListener('change', getWeather)
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=d898315f5267cd1ec1cf5946f517c5ba&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        //const city = new City();
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp}°C`;
        weatherDescription.textContent = data.weather[0].description; 
        
        console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
        
    }
      getWeather()   
      
      async function getQuotes() {  
        const quotes = 'http://127.0.0.1:5500/ulja4a-JSFEPRESCHOOL2022Q4/momentum/data.json';
        const res = await fetch(quotes);
        const data = await res.json(); 
        console.log(data);
        console.log(randomNum)
        randomNum = +randomNum;

    if (randomNum === 20) {
        randomNum = 0;
    }
        quote.textContent = data[randomNum].text
        author.textContent = data[randomNum].author
      }
      
      getQuotes();
      window.addEventListener('load', getQuotes)
      changeQuote.addEventListener('click', getQuotes)
      