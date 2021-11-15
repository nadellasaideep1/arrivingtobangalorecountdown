(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "12/05/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    
        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour))+13,
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute))+10,
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        var todaysdata= new Date()
        var todaysmonth=todaysdata.getMonth()
        var todaysdate=todaysdata.getDate()
        var todaysyear=todaysdata.getFullYear()
        if((todaysdate>5&&todaysmonth==11)||todaysmonth>11||todaysyear>2021){
          document.getElementById("headline").innerText = "Ammamma & Tata already Arrived!!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }else{
        if (distance < 0) {
          document.getElementById("headline").innerText = "Ammamma & Tata are coming today!!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }}
        //seconds
      }, 0)
  }());