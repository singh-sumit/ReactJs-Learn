/************************************
 * TIP Calcualtor
 */
/*
var bills=[124,48,275];

var tips=[];

//set tip for each bills
for(bill in bills){
	tips.push(calculateTip(bills[bill]));
}
//print tips array for bills
console.log('Bills :',bills);
console.log('Tips :',tips);

//total amount paied for bill with tip
var amtBillWithTip=[];
//calculate amount for each bill and tip
for(var i=0;i<bills.length;i++){
	amtBillWithTip.push(bills[i]+tips[i]);
}

//print amount with tip and bill
console.log(amtBillWithTip)
//function to calculate tip for bill
function calculateTip(bill){
	switch(true){
		case (bill<=0):			//for less than 0
			return 0;
		case (bill<50):
			return bill*0.2;
		case (bill<200):
			return bill*0.15;
		default :
			return bill*0.1;			//for >200
	}
}
*/

/*********************************************
 * Objects and Properties
 */

 //Declare object method-1 {key : value,key : value,....}
 //								method-2 new Object()
 //another way of initializing object
 /*
var jane=new Object();
jane.age= 12;
jane.firstName='Jane';
jane['lastName']='Echilo';

console.log(jane);
//creating object using {}
 var jhon={
	 firstName:'Jhon',
	 lastName:'Smith',
	 birthYear: 1990,
	 family :[jane,'Mark','Bob','Emily'],
	 job :'teacher',
	 isMarried: false
 };

 //accessing object values using key . 
 console.log(jhon.firstName);
 console.log(jhon['lastName']);

 //mutate values in object
 jhon['job']='dancer';
 
 //print result
 console.log(jhon['job']);

 console.log(jhon.family);
 console.log(jhon);
*/

/***********************************************
 * Object and Methods
 */
/*
var jhon={
	firstName:'Jhon',
	lastName:'Smith',
	birthYear: 1990,
	family :['Jane','Mark','Bob','Emily'],
	job :'teacher',
	isMarried: false,

	//method to calculate age
	calAge(birthYear){
		this.age= 2028-birthYear;	
	},
	calAge(){
		this.age= 2028-this.birthYear;
	}
};

console.log(jhon);
//initialize age
jhon.calAge();

//after
console.log(jhon);

//mutate age
jhon.age=52;

console.log(jhon);
*/

/************************************************
 * BMI Challenge USING Object and method
 */
/*
 var john={
	 firstName: 'John',
	 lastName: 'Smith',
	 height : 4.5,
	 mass : 52,

	 //method to calculate bmi for john
	 calculateBMI: function(){
		this.bmi=this.mass/(this.height*this.height);
		return this.bmi;
	 }
 }

var mike={
	firstName: 'Mike',
	lastName : 'Jepz',
	height : 4.5,
	mass : 52,

	//method to calculate bmi for john
	calculateBMI: function(){
		this.bmi=this.mass/(this.height*this.height);
		return this.bmi;
	 }
}

var greaterBMI;
if(mike.calculateBMI()>john.calculateBMI()){
	greaterBMI=mike;
}else if(john.bmi>mike.bmi){
	greaterBMI=john;
}else{			//are equal
	greaterBMI= 0;
}

if(greaterBMI===0){
	console.log('Both have same bmi',john.bmi,' : ',mike.bmi);
}else{
	console.log(greaterBMI.firstName+' has greater bmi',greaterBMI.bmi);
}
*/

/****************************************************
 * Loops 
 */
/*
 for(var i=0;i< 10;i++)
	 console.log(i);

var jhon=['John','Smith',1990,'teacher','green'];


// for(var i=0;i < jhon.length; i++){
// 	console.log(jhon[i]);
// }

var i=0;
while(i < jhon.length){
	console.log(jhon[i]);
	i++;
}

//Break and continue 

for(var i=0;i< jhon.length;i++){
	if(typeof(jhon[i])!=='string')
		continue;
	console.log(jhon[i]);
}


for(var i=0;i< jhon.length; i++){
	if(typeof(jhon[i])!== 'string')
		break;
	console.log(jhon[i]);
}

*/

/************************************************
 * TIP Calculation using objects
 */
