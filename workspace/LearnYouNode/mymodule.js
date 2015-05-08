module.exports = function(pathname, extension, callback) {
    var fs = require('fs');
    var path = require('path');
    fs.readdir(pathname, function(err, list){
        if(err){
            return callback(err);
        }
        var newlist = [];
        list.forEach(function(name){
            if(path.extname(name) === '.'+extension){
                newlist.push(name);
            }
        });
        callback(null, newlist);
    });
}
