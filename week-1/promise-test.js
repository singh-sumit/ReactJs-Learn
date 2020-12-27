// Promise  Example
let isCall=true;
function promiseExample(){
    return new  Promise(function(resolve,reject){
       setInterval(function(){
           if(isCall){ //true
                resolve('The Promise is Success!');                
           }else{
               reject('The Promise is failed!');
           }
       },1000);
    });
}


//call promiseExample
function callPromise(){
    promiseExample().then(function(value){
        console.log(value);
    }).catch(function(error){
        console.log(error);
    });
    console.log('------------------');
};


/**************************************
 * Filter
 * Return string[]
 */

 function filterEx1(){
     const words=['spray','limit','elite','exuberant','destruction','present'];
     
     //fitering 
     const result=words.filter(word => word.length < 6);

     console.log(result);
 }

 /**********************************************
  * Filter example 2
  */

  function filterEx2(){
      let arr=[
          {id: 4},
          {id: 24},
          {id: 45},
          {id: 43},
          {id: 4},
          {id: 12},
          {id: 14},
          {id: 67},
          {id: 0},
          {id: 1},
          {id: 77}
      ];

      let newArr= arr.filter(filterByNumber);
      console.log(newArr);
  }
  function filterByNumber(item){
      if((item.id & 1)===1){            //odd number
          return true;
      }
  }