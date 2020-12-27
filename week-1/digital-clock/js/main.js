
let time=setInterval(writeTime,1000);

function writeTime(){

	let t=new Date();
	// document.getElementById('time-btn').innerHTML=t;
	document.getElementById('btn-hr').innerHTML=t.getHours();
	document.getElementById('btn-min').innerHTML=t.getMinutes();
	document.getElementById('btn-sec').innerHTML=t.getSeconds();
}

// var myVar = setInterval(myTimer, 1000);

// function myTimer() {
//   var d = new Date();
//   var t = d.toLocaleTimeString();
//   document.getElementById("time-btn").innerHTML = t;
// }