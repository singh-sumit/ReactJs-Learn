function calcCircum(){
	let rad=document.getElementById('radiusIp').value;
	let result=2*Math.PI*rad;
	console.log(result);

	document.getElementById('result').value=result;
}