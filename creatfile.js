let fs = require('fs');
let create = new Promise(function(resolve,reject){
    fs.open('mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
    });
});
create.then(function(res){
    console.log(res);
}).catch(function(rej){
  console.log(rej);
});