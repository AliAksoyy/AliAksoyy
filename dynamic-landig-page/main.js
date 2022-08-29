// DOM Elements

const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');


//Show Time

function showTime() {
    let today =new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds()
    // Set AM or PM

    
    const amPm = hour>=12 ? "PM" : "AM";

    //12hr Format

    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime,1000);
   
}

 // Add Zero
    function addZero(n) {
        return (parseInt(n,10)< 10 ? "0" : "") + n;
    }
// Set background and Greeting
function setBgGreet() {
    let today = new Date(),
    hour = today.getHours()

    if(hour<12) {
        // Morning
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center"
        document.body.style.backgroundSize = "center";
        greeting.textContent = 'Good Morning'

    } else if(hour<18) {
        //Afternoon
        document.body.style.backgroundImage = "url('../img/evening.jpg')";
        greeting.textContent = "Good Morning";
    }else {
        //Evening
        document.body.style.backgroundImage = "url('../img/nights.jpg')";
        greeting.textContent = "Good Morning";
        document.body.style.color = 'white'
    }

}
// Get Focus




// Get Name

function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name')
    }
}

// Set Name

function setName(e) {

    if(e.type === 'keypress') {
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
           localStorage.setItem("name", e.target.innerText); 
            name.blur()
        }
    } else {
       localStorage.setItem('name', e.target.innerText) 
    }
}
// Set Focus

function setFocus(e) {

    if(e.type === 'keypress') {
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
           localStorage.setItem("focus", e.target.innerText); 
            name.blur()
        }
    } else {
       localStorage.setItem('focus', e.target.innerText) 
    }
}

// Get focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus')
    }
}

name.addEventListener('keypress',setName)
name.addEventListener('blur',setName)
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

 // run
    showTime();
    setBgGreet();
    getName();
    getFocus();
