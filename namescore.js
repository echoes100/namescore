//1. read the file
//import {readFileSynch} from fs 
//sort names = sort file data in array

//Regular expression: regex= forward slash word forward slash g = it'll search for that word
//for eg: /"/ g  looks for double quote.

const fs = require ('fs');

const nameScore = function(filename){
    const fileData = fs.readFileSync(filename, 'utf8');    
   // const nameArray = fileData.split(',');
   
   //replace global
   const nameArray = fileData.replace(/\"/g, '').split(',').sort();
    console.log(fileData)
    console.log(nameArray) // looks like names have single quote but they dont.
    //it's just JS way of showing string
    return 5
}

const score = nameScore('names.txt')
console.log("Score is", score)