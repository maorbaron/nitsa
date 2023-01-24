const gs = {
    rnd:{
        genesis:{
            team:['m,n,m,r,b,s'],
            sl:'Maor Bar-on the all mighty ! '
        },
        superNova:{
            team:['a,o,y,z,s,s'],
            sl:'Or the menyek'
        }
    },
    sales:{
        canada:{
            team:['1','2','3'],
            sl:'mark'
        }
    }
};

function giveMeTeamOf(department,teamName){
    return gs[department][teamName].team
}
// console.log(
//     giveMeTeamOf('sales','canada')
// )

// console.log(gs['rnd'])
// console.log(gs.rnd);


const obj = {
    skillA:2,
    skillB:2,
    skillC:2
};

function calculate2(obj){
    // [2,2,2]
    return Object.values(obj).reduce( (a,b)=>{ return a + b },0) / Object.keys(obj).length;
    
}
console.log(
    calculate2(obj)
    )


function calculate(obj){
    let sum = 0;
    for (key in obj){
        const val = obj[key]
        sum+=val;
    }
    const len = Object.keys(obj).length;
    console.log(sum/len)
}





// const arr = [1,2,3,4,5];
// let sum1 = 0


// const result = arr.reduce((a,b)=>{
//     return a+b
// },0)

// console.log(result)
// console.log(obj[c])
// for (key in obj){
//     console.log(key)
// }

// const arr = [1,2,3,4,5];

// arr.forEach(el => {
//     console.log(el)
// })