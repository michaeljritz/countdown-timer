function getRemainingTimeDayHourMinuteSecond(endTime) {
	let currentTime = new Date().getTime();
	let remainingTime = endTime - currentTime;

	let remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
	let remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
	let remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

	let remainingTimeObj = {
		days: remainingDays,
		hours: remainingHours,
		minutes: remainingMinutes,
		seconds: remainingSeconds,
		UTC: remainingTime
	}

	return remainingTimeObj;
}