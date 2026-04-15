const { error } = require('console');
const { promises } = require('dns');
const fs = require('fs')
const fs2 = require('fs').promises

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
console.log("===================================promises=============================");

fs2.readFile('file1.txt', 'utf8').then ( data1=> {
  console.log("1. =============",data1);
  fs2.readFile('file2.txt', 'utf8').then( data2 => {
    console.log("2. =============",data2);
    fs2.readFile('file3.txt', 'utf8').then(data3 => {
      console.log("3. =============",data3);
      fs2.readFile('file4.txt', 'utf8').then(data4=>{
        console.log("4. ==========",data4)
        fs2.readFile('file5.txt', 'utf8')
        .then(data5=>console.log("Lastly we are done on file 5: ",data5));
        });
      });
  });
});