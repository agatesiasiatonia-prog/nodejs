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



fs.readFile('file1.txt', 'utf8', (err, data1) => {
  if (err) 
    throw error
  console.log("=============================Task callbacks===================================");
  console.log("callback: 1. =============",data1);

  fs.readFile('file2.txt', 'utf8', (error, data2) => {
    if (error)
       console.log(error.message);
    console.log("callback: 2. =============",data2);

    fs.readFile('file3.txt', 'utf8', (err, data3) => {
      if (err)
        console.log("callback MSG ",err.message);
        
      console.log("callback: 3. =============",data3);

      fs.readFile('file4.txt', 'utf8', (err, data4) => {
        if (err) throw err;
        console.log("callback: 4. =============",data4);

        fs.readFile('file5.txt', 'utf8', (err, data5) => {
          if (err) throw err;
          console.log("callback: 5. =============",data5);
        });
      });
    });
  });
});

fs2.readFile('file1.txt', 'utf8').then ( data1=> {
  console.log("===================================promises=============================");
  console.log("Promise: 1. =============",data1);
  fs2.readFile('file2.txt', 'utf8').then( data2 => {
    console.log("Promise: 2. =============",data2);
    fs2.readFile('file3.txt', 'utf8').then(data3 => {
      console.log("Promise: 3. =============",data3);
      fs2.readFile('file4.txt', 'utf8').then(data4=>{
        console.log("Promise: 4. ==========",data4)
        fs2.readFile('file5.txt', 'utf8')
        .then(data5=>console.log("Promise: Lastly we are done on file 5: ",data5));
        }).catch(er=>console.log(er.message));;
      }).catch(er=>console.log(er.message));;
  }).catch(e=>console.log(e.message));
});




async function readFiles(){
  try{
    console.log("=============================function async/await====================");
  
  let data=await fs2.readFile('file2.txt','utf8');
  console.log("async/await : ",data);
  }catch(error){
    console.log("an error occured while reading file : ",error.message);
    
  }
}

readFiles()
console .log()