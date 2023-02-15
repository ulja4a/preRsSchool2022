    const time = document.querySelector(".time");
    const currentDate = document.querySelector(".date")
    const greeting = document.querySelector(".greeting")
    const date = new Date();
    
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
    console.log(hours)
    
    
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
        }
        showGreeting()     
        
}
  showTime();

  

  



  


