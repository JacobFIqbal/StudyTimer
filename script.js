var countDownDate;
var duration = document.getElementById("duration").value;
var x;

function setTimer() {
	duration = document.getElementById("duration").value;
	countDownDate = new Date();
	countDownDate.setMinutes(countDownDate.getMinutes() + parseInt(duration));
	resetTimer();
}

function startTimer() {
	countDownDate = new Date();
	countDownDate.setMinutes(countDownDate.getMinutes() + parseInt(duration));
	x = setInterval(function() {
	  var now = new Date().getTime();
	  var distance = countDownDate - now;
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	  document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
	  if (distance < 0) {
	    clearInterval(x);
	    document.getElementById("timer").innerHTML = "EXPIRED";
	  }
	}, 1000);
}

function resetTimer() {
	clearInterval(x);
	document.getElementById("timer").innerHTML = "0m 0s";
}

document.getElementById("start-btn").addEventListener("click", startTimer);
document.getElementById("reset-btn").addEventListener("click", resetTimer);
