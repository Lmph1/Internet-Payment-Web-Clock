var clickbtn= document.getElementById('btncal');
var btnsValue = document.getElementById('btn-value');
var icon = document.getElementById('btn-icon');
var startAtH = document.getElementById('start-time-h');
var startAtM = document.getElementById('start-time-m');
var stopAtM = document.getElementById('stop-time-m');
var stopAtH = document.getElementById('stop-time-h');

var minutes = document.getElementById('minute-time');
var reals = document.getElementById('reals-time');

var mycount;
var timingdate;
var startTime;
var endTime;
var calTime;

// livedate
function myClearscreen(){
    startAtH.innerHTML="00"
    startAtM.innerHTML="00"
    stopAtH.innerHTML="00"
    stopAtM.innerHTML="00"
    reals.innerHTML="0"
    minutes.innerHTML="0"
}

setInterval(time,1000 );
function time(){
    var date = new Date();
    document.getElementById("dayname").innerHTML = date.toDateString() +" " +date.toLocaleTimeString();
}
setInterval(() => {
   mylive();
},1000);

// control button
function btnclick(){
   
    if(btnsValue.textContent=="Start")
    {
        var pickDate = new Date();
        var hours = pickDate.getHours() % 12 || 12; 
    
         icon.classList.add("fa-circle-stop");
         icon.classList.remove("fa-play")
         btnsValue.innerHTML="Stop";
         clickbtn.style.backgroundColor="red"
       
        startAtH.innerHTML=hours;
        startAtM.innerHTML=pickDate.getMinutes();
        startTime=pickDate.getMinutes().valueOf();
        console.log('Start'+startTime);
    }else if(btnsValue.textContent=="Stop"){
      var stopdate= new Date();
      timingdate= new Date();
    stopAtH.innerHTML=timingdate.getHours()% 12 || 12;
    stopAtM.innerHTML=timingdate.getMinutes();
        icon.classList.add("fa-trash-can");
        icon.classList.remove("fa-circle-stop")
        btnsValue.innerHTML="Clear";
        clickbtn.style.backgroundColor = "black";
        setTimeout(() => {
            clearInterval(mycount);
        },1);
        endTime=stopdate.getMinutes().valueOf();
        calTime=endTime-startTime;
        if(calTime<=15)
            {
                reals.innerHTML="500"
            }
            else if(calTime<=30){
                reals.innerHTML="1000"
            }
            else if(calTime<=60){
                reals.innerHTML="1500"
            }
            else{
                reals.innerHTML="2000"
            }
        minutes.innerHTML=calTime;       
    }
    else if(btnsValue.textContent=="Clear"){
        icon.classList.add("fa-play");
        icon.classList.remove("fa-trash-can")
        btnsValue.innerHTML="Start";
        clickbtn.style.backgroundColor="green"
        myClearscreen();
        
    }
}