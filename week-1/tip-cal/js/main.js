let billRecord=[];
let Record='record';

function addBillTip(){
	let bill=document.getElementById('bills').value;
	let tip=document.getElementById('tips').value;

	//create object
	let recordObj={};
	recordObj.bill=bill;
	recordObj.tip=tip;

	//add it to array
	billRecord.push(recordObj);

	//make json string
	let jsonstr=JSON.stringify(billRecord);

	//put it in localStorage
	localStorage.setItem(Record,jsonstr);
	
	//clear input bar
	document.getElementById('bills').value='';
	document.getElementById('tips').value='';

	//display entered
	displayRecord();
	//make total bill amt
	// calBillAmt();
}

function displayRecord(){
	//change str to array
	let billsArr=JSON.parse(localStorage.getItem(Record));
	let htmlMess='';
	billsArr.forEach(function(record) {
		htmlMess+=`<div class="op-bills">
									<p>Bill---${record.bill}</p>
									<p>Tip----${record.tip}</p>
								</div>`
	});

	document.getElementById('eneterd').innerHTML=htmlMess;
}

function calBillAmt(){
	//change str to array
	let billsArr=JSON.parse(localStorage.getItem(Record));
	let billAmt=0;
	billsArr.forEach(function(record){
		billAmt+=record.bill*(1+record.tip*0.01);
	});

	let htmlMess=`<p>Bill Amt With Tip :${billAmt}</p>`;
	console.log(htmlMess);
	document.getElementById('calAmt').innerHTML=htmlMess;
}