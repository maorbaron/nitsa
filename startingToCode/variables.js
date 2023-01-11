// let num = 3; // number 
// const str = 'A'; // string

// == check the object <- convert the var 
// console.log(num == str) // true 
// console.log(num === str) // false 
// console.log(num + str); // will be a string;
        // 0,1,2,3,4

// arr.push(10);
// console.log(arr)
// arr.pop()
// console.log(arr);


const arr = ['nitsa','benja','shai','riki','moshe','maor']; // length =6 

// arr.find( (name,index) => {
//     if(name === 'riki'){
//         console.log(index);
//     }
// }) 

// arr.findIndex((name,index) =>{
//     if(name==='riki') {
//         console.log(index)
//     }
// })

const arrLength = arr.length;

for(let n = arrLength ; n > 0; n--){
        if( arr[n] === 'riki'){
        console.log(`riki FOUND at index ${n}`) ;
        }
    else{
        console.log(`its not riki but its ${arr[n]}`)
    }

}

// arr.forEach((element,index) => {
//    console.log(element, index)
// });
