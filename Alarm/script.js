const currentTime = document.querySelector("h1"),
content = document.querySelector(".content"),
selectMenu = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector("button");



let alarmTime, isAlarmSet,
ringtone = new Audio("RingTone/Shinee-RingDingDong Ringtone.mp3");

// Current Time
const currentDate = new Date();
let currentHours = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();
let currentSeconds = currentDate.getSeconds();
let currentAmPm = currentHours < 12 ? 'AM' : 'PM';

selectMenu[0].value = currentHours < 10 ? `0${currentHours}` : currentHours;
selectMenu[1].value = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
selectMenu[2].value = currentAmPm;

let alarmTriggered = false;

// DROPDOWNS
for (let i = 1; i <= 12; i++) {
    let option = `<option value="${i < 10 ? '0' + i : i}">${i < 10 ? '0' + i : i}</option>`;
    selectMenu[0].insertAdjacentHTML("beforeend", option);
}

for (let i = 0; i <= 59; i++) {
    let option = `<option value="${i < 10 ? '0' + i : i}">${i < 10 ? '0' + i : i}</option>`;
    selectMenu[1].insertAdjacentHTML("beforeend", option);
}

for (let i = 0; i < 2; i++) {
    let ampm = i === 0 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].insertAdjacentHTML("beforeend", option);
}

setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = h >= 12 ? 'PM' : 'AM';

    h = h % 12 || 12; // Convert 0 to 12 for AM/PM format
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    const currentTimeString = `${h}:${m}:${s} ${ampm}`;
    currentTime.innerText = currentTimeString;

    if (isAlarmSet && !alarmTriggered && alarmTime === currentTimeString) {
        ringtone.play();
        ringtone.loop = true;
        alarmTriggered = true;
    }
}, 1000);
//Set Alarm
function setAlarm() {
    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
        alarmTriggered = false; 
        return isAlarmSet = false;
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value}:${"00"} ${selectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please,set an appropriate Alarm time!");
    }
    alarmTime = time;
    isAlarmSet = true;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
}

setAlarmBtn.addEventListener("click", setAlarm);

