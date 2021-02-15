let launchDate = new Date("May 1, 2021 01:00:00").getTime();

function updateCountdownTimer() {
	remainingTimeObj = getRemainingTimeDayHourMinuteSecond(launchDate);

	if (remainingTimeObj.UTC <= 0) {
		document.getElementById('day-digit').innerText = '00';
		document.getElementById('hour-digit').innerText = '00';
		document.getElementById('minute-digit').innerText = '00';
		document.getElementById('second-digit').innerText = '00';
	} else { 
		document.getElementById('day-digit').innerText = remainingTimeObj.days.toString().padStart(2, '0');
		document.getElementById('hour-digit').innerText = remainingTimeObj.hours.toString().padStart(2, '0');
		document.getElementById('minute-digit').innerText = remainingTimeObj.minutes.toString().padStart(2, '0');
		document.getElementById('second-digit').innerText = remainingTimeObj.seconds.toString().padStart(2, '0');
	}
	return remainingTimeObj;
}

function startCountdownTimer() {
	let countdown = setInterval(function() {
		let remainingTimeToLaunch = updateCountdownTimer(launchDate);
		if (remainingTimeToLaunch.UTC <= 0) {
			clearInterval(countdown);
		}
	}, 1000);
}

window.onload = (event) => {
	updateCountdownTimer();
	startCountdownTimer();
}


