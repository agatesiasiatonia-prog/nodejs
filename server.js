const { error } = require('console');
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

console.log("=============================Task===================================");


fs.readFile('file1.txt', 'utf8', (err, data1) => {
  if (err) 
    throw error
  console.log("1. =============",data1);

  fs.readFile('file2.txt', 'utf8', (err, data2) => {
    if (err) 
        throw error
    console.log("2. =============",data2);

    fs.readFile('file3.txt', 'utf8', (err, data3) => {
      if (err)
        throw error
      console.log("3. =============",data3);

      fs.readFile('file4.txt', 'utf8', (err, data4) => {
        if (err) throw err;
        console.log("4. =============",data4);

        fs.readFile('file5.txt', 'utf8', (err, data5) => {
          if (err) throw err;
          console.log("5. =============",data5);
        });
      });
    });
  });
});