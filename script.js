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
	//Clears the timer title if the timer was paused
	document.getElementById("timer-title").innerHTML = "";
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
	    document.getElementById("timer").innerHTML = "Please take a break";
		alert("The timer has expired")
	  }
	}, 1000);
}

function stopTimer() {
	clearInterval(x);
	timeRemaining = countDownDate - new Date().getTime();
	if(document.getElementById("timer").innerHTML === ""){
		document.getElementById("timer-title").innerHTML = "";
	}
	else{
		document.getElementById("timer-title").innerHTML = "Timer paused";
	}
	
	
}

function resetTimer() {
	clearInterval(x);
	document.getElementById("timer").innerHTML = "";
	document.getElementById("timer-title").innerHTML = "";

}
function addTask() {
	var task = document.getElementById("task-input").value;
	if (task.trim() === "") {
		return;
	}
	var taskList = document.getElementById("task-list");
	var taskItem = document.createElement("li");
	var taskText = document.createTextNode(task);
	var taskDelete = document.createElement("button");
	taskDelete.innerHTML = "Finished";
	taskDelete.addEventListener("click", function() {
		console.log(taskItem);
		taskList.removeChild(taskItem);
	});
	taskItem.appendChild(taskText);
	taskItem.appendChild(taskDelete);
	taskList.appendChild(taskItem);
	document.getElementById("task-input").value = "";
}



document.getElementById("start-btn").addEventListener("click", startTimer);
document.getElementById("stop-btn").addEventListener("click", stopTimer);
document.getElementById("reset-btn").addEventListener("click", resetTimer);
document.getElementById("duration").addEventListener("change", function() {
  countDownDate = null;
  resetTimer();
});
document.getElementById("add-task-btn").addEventListener("click", addTask);
