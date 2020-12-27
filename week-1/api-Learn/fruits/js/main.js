const API_URL='https://www.fruitmap.org/api/trees';

//load on window loading
window.onload=function(){
    onGetFruits();
}
function onGetFruits(){
    // loader
    document.getElementById('fruits').innerHTML=`<div style='padding: 20px;'>Loading...</div>`;
    fetch(API_URL,{
        method: 'GET'
    }).then((repsonse) => repsonse.json())
        .then((data) => onDisplay(data))
        .catch(function(error) {
            onError();
            console.log(error);  
        } );
}

// function to display data
function onDisplay(data){
    let infoHtml='';

    data.forEach(function(fruit){
        infoHtml=infoHtml+  ` <div id='fruit' style='border: 2px solid ${fruit.color};'>
                                <div>${fruit.id}</div>
                                <div>${fruit.name}</div>
                                <div>${fruit.count}</div>
                            </div>`;
    });
    console.log(infoHtml);

    //now attach this html to fruits div
    document.getElementById('fruits').innerHTML=infoHtml;
}

/************************************
 * Function to display error while loading
 */

 function onError(){
     document.getElementById('fruits').innerHTML=`<div>Sorry Something Went Wrong! Try Again!
                                                    <br>
                                                    <br>
                                                    <button onclick='onGetFruits()'>Retry</button>
                                                </div>`;
     
 }