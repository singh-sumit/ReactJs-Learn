/***************************************
 * Map holds key with any datatype unlike object which holds key wiith only string
 */

//to instantiate map
//  let map= new Map();

//  //to add 
// map.set(1,'number one');
// map.set('1','string one');
// map.set(true,'boolean true');

// //set object
// let ob=new Object();

// ob.name='sumit';
// ob.age=24;


// //add object to map 
// map.set('Person',ob);

// //display in map
// console.log(map);
// console.log(typeof(map));

// //display certain key element
// console.log(map.get(1));
// console.log(map.get('Person'));

// //second way to instantiate map elements
// let map2=new Map([
//     ['covid',19],
//     ['tubercolosis','Tv-28'],
//     [true,'boolean true']
// ]);

// map2.set(423,'alzimer');
// console.log(map2);
// console.log(map2.get(true));
// console.log(typeof(map2));


/******************************************
 * Operation on Map
 */

//  let fruitsMarket=new Map([
//                             ['apple',234],
//                             ['mango',530],
//                             ['papya',100],
//                             ['orange',700]
//                         ]);

// console.log(fruitsMarket.has('anar'));
// // fruitsMarket.delete('papya');
// // fruitsMarket.clear();
// console.log(fruitsMarket.size);

// console.log('-----Keys------');
// for(let fruits of fruitsMarket.keys()){
//     console.log(fruits);
// }

// console.log('-------Values-----')
// for(let fruitsVal of fruitsMarket.values()){
//     console.log(fruitsVal);
// }

// console.log('--------Key/Values---------');
// for(let fruits of fruitsMarket){
//     console.log(fruits);
// }

// console.log('for each loop');
// fruitsMarket.forEach(function(key,value){
//     console.log(key+'::'+value);
// })

// console.log(fruitsMarket.entries(function(fruits){
//     console.log(fruits.key);
// }));

// // let fru=fruitsMarket.forEach(function(fru){
// //     filter((fruits) => fruits.value<200));
// // }
// // console.log(fru);


/***************************************************
 * Set 
 * has no key ONLY has value
 * has no duplicate element
 */

 let set=new Set();

 //some objects
 let ram={'name' : 'Ram'};
 let hari={'name' : 'Hari'};
 let jhon={'name' : 'Jhon'};
 let doe=jhon;

 //adding to set
 set.add(ram);
 set.add(hari);
 set.add(jhon);
 set.add(ram);
 
 //add duplicate BUT cannot
 set.add(doe);

 //view 
 console.log(set);

 //for of loop
 console.log('------For of loop-------')
 for(let person of set){
     console.log(person.name);
 }

 //delete
 set.delete(hari);

 console.log(set);

 console.log(set.has(doe));


 /*********
  * has operation on set of object
  */

  let ballSet=new Set();

  ballSet.add('FootBall');
  ballSet.add('Baseball');
  ballSet.add('BasketBall');

  console.log(ballSet);

  let op=ballSet.has('Baseball');
  console.log(op);
/***********
 * for of
 */
console.log('----For of---')
for(let ball of ballSet){
    console.log(ball);
}

console.log('---For Each loop--')
ballSet.forEach(function(value){
    console.log(value);
});

console.log('-----Keys-----');
// for(let value of ballSet.values){
//     console.log(value);
// };


/*******************************************
 * getting unique values from array 
 */

 let values=['ram','sita','hari','shyam','ram','sita','hari'];
 console.log(values);

 function getUniqueValue(arr){
     return Array.from(new Set(arr));
 }

 alert(getUniqueValue(values));