let fs = require('fs');
let create = new Promise(function(resolve,reject){
    fs.open('mynewfile3.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('created');
    });
});
let write = new Promise(function(resolve,reject){
    fs.writeFile('mynewfile3.txt', 'how was your weekend! did u enjoy it.!', function (err) {
        if (err) throw err;
        console.log('Saved!');
});
});
let append = new Promise(function(resolve,reject){
fs.appendFile('mynewfile3.txt', 'I think you have a great weeked',function(err){
    if(err) throw err;
    console.log('updated');
});
});
create.then(function(res){
    console.log(res);
    write.then(function(res){
        console.log(res);
        append.then(function(res){
            console.log(res)
        }).catch(function(rej){
            console.log(rej);
        });
    }).catch(function(){
        console.log("error! not writen!");
    });
}).catch(function(rej){
  console.log(rej);
});