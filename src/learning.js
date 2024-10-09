console.log("Hello");
console.log("Welcome to my web");
let myinfo = {name:"Dong",
              email:"haidong0711@gmail.com",
              address:"weggethb",
              year:2003
              }
console.log(myinfo);
const currentyear = new Date().getFullYear();
console.log("My age:",currentyear-myinfo.year);
// alert("I am " + myinfo.name); //cach de show dialog don gian
console.log(Math.round(Math.random()*100)/100);
console.log(+Math.random().toFixed(2));

//sorting
// step 1: generate array number
const lowerlimit = 1;
const upperlimit = 100;
const maxitem = 20;
//Advance
const option ={maxitem,lowerlimit,upperlimit};
let myArray=generatenumber(option);
console.log(myArray);

//step 2: sort
let isIncrease = true;
const direction = isIncrease * 2 - 1;
for(let i = 0; i < maxitem - 1; i++) {
    for(let j = 0; i < maxitem; j++) {
        if(myArray[i]*direction > myArray[j]*direction) {
            swap(myArray,i,j);
        }
    }
}

console.log("After sort");
console.log(myArray);
function swap(arr,i,j) {
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t
}

function generatenumber({maxitem,lowerlimit,upperlimit}) {
    let myArray = [];

    for(let i = 0; i < maxitem; i++) {
        myArray.push(generatenumber(Math.random(),lowerlimit,upperlimit));
    }
    return myArray;
}

console.log(generatenumber(Math.random(),lowerlimit,upperlimit));

