var net = require('net');

//callback used more than once
var server = net.createServer(function(socket){
    //socket handling logic
    var date = new Date();
    var month = ["0",""][Number(date.getMonth()>9)] + '' + (date.getMonth()+1);
    var day = ["0",""][Number(date.getDate()>9)] + '' + (date.getDate());
    var hours = ["0",""][Number(date.getHours()>9)] + '' + (date.getHours());
    var minutes = ["0",""][Number(date.getMinutes()>9)] + '' + (date.getMinutes());
    
    socket.end(''+date.getFullYear()+'-'+month+'-'+day+' '+hours+':'+minutes+'\n');
});

server.listen(process.argv[2]);