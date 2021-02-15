let launchDate = new Date("May 1, 2021 01:00:00").getTime();

function updateCountdownTimer() {
	remainingTimeObj = getRemainingTimeDayHourMinuteSecond(launchDate);

	if (remainingTimeObj.UTC <= 0) {
		document.getElementById('day-counter').innerText = '00';
		document.getElementById('hour-counter').innerText = '00';
		document.getElementById('minute-counter').innerText = '00';
		document.getElementById('second-counter').innerText = '00';
	} else {
		document.getElementById('day-counter').innerText = remainingTimeObj.days.toString().padStart(2, '0');
		document.getElementById('hour-counter').innerText = remainingTimeObj.hours.toString().padStart(2, '0');
		document.getElementById('minute-counter').innerText = remainingTimeObj.minutes.toString().padStart(2, '0');
		document.getElementById('second-counter').innerText = remainingTimeObj.seconds.toString().padStart(2, '0');
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


