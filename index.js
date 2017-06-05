//Variables are declared global to be access withing function calls
var uHour=0,
umin=0,h,m,set=false;

//load the sound
var sound = new Audio("http://www.freespecialeffects.co.uk/soundfx/sirens/alarm_01.wav");
sound.loop = true;

function stopAl(){
     sound.pause();
}


function startTime() {
    var today = new Date();
     h = today.getHours();
     m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    if(set){


        if(m== uMinute && h ==uHour){
            console.log('it is time');
            sound.play();
            set=false;
        }
    }
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function getUserInput(){
    uHour= alarm.Hour.value;
    uMinute= alarm.minute.value;
    set=true;
}