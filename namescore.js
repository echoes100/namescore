//1. read the file
//import {readFileSynch} from fs 
//sort names = sort file data in array

//Regular expression: regex= forward slash word forward slash g = it'll search for that word
//for eg: /"/ g  looks for double quote.

const fs = require ('fs');

const Alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const nameScore = function(filename){
    const fileData = fs.readFileSync(filename, 'utf8');    
   // const nameArray = fileData.split(',');
   
   //replace global
   const nameArray = fileData.replace(/\"/g, '').split(',').sort();
    //console.log(fileData)
    //console.log(nameArray) // looks like names have single quote but they dont.
    //it's just JS way of showing string

    let ans=0;

    // to find the index for each name, add i
    nameArray.forEach((firstName, i) => {
        let nameSum = 0
        const namePos = i + 1
        //console.log(firstName)
        firstName.split('').forEach(letter =>{
            const letterPosition = Alpha.indexOf(letter) + 1;
            //console.log('\t', letter, letterPosition) print value of each letter
            nameSum += letterPosition
        })
        //console.log (firstName, namePos, nameSum, nameVal)
        const nameVal = nameSum + namePos
        ans += nameVal
    })
    return ans
}

const score = nameScore('names.txt')
console.log("Score is", score)