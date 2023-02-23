var countDownDate;
var duration = document.getElementById("duration").value;
var timeRemaining;
var x;

function setTimer() {
	duration = document.getElementById("duration").value;
	if (countDownDate) {
		var now = new Date().getTime();
		timeRemaining = countDownDate - now;
		countDownDate = new Date(now + timeRemaining);
	} else {
		countDownDate = new Date();
		countDownDate.setMinutes(countDownDate.getMinutes() + parseInt(duration));
		resetTimer();
	}
}

function startTimer() {
	if (!countDownDate) {
		countDownDate = new Date();
		countDownDate.setMinutes(countDownDate.getMinutes() + parseInt(duration));
		resetTimer();
	} else {
		countDownDate = new Date();
		countDownDate.setTime(countDownDate.getTime() + timeRemaining);
	}

	x = setInterval(function() {
	  var now = new Date().getTime();
	  timeRemaining = countDownDate - now;
	  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
	  document.getElementById("timer").innerHTML = minutes + " minutes " + seconds + " seconds ";
	  if (timeRemaining < 0) {
	    clearInterval(x);
	    document.getElementById("timer").innerHTML = "EXPIRED";
	  }
	}, 1000);
}

function stopTimer() {
	clearInterval(x);
	timeRemaining = countDownDate - new Date().getTime();
	
}

function resetTimer() {
	clearInterval(x);
	document.getElementById("timer").innerHTML = "0m 0s";
}



document.getElementById("start-btn").addEventListener("click", startTimer);
document.getElementById("stop-btn").addEventListener("click", stopTimer);
