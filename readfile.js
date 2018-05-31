let fs = require('fs');
 let ad = 'hello.txt'

 let reading = new Promise(function(resolve,reject){
       fs.readFile(ad,function (err,data){
           if(data){
               resolve(data.toString());
           }
           else{
               reject(err);
           }
       })
 });

 reading.then(function(res){
        console.log(res);
 }).catch(function(rej){
      console.log(rej);
 });