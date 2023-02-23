const time = document.querySelector(".time");
    const currentDate = document.querySelector(".date")
    const greeting = document.querySelector(".greeting")
    const slideNext = document.querySelector(".slide-next")
    const slidePrev = document.querySelector(".slide-prev")
    const date = new Date();
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
            
            greeting.textContent = greetingText

            function setLocalStorage() {
                
                localStorage.setItem('name', name.value);
              }
              window.addEventListener('beforeunload', setLocalStorage)
              
              function getLocalStorage() {
                if(localStorage.getItem('name')) {
                    
                  name.value = localStorage.getItem('name');
                }
              }
              window.addEventListener('load', getLocalStorage)
              
            }
        showGreeting()     
        
}
  showTime();
  /*function setBg() {
    const timeOfDay = getTimeOfDay();
    const bgNum = String(getRandomNum()).padStart(2, '0');
    document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
  }
    setBg()*/
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