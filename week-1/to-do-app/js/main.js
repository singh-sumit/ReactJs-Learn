let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var Note='Note1';
// var myNoteArr=[];
let myNoteArr=localStorage.getItem(Note)?JSON.parse(localStorage.getItem(Note)):[];

//load older notes
window.onload=function(){
	getNote(myNoteArr);
}
function addNote(){
	let myNote=document.getElementById('note-area').value;
	console.log(myNote);
	//note object
	var myNoteObj={};
	myNoteObj.work=myNote;
	myNoteObj.date=new Date();
	myNoteObj.noteId=new Date().getTime();
	//array of note		will contain object of notes created	
	myNoteArr.push(myNoteObj);

	//stringfy note array usign JSON
	let strNote=JSON.stringify(myNoteArr);

	//add note array to localStorage
	localStorage.setItem(Note,strNote);

	document.getElementById('note-area').value='';
	// localStorage.setItem(firstNote,myNote);
	getNote(myNoteArr);
}

function getNote(savedNote){
	// let savedNote=myNoteArr;
	// console.log(savedNote);
	let htmlNote="";
	savedNote.forEach(function(noteObj,index){
				//only append if noteObj is not null
				if(noteObj){
					htmlNote=htmlNote+`<div id="note">
															<div id="note-content">
																<p>${getReadableDate(noteObj.date)}</p>
																<p>${noteObj.work}</p>
															</div>
														
															<div id="del-icon">
																<i class="fas fa-trash-alt fa-2x" onclick=deleteNote(${index})></i>
															</div>
														</div>	`
				}

		// 	htmlNote=htmlNote+'<div id="note">'
		// 												+'<p>'+noteObj.work+'</p>'
		// 												+'<p>'+noteObj.date+'</p>'
		// 											+'</div>'

		}	);
	// console.log(savedNote);
	// console.log(htmlNote);
	document.querySelector('.old-note').innerHTML=htmlNote;
}


//function to change to readable date and time
function getReadableDate(date){
	//05 12 2020 9:38
	let readableDate =new Date(date);
	return readableDate.getDate()+'/ '+months[readableDate.getMonth()]+'/ '+readableDate.getFullYear()+' '+readableDate.getHours()+' : '+readableDate.getMinutes();
}


//function to delte note
function deleteNote(index){
	// delete myNoteArr[index];
	console.log('Index ',index);
	myNoteArr.splice(index,1);
	console.log(myNoteArr);
	//save 
	localStorage.setItem(Note,JSON.stringify(myNoteArr));

	//look
	getNote(myNoteArr);
}


/**************************************************************
 * function to search for note according to search key
*/

//take search key from input field
function searchItem(){
	let searchKey=document.getElementById('search-query').value;
	console.log(searchKey);

	//search for array with such searchKey say work
	if(myNoteArr.length !== 0){
		console.log(myNoteArr);
		// const resltArr=myNoteArr.forEach(function(arr,index){
		// 	arr.filter(nob => (nob.work === searchKey));
		// })
		let searchArr=myNoteArr.filter(noteObject => noteObject.work.toLowerCase() ===searchKey.toLowerCase());
		console.log(searchArr);

		if(searchArr.length !==0 ){//found then
			//pass this searchArr to getNote
			getNote(searchArr);
		}
		else{
			document.querySelector('.old-note').innerText="NO such work found!";
		}
	}
		console.log(myNoteArr);
	// searchFor(searchKey);
}


/*********************************
 * Function to clear search result
 */

 function clearSearchItem(){
	 //clear text from search field
	 document.getElementById('search-query').value="";
	 //show all result
	 getNote(myNoteArr);
 }

 /***********************************
  * Live search
  */

  function liveSearch(){
	let buffQuery=document.getElementById('search-query').value;  
	console.log(buffQuery);

	//filter for any word with bufferQuery letters in between
	let subStrArr=myNoteArr.filter(noteObject => noteObject.work.match(/te/i));
	console.log(subStrArr);
	if(subStrArr.length !== 0){
		getNote(subStrArr);
	}
	else{
		document.querySelector('.old-note').innerText="No such Search String found!";
	}
  }