var through = require('through2');
var split = require('split');
var count = 1;
process.stdin
    .pipe(split())
    .pipe(through(function(buffer, encoding, next){
        if(count%2===1){
            this.push(buffer.toString().toLowerCase()+'\n');
        }
        else{
            this.push(buffer.toString().toUpperCase()+'\n');
        }
        count++;
        next();
    }, function(done){
        done();
    }))
    .pipe(process.stdout);