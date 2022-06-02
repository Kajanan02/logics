const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  


// let arr =[21,25,22,24,27,30,23,28] 
// console.log(typeof(arr));
const findMissing = num => {
    const max = Math.max(...num); 
    const min = Math.min(...num); 
    const missing = []
  
    for(let i=min; i<= max; i++) {
      if(!num.includes(i)) { 
        missing.push(i); 
      }
    }
    return missing;
  }
  
  readline.question(`Enter arr `, name => {
    console.log(findMissing(JSON.parse(name)));
    readline.close();
  });

//   console.log(findMissing(arr).join())