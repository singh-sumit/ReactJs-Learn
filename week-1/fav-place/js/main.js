// 3. Following is an Array of my favorite places and some two favorite place and remove            Kathmandu from the list and also print the array with its length.
//                  ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"]


let fav=["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"];

//remove some two favorite place
fav.splice(fav.indexOf('Pokhara'),1);
fav.splice(fav.indexOf('Lalitpur'),1);

//remove also ktm
fav.splice(fav.indexOf('Kathmandu'),1);

//log
console.log(fav);