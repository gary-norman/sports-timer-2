//buzzer audio
function playBuzzer() {
const buzzer = document.getElementById('buzzerAudio');
buzzer.play();
}

//spotify playlist
let spotListFull = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6ZTpgxK6BT92mmsqwETj9l?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
let spotList = spotListFull.substring(40, spotListFull.length-154);
function reloadSpotify() {
    document.getElementById('spotifyIframe').src = spotList;
} 

// create element for main image with classlists
const img = document.querySelector('img');
const brhc = document.getElementById("mainImage");

//create timer&score variables
let period = 0;
function periodOdd() {
    if ((period % 2) == 0) {
        periodValue.innerHTML = (pad2(period-1));
    }
    else periodValue.innerHTML = (pad2(period));
}
let homeScoreJs = 0;
let awayScoreJs = 0;
let countdown = null;
let homeNamed = 'dark';
let awayNamed = 'light';
let periodTime = 20;
let breakTime = 5;
const periodValue = document.getElementById('periodDisplay');
const periodTimeValue = document.getElementById('periodTimeDisplay');
const breakTimeValue = document.getElementById('breakTimeDisplay');
const homeScoreValue = document.getElementById('homeScoreDisplay');
const awayScoreValue = document.getElementById('awayScoreDisplay');
const timeValue = document.getElementById('timeDisplay');
const timeValueMins = document.getElementById('timeDisplayM');
const timeValueSecs = document.getElementById('timeDisplayS');
const homeNameValue = document.getElementById('homeNameDisplay');
const awayNameValue = document.getElementById('awayNameDisplay');

//populate HTML
periodValue.innerHTML = (pad2(period));
periodTimeValue.innerHTML = (pad2(periodTime));
breakTimeValue.innerHTML = (pad2(breakTime));
homeScoreValue.innerHTML = (pad2(homeScoreJs));
awayScoreValue.innerHTML = (pad2(awayScoreJs));
timeValue.innerHTML = (pad2(Math.floor(countdown/60)))+":"+(pad2(countdown % 60));
homeNameValue.innerHTML = homeNamed ;
awayNameValue.innerHTML = awayNamed ;

//functions for renaming teams, choosing periods, editing spotify & changing colours


function editPeriod() {
    let userPeriodTime = prompt("Enter the period length.");
    if (userPeriodTime === null || userPeriodTime == '') {
        return;
    }
    periodTime = userPeriodTime;
    periodTimeValue.innerHTML = (pad2(periodTime));
}

function editBreak() {
    let userBreakTime = prompt("Enter the break length.");
    if (userBreakTime === null || userBreakTime == '') {
        return;
    }
    breakTime = userBreakTime;
    breakTimeValue.innerHTML = (pad2(breakTime));
}

function renameHome() {
    let userHome = prompt("Enter the Home team name.");
    if (userHome === null || userHome == '') {
        return;
    }
    homeNamed = userHome;
    homeNameValue.innerHTML = homeNamed ;
}
function renameAway() {
    let userAway = prompt("Enter the Away team name.");
    if (userAway === null || userAway == '') {
        return;
    }
    awayNamed = userAway;
    awayNameValue.innerHTML = awayNamed ;
}
function spotifyPLaylist() {
    let spotiList = prompt("Paste a Spotify playlist. ** MUST BE COMPACT(80px) x 100%!! **");
    if (spotiList === null || spotiList == '') {
        return;
    }
    spotListFull = spotiList;
}

