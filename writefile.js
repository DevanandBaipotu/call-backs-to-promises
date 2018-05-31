let fs = require("fs");
let write = new Promise(function(resolve,reject){
    fs.writeFile('mynewfile2.txt', 'how was your weekend! did u enjoy it.!', function (err) {
        if (err) throw err;
        console.log('Saved!');
});
});
write.then(function(res){
    console.log(res);
}).catch(function(){
    console.log("error! not writen!");
});