/*
 var jhon={
	 bills : [124, 4800, 268, 180, 4200],
	 
	 calculateTip : function(){
		 this.tips=[];

		 for(var i=0;i< this.bills.length; i++){
				var tip; 
				switch(true){
					case (this.bills[i]<=0) :
						tip=0;
						break;
					case (this.bills[i]>0 && this.bills[i]<50):
						tip=0.2;
						break;
					case (this.bills[i]<200):
						tip=0.15;
						break;
					default :
							tip=0.1;
				}
				this.tips[i]=tip*this.bills[i];
		 	}
		 },
		calculateAmt : function(){
			this.billAmt=[];

			for(var i=0; i< this.bills.length; i++){
				
				this.billAmt[i]=this.tips[i]+this.bills[i];
			}
		}
		 
	 };
	 
	//  console.log(jhon);

	 //calculate Tip
	 jhon.calculateTip();
	 //calculate amt
	 jhon.calculateAmt();

	 console.log('Jhon tips :',jhon.tips);
	 console.log('Jhon BillAmt :',jhon.billAmt)

var mark= {
	bills : [77, 3375, 110, 45],
	 
	 calculateTip : function(){
		 this.tips=[];

		 for(var i=0;i< this.bills.length; i++){
				var tip; 
				switch(true){
					case (this.bills[i]<=0) :
						tip=0;
						break;
					case (this.bills[i]>0 && this.bills[i]<100):
						tip=0.2;
						break;
					case (this.bills[i]<300):
						tip=0.1;
						break;
					default :
							tip=0.25;
				}
				this.tips[i]=tip*this.bills[i];
		 	}
		 },
		calculateAmt : function(){
			this.billAmt=[];

			for(var i=0; i< this.bills.length; i++){
				
				this.billAmt[i]=this.tips[i]+this.bills[i];
			}
		}
		
};

//initialize mark tip and amount
mark.calculateTip();
mark.calculateAmt();

console.log('Mark tips :',mark.tips);
console.log('Mark billAmt :',mark.billAmt);

//function to calculate average tip for each family
function avg(tips){
	var sum=0;
	for(i in tips){
		sum+=tips[i];
	}
	return sum/(tips.length);
}

//calcualte avg tip and put it to object respective
jhon['avgTip']=avg(jhon.tips);
mark['avgTip']=avg(mark.tips);

console.log('Average Tips :jhon ',jhon.avgTip,':mark ',mark.avgTip);

//compare average tips
if(jhon.avgTip>mark.avgTip){
	console.log('Jhon\'s tip is higher than Mark\'s :',jhon.avgTip);
}else if(mark.avgTip> jhon.avgTip){
	console.log('Mark\'s tip is higher than Jhon\'s :',mark.avgTip);
}else{
	console.log('Jhon\'s tip is EQUAL TO Mark\'s :',jhon.avgTip,mark.avgTip);
}

*/


/************************************************
 * Hoisting
 * 
 */
/*
 //basically we can can any function even they are declared latter
console.log(calcAge(1998));

//hoisting works in function decalartion
 function calcAge(birthYear){
	return 2020-birthYear;
 }

 //Hoisting with Variables

 console.log(age);

 var age=25;

 //other example for variable hoisting and variable in global context

 function myAge(){
	 var age=6;
	 console.log(age);
 }

 myAge();

 console.log(age);		//from gloabal context age=25

 */

 /**********************************************
  * this KEYWORD
  */

//   console.log(this);

/*
calculateAge(1995);

  function calculateAge(year){
	  console.log(2020- year);
	  console.log(this);
  }
*/

//this with object

/*
var jhon={
	name : 'John',
	yearOfBirth : 1990,
	calculateAge : function(){
		console.log(this);
		console.log(2020-this.yearOfBirth);

		// function innerFunc(){
		// 	console.log(this);
		// }

		// //call inner function
		// innerFunc();

	}
};
 
jhon.calculateAge();

var mike={
	name : 'Mike',
	yearOfBirth : 1998
}

//borrow mehtod from jhon object
mike.calculateAge = jhon.calculateAge;

//call calculateAge for mike
mike.calculateAge();

*/

/*************************************
 * splice() in array
 */
/*
let fruits=['Mango' ,'Apple', 'Bannana' ,'Orange'];
console.log(fruits);

fruits.splice(1,2,'Lemno','Pine');

console.log(fruits);
*/

/********************************************
 * slice an array
 */
/*
let fruits=['Mango' ,'Apple' ,'Orange', 'Bannana'];
console.log(fruits);

let sliced=fruits.slice(1,3);
console.log(sliced);
//now change in old array
console.log(fruits);

*/

/*********************************************
 * sort an array
 */
/*
 let fruits =['Mango' ,'Apple' ,'Orange', 'Bannana'];

 console.log(fruits);
 console.log(fruits.sort());

 console.log(fruits.reverse());

*/

/*******************************************
*ForEach Loop
 */
/*
let fruits =['Mango' ,'Apple' ,'Orange', 'Bannana'];

fruits.forEach((value,index)=>console.log(value,index));
*/
/*
let day=new Date().getDay();
console.log(day);

switch(day){
	case 0:
		console.log('Sunday');
		break;
	case 1:
		console.log('Monday');
		break;
	case 2:
		console.log('Tuesday');
		break;
	case 3:
		console.log('Wednesday');
		break;
	case 4:
		console.log('Thrusday');
		break;
	case 5:
		console.log('Friday');
		break;
	case 6:
		console.log('Saturday');
}

*/

/*****************************************************
 * To-do list using LocalStorage
 */

 
