/* Set the width of the settings sidebar to 250px (show it) */
function openNav() {
    document.getElementById("settingsPanel").style.width = "450px";
  }
  
  /* Set the width of the settings sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("settingsPanel").style.width = "0px";
  } 


//functions for the buttons
function plusOneToHome() {
    homeScoreJs ++;
    homeScoreValue.innerHTML = (pad2(homeScoreJs));
}
function minusOneToHome() {
    homeScoreJs --;
    if (homeScoreJs < 0) {
        homeScoreJs = 0;
    }
    homeScoreValue.innerHTML = (pad2(homeScoreJs));
}
function resetHome() {
    homeScoreJs = 0;
    homeScoreValue.innerHTML = (pad2(homeScoreJs));
}
function plusOneToAway() {
    awayScoreJs ++;
    awayScoreValue.innerHTML = (pad2(awayScoreJs));
}
function minusOneToAway() {
    awayScoreJs --;
    if (awayScoreJs < 0) {
        awayScoreJs = 0;
    }
    awayScoreValue.innerHTML = (pad2(awayScoreJs));
}
function resetAway() {
    awayScoreJs = 0;
    awayScoreValue.innerHTML = (pad2(awayScoreJs));
}
//clock buttons
function plusFiveToClock() {
    countdown += 300;
    countdown = (Math.floor(countdown/60)*60);
    timeValue.innerHTML = (pad2(Math.floor(countdown/60)))+":"+(pad2(countdown % 60));
    stoptime = true;
}
function plusOneToClock() {
    countdown += 60;
    countdown = (Math.floor(countdown/60)*60);
    timeValue.innerHTML = (pad2(Math.floor(countdown/60)))+":"+(pad2(countdown % 60));
    stoptime = true;
}

function minusFiveToClock() {
    if (countdown < 301) {
        countdown = 0;
    }
    else {
    countdown -= 300;
    countdown = (Math.ceil(countdown/60)*60);
    }
    timeValue.innerHTML = (pad2(Math.floor(countdown/60)))+":"+(pad2(countdown % 60));
    stoptime = true;
}
function minusOneToClock() {
    if (countdown < 61) {
        countdown = 0;
    }
    else {
    countdown -= 60;

    countdown = (Math.ceil(countdown/60)*60);
    }
    timeValue.innerHTML = (pad2(Math.floor(countdown/60)))+":"+(pad2(countdown % 60));
    stoptime = true;
}
function resetClock() {
    countdown = 0;
    timeValue.innerHTML = (pad2(Math.floor(countdown/60)))+":"+(pad2(countdown % 60));
    stoptime = true;
}

function gameOn() {
    countdown = (periodTime * 60);
    timeValue.innerHTML = (pad2(Math.floor(countdown/60)))+":"+(pad2(countdown % 60));
    stoptime = true;
}

function gameOff() {
    countdown = (breakTime * 60);
    timeValue.innerHTML = (pad2(Math.floor(countdown/60)))+":"+(pad2(countdown % 60));
    stoptime = true;
}



//ensure numbers are always 2 digits
function pad2(number) {
   
    return (number < 10 ? '0' : '') + number
  
}

//timer
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
        const mainButtonClass = brhc.classList.item(0);
        img.classList.replace(mainButtonClass, 'mainImageStop');
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
    const mainButtonClass = brhc.classList.item(0);
        img.classList.replace(mainButtonClass, 'mainImageStart');
  }
}



function timerCycle() {
    
    if (countdown > 0 && stoptime == false) {
    countdown -= 1; 
    if (countdown === 0) {
        playBuzzer();
        period++;
        periodOdd();
    } 
    timeValue.innerHTML = (pad2(Math.floor(countdown/60)))+":"+(pad2(countdown % 60));
    
    
    setTimeout("timerCycle()", 1000);
    }
  }




// start/stop the timer
function mainButtonTimer() {
    if (stoptime == true) {
        startTimer();
    }
    else {
        stopTimer();
        const mainButtonClass = brhc.classList.item(0);
        img.classList.replace(mainButtonClass, 'mainImageStart');
    }
}



//main button timer action & styling

function mainButtonStyling() {
    if (stoptime === true && countdown > 0) {
        const mainButtonClass = brhc.classList.item(0);
        brhc.classList.replace(mainButtonClass,'mainImageStart');
    } else if (stoptime === false) {
        const mainButtonClass = brhc.classList.item(0);
        brhc.classList.replace(mainButtonClass, 'mainImageStop');
    } else {
        const mainButtonClass = brhc.classList.item(0);
        brhc.classList.replace(mainButtonClass, 'mainImageStd');
    }
}

// fullscreen

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}