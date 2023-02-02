const arr = ['nitsa','benja','shai','riki','moshe','maor'];
const arr1 = [];

// arr.findIndex((name,index) => {
//     console.log(`my name is ${name} and i am at index ${index}`)
// });

// console.log(`last element is ${ arr[ arr.length - 1 ] }`);

//what is false ? 
// null , undefined , false , 0


function dividing2Numbers(num1, num2){
    // const result = num1 / num2;
    
    if ( typeof(num1) !== 'number' || typeof(num2) !== 'number' ){
        return 'nice easter egg';
    }
    const result1 = num1 % num2;
    if (result1 !== 0) {
        return 'something fishy with numbers'
    }
    return 'all good ! ' ;
}

// const funcResult = dividing2Numbers(6,3)

function sqlInjection(input){
    if(isNaN(+input)){
        return 'go away';
    }
    return 'all good';
    // return isNaN(+input) ?  'go away' : 'all good' 
}

// const sqlInjectionResult = sqlInjection('12')
// console.log(sqlInjectionResult)



const zoo = {
    dogs:{
        winner:{
            age:1.5,
            color:'black',
            type: 'noodnik',
            price: 6000
        }
    }
}

// console.log(zoo.dogs.winner.price)

const winner = {
    age:1.5,
    color:'black',
    type: 'noodnik',
    price: 6000,
    family:['maor','ori','lior']
};

// console.log(
//     winner.family[1]
// )
// console.log(winner)
// winner.price = 10000;
// console.log(winner)

// const pathArray = [1,2,0,3,4]

// for (let i = 0; i < pathArray.length - 1; i++) {
//     // undefined
//     if (! pathArray[i]) { // null / undefined  / false / 0 
//         console.log('WTF')
//     }
// }
