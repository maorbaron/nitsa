// const arr = [];
// const obj = {
//     nums:[]
// };
// const set = new Set();


// const db = [1,1,2,2,3,4,5];

// function insertToObj(arrInput){
//     // if is in our array do not insert 
//     arrInput.forEach(num => {
//         set.add(num);
//         arr.push(num)
//         obj.nums.push(num)
//     });
//     console.log(obj)
//     console.log("ARRAY")
//     console.log(arr)
//     console.log("SET")
//     console.log(set)
  
// }
// insertToObj(db);



// const dict = {
//     "m":'str',
//     "hfhf":[123,1234,123,123]
// }

// function multipleInputs(arr,dict,str){
//     // console.log(args)
//     //0 = array
//     //1 = dict
//     // 2 = string 
// }
// function singleInputs(input1,input2,input3){
//     console.log(input1,input2,input3)
// }

// multipleInputs([1,2,3],{nitsa:'qa'},'hello world')

// const arr = ['apple','mango','banana'];
let i = 0;
let response = false ; 

function someMagic(i){
    console.log(i)
    if (i===5){
        console.log('hey i am good ')
        // pretend is a way far far server api call 
        response = true;
    }
}

while (!response) {
    someMagic(i)
    i++;
} 

