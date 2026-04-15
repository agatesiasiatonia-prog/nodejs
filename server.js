const fs = require('fs')
console.log("1. starting application");
console.log("2. starting application");

var data = fs.readFileSync('myfile.txt','utf8');
console.log ("3. my data : ",data)
console.log("4. starting application");
console.log("5. starting application");
console.log("==================== sync=================================\n\n");


console.log("1. starting application");
console.log("2. starting application");

 fs.readFile('myfile.txt','utf8',(error,data)=>{
    if(error)
        throw error
 console.log ("3. my data : ",data)   
});
console.log("4. starting application");
console.log("5. starting application");