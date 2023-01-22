// Given a string containing only the characters x and y, find whether there are the same number of xs and ys.

// balanced("xxxyyy") => true
// balanced("yyyxxx") => true
// balanced("xxxyyyy") => false
// balanced("yyxyxxyxxyyyyxxxyxyx") => true
// balanced("xyxxxxyyyxyxxyxxyy") => false
// -------------------------- //


// Approaches //
             
const str = 'xyxxxxyyyxyxxyxxyyzfg';

function checkSameDuplicatedString(str){
    let x = 0;
    let y = 0;
    for (let i =0 ; i< str.length; i++){
        let char = str[i];
        if (char === 'x') {
            x+=1;
        }
        else{
            y+=1;
        }
    }
    
   return x === y ;
    
}
// end function //
const duplicateApproach = checkSameDuplicatedString(str);
//console.log(duplicateApproach)
// ++++ //


//  1 liner approach - more elegant way //
function checkSameDuplicatedString1Liner(str){
    let x = y = 0;
    for (let i =0 ; i< str.length; i++){
        str[i] === 'x' ? x += 1 : y +=1; 
    }
    return x === y; 
}

// end function //
const duplicateApproach1Liner = checkSameDuplicatedString1Liner(str);
// console.log(duplicateApproach1Liner)
// ++++ //


// Better Algorithm Function //
function checkSameDuplicatedStringBetterAlgo(str){
    let x = y = 0;
    let backWardIndex = str.length - 1 ;
    let splittedArray =( str.length % 2 === 0) ? str.length / 2 : str.length - 1 / 2 ;
    for (let i =0 ; i< splittedArray; i++){
        str[i] === 'x' ? x += 1 : y +=1; //from start 
        str[backWardIndex] === 'x' ? x += 1 : y +=1; // from end 
        backWardIndex -= 1
    }
    return x === y;
}
// end function //
const duplicateApproachBetterAlgo = checkSameDuplicatedStringBetterAlgo(str);
// console.log(duplicateApproachBetterAlgo)
// ++++ //


// Defensing with unknown input // ;
const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);

function checkSameDuplicatedStringBetterAlgoDefense(str){
    const tempObj = {};
    let backWardIndex = str.length - 1 ;
    let splittedArray =( str.length % 2 === 0) ? str.length / 2 : str.length - 1 / 2 ;
    for (let i =0 ; i< splittedArray; i++){
        isNaN(tempObj[str[i]] += 1) ? tempObj[str[i]] = 0 : tempObj[str[i]] += 1;
        isNaN(tempObj[str[backWardIndex]] += 1) ? tempObj[str[backWardIndex]] = 0 : tempObj[str[backWardIndex]] += 1;
        backWardIndex -= 1;
    }
    const sumValue = sumValues(tempObj);
    const firstKey = Object.keys(tempObj)[0];
    const amountKeys = Object.keys(tempObj).length;
    return (sumValue / amountKeys) === tempObj[firstKey]
}
const duplicateApproachBetterAlgoDefense = checkSameDuplicatedStringBetterAlgoDefense(str);
// console.log(duplicateApproachBetterAlgoDefense)